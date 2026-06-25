-- =============================================================================
-- CEONIS Kernel — PostgreSQL schema (001_kernel.sql)
-- =============================================================================
-- Implements the Object Dictionary (Technical Architecture Specification §3)
-- as relational tables.
--
-- [L2] Postgres-first per Spec §4. The KC graph uses adjacency tables and
-- recursive CTEs. Promote to a dedicated graph store only when traversal
-- performance demands it — an architectural decision requiring Opus review.
--
-- DEPENDENCY RULE (Spec §2): content tables NEVER reference a learner.
-- Learner tables reference content only by stable id.
-- Foreign key direction enforces this mechanically.
--
-- CONSTITUTIONAL BOUNDARIES:
-- — No column stores an inferred trait of a child (Article 1).
-- — No column stores time-on-platform, session length, streak, or return
--   frequency (Article 4).
-- — CHECK constraints on response_pattern_record mirror the TypeScript closed
--   union, satisfying Acceptance Criterion T3.7 at the database layer.
-- =============================================================================

-- =============================================================================
-- CONTENT TABLES
-- =============================================================================

CREATE TABLE developmental_stage (
    id                      TEXT PRIMARY KEY,
    name                    TEXT NOT NULL,
    age_min_months          INT  NOT NULL,
    age_max_months          INT  NOT NULL,
    interaction_model       TEXT NOT NULL,
    adult_involvement_model TEXT NOT NULL,
    success_metrics         JSONB NOT NULL DEFAULT '[]',
    CHECK (age_max_months >= age_min_months)
);

CREATE TABLE knowledge_component (
    id          TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    description TEXT NOT NULL,
    domain      TEXT NOT NULL,
    kc_type     TEXT NOT NULL CHECK (kc_type IN ('skill', 'breadth'))
);

CREATE TABLE kc_stage_suitability (
    kc_id    TEXT NOT NULL REFERENCES knowledge_component(id) ON DELETE CASCADE,
    stage_id TEXT NOT NULL REFERENCES developmental_stage(id) ON DELETE RESTRICT,
    PRIMARY KEY (kc_id, stage_id)
);

CREATE TABLE prerequisite_edge (
    dependent_kc      TEXT NOT NULL REFERENCES knowledge_component(id) ON DELETE CASCADE,
    prerequisite_kc   TEXT NOT NULL REFERENCES knowledge_component(id) ON DELETE CASCADE,
    mastery_threshold REAL NOT NULL CHECK (mastery_threshold BETWEEN 0 AND 1),
    hard_gate         BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (dependent_kc, prerequisite_kc),
    CHECK (dependent_kc <> prerequisite_kc)
);

CREATE TABLE misconception (
    id                    TEXT PRIMARY KEY,
    name                  TEXT NOT NULL,
    description           TEXT NOT NULL,
    kc_id                 TEXT NOT NULL REFERENCES knowledge_component(id) ON DELETE CASCADE,
    confront_strategy_ref TEXT NOT NULL
);

CREATE TABLE content_activity (
    id            TEXT PRIMARY KEY,
    title         TEXT NOT NULL,
    activity_type TEXT NOT NULL CHECK (activity_type IN ('lesson', 'lab', 'simulation', 'project')),
    instructional_modes   JSONB NOT NULL DEFAULT '[]',
    representations       JSONB NOT NULL,
    response_modes        JSONB NOT NULL,
    parent_extensions     JSONB,
    offline_activities    JSONB,
    creative_applications JSONB,
    CHECK (jsonb_array_length(representations) >= 1),
    CHECK (jsonb_array_length(response_modes)  >= 1)
);

CREATE TABLE activity_teaches_kc (
    activity_id TEXT NOT NULL REFERENCES content_activity(id) ON DELETE CASCADE,
    kc_id       TEXT NOT NULL REFERENCES knowledge_component(id) ON DELETE RESTRICT,
    PRIMARY KEY (activity_id, kc_id)
);

CREATE TABLE activity_requires_kc (
    activity_id TEXT NOT NULL REFERENCES content_activity(id) ON DELETE CASCADE,
    kc_id       TEXT NOT NULL REFERENCES knowledge_component(id) ON DELETE RESTRICT,
    PRIMARY KEY (activity_id, kc_id)
);

CREATE TABLE activity_stage_suitability (
    activity_id TEXT NOT NULL REFERENCES content_activity(id) ON DELETE CASCADE,
    stage_id    TEXT NOT NULL REFERENCES developmental_stage(id) ON DELETE RESTRICT,
    PRIMARY KEY (activity_id, stage_id)
);

CREATE TABLE assessment (
    id          TEXT PRIMARY KEY,
    activity_id TEXT NOT NULL REFERENCES content_activity(id) ON DELETE CASCADE
);

