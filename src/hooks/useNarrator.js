import { useState, useCallback } from 'react'

export function useNarrator() {
  const [speaking, setSpeaking] = useState(false)
  const [rate,     setRate]     = useState(1)
  const [pitch,    setPitch]    = useState(1)
  const [volume,   setVolume]   = useState(1)

  const speak = useCallback((text) => {
    if (!window.speechSynthesis || !text) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.rate = rate; u.pitch = pitch; u.volume = volume
    u.onstart = () => setSpeaking(true)
    u.onend   = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(u)
  }, [rate, pitch, volume])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
  }, [])

  const speakWord = useCallback((vocab) => {
    speak(`${vocab.word}. ${vocab.phonetic}. ${vocab.definition}. For example: ${vocab.example}`)
  }, [speak])

  return { speak, stop, speakWord, speaking, rate, setRate, pitch, setPitch, volume, setVolume }
}
