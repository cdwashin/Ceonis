import { useState, useCallback } from 'react'
import { ACCESSIBILITY_DEFAULTS } from '../data/constants.js'

const STORAGE_KEY = 'ceonis_progress_v1'

const DEFAULT_PROFILE = {
  name: '', age: 7, birthdate: null, language: 'en', avatar: null,
  level: 1, xp: 0, xpNext: 1000, streak: 0, longestStreak: 0,
  hoursLearned: 0, lastActiveDate: null, themeMode: 'dark', devMode: false,
  narrationOn: true, sfxOn: true, musicOn: true,
  voiceRate: 1, voicePitch: 1, voiceVolume: 1,
  selectedVoiceURI: null, narratorPersona: 'luna',
  onboardingComplete: false,
  accessibility: { ...ACCESSIBILITY_DEFAULTS },
}

const DEFAULT_PROGRESS = {
  profile: DEFAULT_PROFILE,
  lessonsCompleted: {},
  vocabularyLearned: {},
  badgesEarned: {},
  worldProgress: {},
  dailyLog: {},
}

function mergeProgress(stored) {
  return {
    ...DEFAULT_PROGRESS,
    ...stored,
    profile: {
      ...DEFAULT_PROFILE,
      ...(stored.profile || {}),
      accessibility: {
        ...ACCESSIBILITY_DEFAULTS,
        ...(stored.profile?.accessibility || {}),
      },
    },
  }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PROGRESS
    return mergeProgress(JSON.parse(raw))
  } catch { return DEFAULT_PROGRESS }
}

function saveToStorage(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)) } catch {}
}

function today() { return new Date().toISOString().slice(0, 10) }

function computeStreak(lastActiveDate, currentStreak, longestStreak) {
  const todayStr = today()
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yStr = yesterday.toISOString().slice(0, 10)
  const streak = lastActiveDate === todayStr ? currentStreak
    : lastActiveDate === yStr ? currentStreak + 1 : 1
  return { streak, longestStreak: Math.max(longestStreak, streak), lastActiveDate: todayStr }
}

export function useProgress() {
  const [data, setData] = useState(loadFromStorage)
  const save = useCallback((next) => { setData(next); saveToStorage(next) }, [])

  const updateProfile = useCallback((fields) => {
    save({ ...data, profile: { ...data.profile, ...fields } })
  }, [data, save])

  const updateAccessibility = useCallback((fields) => {
    save({ ...data, profile: { ...data.profile, accessibility: { ...data.profile.accessibility, ...fields } } })
  }, [data, save])

  const completeLesson = useCallback((worldId, lessonId, score, lessonXp) => {
    const xpEarned = lessonXp
      ? Math.max(10, Math.round((score / 100) * lessonXp))
      : Math.max(10, Math.round((score / 100) * 100))
    const lessonsCompleted = {
      ...data.lessonsCompleted,
      [worldId]: { ...(data.lessonsCompleted[worldId] || {}), [lessonId]: { score, completedAt: Date.now(), xpEarned } },
    }
    let xp = (data.profile.xp || 0) + xpEarned
    let level = data.profile.level || 1
    let xpNext = data.profile.xpNext || 1000
    while (xp >= xpNext) { xp -= xpNext; level++; xpNext = Math.round(xpNext * 1.25) }
    const streakData = computeStreak(data.profile.lastActiveDate, data.profile.streak || 0, data.profile.longestStreak || 0)
    const todayStr = today()
    const dailyLog = {
      ...data.dailyLog,
      [todayStr]: {
        xp: (data.dailyLog[todayStr]?.xp || 0) + xpEarned,
        lessons: (data.dailyLog[todayStr]?.lessons || 0) + 1,
        minutes: data.dailyLog[todayStr]?.minutes || 0,
      },
    }
    save({ ...data, lessonsCompleted, dailyLog, profile: { ...data.profile, xp, level, xpNext, ...streakData } })
    return xpEarned
  }, [data, save])

  const learnWord = useCallback((wordId) => {
    const existing = data.vocabularyLearned[wordId]
    save({
      ...data,
      vocabularyLearned: {
        ...data.vocabularyLearned,
        [wordId]: existing
          ? { ...existing, reviewCount: (existing.reviewCount || 0) + 1 }
          : { learnedAt: Date.now(), reviewCount: 1 },
      },
    })
  }, [data, save])

  const earnBadge = useCallback((badgeId, worldId) => {
    if (data.badgesEarned[badgeId]) return
    save({ ...data, badgesEarned: { ...data.badgesEarned, [badgeId]: { earnedAt: Date.now(), worldId } } })
  }, [data, save])

  const getWorldPct = useCallback((worldId, curriculum) => {
    const cur = curriculum?.[worldId]
    if (!cur?.subworlds) return 0
    const total = cur.subworlds.reduce((s, sw) => s + (sw.lessons?.length || sw.concepts?.length || 0), 0)
    if (!total) return 0
    return Math.min(100, Math.round((Object.keys(data.lessonsCompleted?.[worldId] || {}).length / total) * 100))
  }, [data])

  const getWeeklyActivity = useCallback(() => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i)
      const key = d.toISOString().slice(0, 10)
      days.push({ date: key, label: ['S','M','T','W','T','F','S'][d.getDay()], xp: data.dailyLog?.[key]?.xp || 0, lessons: data.dailyLog?.[key]?.lessons || 0 })
    }
    return days
  }, [data])

  const totals = {
    xp: data.profile.xp || 0,
    level: data.profile.level || 1,
    xpNext: data.profile.xpNext || 1000,
    streak: data.profile.streak || 0,
    longestStreak: data.profile.longestStreak || 0,
    lessonsCompleted: Object.values(data.lessonsCompleted || {}).reduce((s, w) => s + Object.keys(w).length, 0),
    vocabularyLearned: Object.keys(data.vocabularyLearned || {}).length,
    badgesEarned: Object.keys(data.badgesEarned || {}).length,
  }

  return {
    profile: data.profile,
    lessonsCompleted: data.lessonsCompleted,
    vocabularyLearned: data.vocabularyLearned,
    badgesEarned: data.badgesEarned,
    dailyLog: data.dailyLog,
    totals,
    updateProfile,
    updateAccessibility,
    completeLesson,
    learnWord,
    earnBadge,
    getWorldPct,
    getWeeklyActivity,
  }
}