CREATE TABLE assessment_item (
    id                   TEXT PRIMARY KEY,
    assessment_id        TEXT NOT NULL REFERENCES assessment(id) ON DELETE CASCADE,
    prompt               TEXT NOT NULL,
    valid_response_modes JSONB NOT NULL DEFAULT '[]',
    feedback_timing      TEXT NOT NULL CHECK (feedback_timing IN ('immediate', 'delayed')),
    feedback_form        TEXT NOT NULL,
    self_correcting      BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE item_measures_kc (
    item_id TEXT NOT NULL REFERENCES assessment_item(id) ON DELETE CASCADE,
    kc_id   TEXT NOT NULL REFERENCES knowledge_component(id) ON DELETE RESTRICT,
    PRIMARY KEY (item_id, kc_id)
);

CREATE TABLE response_option (
    id                    TEXT PRIMARY KEY,
    item_id               TEXT NOT NULL REFERENCES assessment_item(id) ON DELETE CASCADE,
    label                 TEXT NOT NULL,
    is_correct            BOOLEAN NOT NULL,
    implies_misconception TEXT REFERENCES misconception(id) ON DELETE RESTRICT,
    CHECK (
      (is_correct AND implies_misconception IS NULL) OR
      (NOT is_correct)
    )
);

-- =============================================================================
-- LEARNER TABLES
-- =============================================================================

CREATE TABLE child (
    id          TEXT PRIMARY KEY,
    enrolled_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE learning_journey (
    id              TEXT PRIMARY KEY,
    child_id        TEXT NOT NULL UNIQUE REFERENCES child(id) ON DELETE CASCADE,
    current_stage   TEXT NOT NULL REFERENCES developmental_stage(id) ON DELETE RESTRICT,
    calibration_low  REAL NOT NULL DEFAULT 0.60 CHECK (calibration_low  BETWEEN 0 AND 1),
    calibration_high REAL NOT NULL DEFAULT 0.85 CHECK (calibration_high BETWEEN 0 AND 1),
    welfare_flag     TEXT NOT NULL DEFAULT 'none' CHECK (
        welfare_flag IN ('none', 'frustration_suspected', 'disengagement_suspected')
    ),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    CHECK (calibration_high >= calibration_low)
);

CREATE TABLE mastery_record (
    journey_id           TEXT NOT NULL REFERENCES learning_journey(id) ON DELETE CASCADE,
    kc_id                TEXT NOT NULL REFERENCES knowledge_component(id) ON DELETE RESTRICT,
    estimate_value       REAL NOT NULL CHECK (estimate_value       BETWEEN 0 AND 1),
    estimate_uncertainty REAL NOT NULL CHECK (estimate_uncertainty BETWEEN 0 AND 1),
    last_encountered     TIMESTAMPTZ NOT NULL,
    retention_strength   REAL NOT NULL CHECK (retention_strength BETWEEN 0 AND 1),
    PRIMARY KEY (journey_id, kc_id)
);

CREATE TABLE misconception_state (
    journey_id       TEXT NOT NULL REFERENCES learning_journey(id) ON DELETE CASCADE,
    misconception_id TEXT NOT NULL REFERENCES misconception(id)    ON DELETE RESTRICT,
    status           TEXT NOT NULL CHECK (status IN ('active', 'dormant', 'resolved')),
    PRIMARY KEY (journey_id, misconception_id)
);

CREATE TABLE response_pattern_record (
    journey_id TEXT NOT NULL REFERENCES learning_journey(id) ON DELETE CASCADE,
    pattern    TEXT NOT NULL CHECK (pattern IN (
        'helped_by_chunked_instructions',
        'helped_by_visual_before_text',
        'helped_by_worked_example_first',
        'helped_by_extra_retrieval_practice',
        'helped_by_hands_on_exploration',
        'helped_by_slower_pacing',
        'helped_by_immediate_feedback',
        'helped_by_concrete_before_abstract',
        'engaged_longer_with_creation_tasks',
        'engaged_longer_with_narrative_framing'
    )),
    recency  TIMESTAMPTZ NOT NULL,
    strength REAL        NOT NULL CHECK (strength BETWEEN 0 AND 1),
    PRIMARY KEY (journey_id, pattern)
);

CREATE TABLE topic_affinity (
    journey_id TEXT NOT NULL REFERENCES learning_journey(id) ON DELETE CASCADE,
    topic      TEXT NOT NULL,
    strength   REAL NOT NULL CHECK (strength BETWEEN 0 AND 1),
    PRIMARY KEY (journey_id, topic)
);

CREATE TABLE accessibility_profile (
    journey_id               TEXT PRIMARY KEY REFERENCES learning_journey(id) ON DELETE CASCADE,
    interaction_needs        JSONB NOT NULL DEFAULT '[]',
    communication_modalities JSONB NOT NULL DEFAULT '[]',
    languages                JSONB NOT NULL DEFAULT '[]',
    valid_evidence_modes     JSONB NOT NULL DEFAULT '[]',
    presentation_preferences JSONB NOT NULL DEFAULT '[]'
);

CREATE TABLE goal_override (
    id                  TEXT PRIMARY KEY,
    journey_id          TEXT NOT NULL REFERENCES learning_journey(id) ON DELETE CASCADE,
    kc_id               TEXT REFERENCES knowledge_component(id) ON DELETE CASCADE,
    domain              TEXT,
    target_modification TEXT NOT NULL,
    rationale           TEXT NOT NULL,
    authored_by         TEXT NOT NULL,
    review_date         DATE NOT NULL,
    CHECK (kc_id IS NOT NULL OR domain IS NOT NULL)
);

CREATE TABLE journey_log (
    id         TEXT PRIMARY KEY,
    journey_id TEXT NOT NULL REFERENCES learning_journey(id) ON DELETE CASCADE,
    ts         TIMESTAMPTZ NOT NULL DEFAULT now(),
    kind       TEXT NOT NULL,
    detail     JSONB NOT NULL DEFAULT '{}'
);

-- =============================================================================
-- INDEXES
-- =============================================================================

CREATE INDEX idx_journey_log_journey   ON journey_log(journey_id, ts);
CREATE INDEX idx_mastery_journey       ON mastery_record(journey_id);
CREATE INDEX idx_prereq_dependent      ON prerequisite_edge(dependent_kc);
CREATE INDEX idx_prereq_prerequisite   ON prerequisite_edge(prerequisite_kc);
CREATE INDEX idx_misconception_state_j ON misconception_state(journey_id);
CREATE INDEX idx_misconception_kc      ON misconception(kc_id);
