export const GALAXIES = [
  { id:'cosmos',    name:'Space & Cosmos',      worlds:1, color:'#7C6AE0', glow:'rgba(124,106,224,.9)', x:50, y:18 },
  { id:'language',  name:'Language',             worlds:2, color:'#C4A035', glow:'rgba(196,160,53,.9)',  x:17, y:31 },
  { id:'science',   name:'Science',              worlds:2, color:'#3AB5D4', glow:'rgba(58,181,212,.9)',  x:83, y:31 },
  { id:'nature',    name:'Natural World',        worlds:2, color:'#3A9E5A', glow:'rgba(58,158,90,.9)',   x:13, y:48 },
  { id:'math',      name:'Mathematics',          worlds:1, color:'#9B6AE0', glow:'rgba(155,106,224,.9)', x:50, y:47 },
  { id:'arts',      name:'Arts & Music',         worlds:1, color:'#C44898', glow:'rgba(196,72,152,.9)',  x:87, y:48 },
  { id:'history',   name:'History',              worlds:2, color:'#E8A030', glow:'rgba(232,160,48,.9)',  x:22, y:63 },
  { id:'tech',      name:'Technology',           worlds:1, color:'#20C8E0', glow:'rgba(32,200,224,.9)',  x:78, y:63 },
  { id:'society',   name:'Society',              worlds:3, color:'#3A80D4', glow:'rgba(58,128,212,.9)',  x:38, y:77 },
  { id:'mythology', name:'Folklore & Mythology', worlds:3, color:'#D4507A', glow:'rgba(212,80,122,.9)',  x:62, y:77 },
  { id:'health',    name:'Health & Body',        worlds:2, color:'#E86040', glow:'rgba(232,96,64,.9)',   x:50, y:91 },
]

export const ORB_SIZES = {
  cosmos:86, language:78, science:78, nature:76, math:82, arts:76,
  history:74, tech:74, society:76, mythology:78, health:74,
}

export const FLOAT_PARAMS = [
  {dur:8.2,delay:0,dist:10},{dur:9.6,delay:1.4,dist:8},{dur:7.8,delay:2.8,dist:11},
  {dur:10.2,delay:.6,dist:9},{dur:8.8,delay:3.2,dist:10},{dur:9.2,delay:1.8,dist:9},
  {dur:7.4,delay:.4,dist:8},{dur:10.8,delay:2.2,dist:7},{dur:8.4,delay:3.8,dist:9},
  {dur:9.0,delay:1.1,dist:10},{dur:7.6,delay:2.5,dist:8},
]

export const THEMES = {
  dark: {
    bg:'#06040E', bg1:'#0A0818',
    surface:'rgba(255,255,255,.06)', surfaceHov:'rgba(255,255,255,.1)',
    border:'rgba(255,255,255,.09)', borderBright:'rgba(255,255,255,.18)',
    text:'#F0EEF8', textSub:'rgba(240,238,248,.55)', textMuted:'rgba(240,238,248,.3)',
    nav:'rgba(6,4,18,.94)',
  },
  light: {
    bg:'#F2F0FA', bg1:'#E8E4F4',
    surface:'rgba(0,0,0,.05)', surfaceHov:'rgba(0,0,0,.09)',
    border:'rgba(0,0,0,.09)', borderBright:'rgba(0,0,0,.2)',
    text:'#1A1828', textSub:'rgba(26,24,40,.55)', textMuted:'rgba(26,24,40,.3)',
    nav:'rgba(242,240,250,.94)',
  },
  highContrast: {
    bg:'#000000', bg1:'#0A0A0A',
    surface:'rgba(255,255,255,.12)', surfaceHov:'rgba(255,255,255,.18)',
    border:'rgba(255,255,255,.3)', borderBright:'rgba(255,255,255,.6)',
    text:'#FFFFFF', textSub:'rgba(255,255,255,.8)', textMuted:'rgba(255,255,255,.5)',
    nav:'rgba(0,0,0,.98)',
  },
}

