import { useState, useCallback, useRef, useEffect } from 'react'

export const NARRATOR_PERSONAS = [
  { id:'luna',  name:'Luna',  emoji:'🌙', desc:'Warm and gentle — great for young learners',   pitch:1.1, rate:0.9  },
  { id:'atlas', name:'Atlas', emoji:'🗺️', desc:'Deep and calm — ideal for older learners',     pitch:0.8, rate:0.95 },
  { id:'nova',  name:'Nova',  emoji:'✨', desc:'Bright and energetic — fun for exploration',   pitch:1.2, rate:1.0  },
  { id:'river', name:'River', emoji:'🌊', desc:'Clear and steady — perfect for focus mode',    pitch:1.0, rate:0.85 },
  { id:'sage',  name:'Sage',  emoji:'🌿', desc:'Wise and measured — advanced learners',        pitch:0.9, rate:0.95 },
]

export const SUPPORTED_LANGUAGES = [
  { code:'en', label:'English',            langCode:'en-US' },
  { code:'es', label:'Español',            langCode:'es-ES' },
  { code:'pt', label:'Português (Brasil)', langCode:'pt-BR' },
  { code:'zh', label:'中文',               langCode:'zh-CN' },
  { code:'fr', label:'Français',           langCode:'fr-FR' },
  { code:'ar', label:'العربية',            langCode:'ar-SA' },
  { code:'hi', label:'हिन्दी',              langCode:'hi-IN' },
]

export function useNarrator(profile) {
  const [speaking,  setSpeaking]  = useState(false)
  const [voices,    setVoices]    = useState([])
  const [rate,      setRate]      = useState(profile?.voiceRate   || 1)
  const [pitch,     setPitch]     = useState(profile?.voicePitch  || 1)
  const [volume,    setVolume]    = useState(profile?.voiceVolume || 1)
  const [personaId, setPersonaId] = useState(profile?.narratorPersona || 'luna')
  const [voiceURI,  setVoiceURI]  = useState(profile?.selectedVoiceURI || null)
  const utteranceRef = useRef(null)

  useEffect(() => {
    function loadVoices() {
      const v = window.speechSynthesis?.getVoices() || []
      if (v.length > 0) setVoices(v)
    }
    loadVoices()
    window.speechSynthesis?.addEventListener('voiceschanged', loadVoices)
    return () => window.speechSynthesis?.removeEventListener('voiceschanged', loadVoices)
  }, [])

  function resolveVoice(langCode) {
    if (!voices.length) return null
    if (voiceURI) {
      const v = voices.find(v => v.voiceURI === voiceURI)
      if (v) return v
    }
    const lang = langCode || profile?.language || 'en'
    const targetLang = SUPPORTED_LANGUAGES.find(l => l.code === lang)?.langCode || 'en-US'
    return voices.find(v => v.lang.startsWith(targetLang.slice(0, 2)))
      || voices.find(v => v.lang.startsWith('en'))
      || voices[0]
  }

  function getPersonaDefaults() {
    return NARRATOR_PERSONAS.find(p => p.id === personaId) || NARRATOR_PERSONAS[0]
  }

  const speak = useCallback((text, langCode) => {
    if (!window.speechSynthesis || !text) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    const persona = getPersonaDefaults()
    u.rate   = rate   !== 1 ? rate   : persona.rate
    u.pitch  = pitch  !== 1 ? pitch  : persona.pitch
    u.volume = volume
    const selectedVoice = resolveVoice(langCode)
    if (selectedVoice) u.voice = selectedVoice
    if (langCode) {
      const lang = SUPPORTED_LANGUAGES.find(l => l.code === langCode)
      if (lang) u.lang = lang.langCode
    }
    u.onstart = () => setSpeaking(true)
    u.onend   = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    utteranceRef.current = u
    window.speechSynthesis.speak(u)
  }, [rate, pitch, volume, voiceURI, personaId, voices, profile])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
  }, [])

  const speakWord = useCallback((vocab) => {
    speak(`${vocab.word}. ${vocab.phonetic}. ${vocab.definition}. For example: ${vocab.example}`)
  }, [speak])

  const preview = useCallback((persona) => {
    speak(`Hello! I am ${persona.name}. I will be your guide through Ceonis.`)
  }, [speak])

  return {
    speak, stop, speakWord, preview,
    speaking, voices,
    rate, setRate,
    pitch, setPitch,
    volume, setVolume,
    personaId, setPersonaId,
    voiceURI, setVoiceURI,
    personas: NARRATOR_PERSONAS,
    languages: SUPPORTED_LANGUAGES,
  }
}