export const LEARNING_STAGES = [
  {id:'discover', label:'Discover', color:'#7C6AE0', desc:'Observe the concept — no pressure, just look'},
  {id:'listen',   label:'Listen',   color:'#3AB5D4', desc:'Hear narration — let the story sink in'},
  {id:'see',      label:'See',      color:'#C4A035', desc:'Visual examples, diagrams, illustrations'},
  {id:'interact', label:'Interact', color:'#3A9E5A', desc:'Touch, drag, build — manipulate the concept'},
  {id:'practice', label:'Practice', color:'#E8A030', desc:'Games, matching, exercises'},
  {id:'apply',    label:'Apply',    color:'#C44898', desc:'Real-world connections — why this matters'},
  {id:'create',   label:'Create',   color:'#20C8E0', desc:'Build, draw, compose, or invent'},
  {id:'master',   label:'Master',   color:'#FFD73C', desc:'Assessment — prove your understanding'},
]

export const AGE_PATHS = {
  '0-2':  {label:'Explorer Path',     color:'#FF8C42', desc:'Visual learning, sounds, simple recognition'},
  '3-4':  {label:'Discovery Path',    color:'#FFD73C', desc:'Matching, sorting, early vocabulary'},
  '5-6':  {label:'Foundation Path',   color:'#3A9E5A', desc:'Letters, numbers, colors, shapes'},
  '7-8':  {label:'Core Path',         color:'#3AB5D4', desc:'Reading, math, science, geography'},
  '9-10': {label:'Advanced Path',     color:'#7C6AE0', desc:'Projects, research, critical thinking'},
  '11-12':{label:'Scholar Path',      color:'#C44898', desc:'Analysis, writing, advanced concepts'},
  '13-15':{label:'Extended Academic', color:'#E8A030', desc:'High school content, AP foundations'},
  '16+':  {label:'Genius Path',       color:'#D4507A', desc:'AP-level, university prep'},
}

export function getAgePath(age) {
  if (age <= 2)  return '0-2'
  if (age <= 4)  return '3-4'
  if (age <= 6)  return '5-6'
  if (age <= 8)  return '7-8'
  if (age <= 10) return '9-10'
  if (age <= 12) return '11-12'
  if (age <= 15) return '13-15'
  return '16+'
}

export const GENIUS_PATHS = {
  math:     ['Number Theory','Pre-Algebra','Algebra I','Algebra II','Geometry','Statistics','Calculus'],
  science:  ['Physics','Chemistry','Biology','Earth Science','Astronomy','Engineering'],
  cosmos:   ['Astrophysics','Cosmology','Orbital Mechanics','Relativity','Quantum Physics'],
  language: ['Etymology','Linguistics','Creative Writing','Rhetoric','Public Speaking'],
  arts:     ['Music Theory','Composition','Art History','Color Science','Film Studies'],
  tech:     ['Programming','Robotics','AI Concepts','Cybersecurity','Engineering Design'],
  history:  ['Historical Analysis','Primary Sources','World Civilizations','Political Theory','Philosophy'],
  nature:   ['Ecology','Conservation','Climatology','Geology','Marine Biology'],
  society:  ['Economics','Political Science','Anthropology','Psychology','Sociology'],
  mythology:['Comparative Mythology','Folklore Studies','Oral Traditions','Literary Analysis','Cultural Studies'],
  health:   ['Human Biology','Nutrition Science','Mental Health','Public Health','Anatomy'],
}

export const NAV_TABS = [
  {id:'universe',    label:'Universe',  icon:'universe'},
  {id:'journey',     label:'Journey',   icon:'journey'},
  {id:'communicate', label:'Speak',     icon:'communicate'},
  {id:'awards',      label:'Awards',    icon:'award'},
  {id:'profile',     label:'Profile',   icon:'profile'},
  {id:'parent',      label:'Parent',    icon:'parent'},
]

export const ACCESSIBILITY_DEFAULTS = {
  reducedMotion:   false,
  reducedSensory:  false,
  highContrast:    false,
  largeText:       false,
  closedCaptions:  false,
  shortLessonMode: false,
  focusMode:       false,
  extraRepetition: false,
  visualTimers:    false,
  breakReminders:  false,
}
