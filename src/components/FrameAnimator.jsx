import { useState, useEffect, useRef } from 'react'

export default function FrameAnimator({
  frames = [],
  basePath = '',
  fps = 12,
  loop = true,
  autoPlay = false,
  width = 280,
  height = 280,
  label = '',
  showControls = true,
  onComplete = null,
  style = {},
}) {
  const [current,   setCurrent]   = useState(0)
  const [playing,   setPlaying]   = useState(autoPlay)
  const [hasFrames, setHasFrames] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!frames.length || !basePath) { setHasFrames(false); return }
    const img = new Image()
    img.onload  = () => setHasFrames(true)
    img.onerror = () => setHasFrames(false)
    img.src = `${basePath}${frames[0]}`
  }, [frames, basePath])

  useEffect(() => {
    if (!playing || !hasFrames || frames.length <= 1) return
    intervalRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = prev + 1
        if (next >= frames.length) {
          if (!loop) { setPlaying(false); if (onComplete) onComplete(); return 0 }
          return 0
        }
        return next
      })
    }, 1000 / fps)
    return () => clearInterval(intervalRef.current)
  }, [playing, hasFrames, frames, fps, loop, onComplete])

  const progress = frames.length > 0 ? (current / (frames.length - 1)) * 100 : 0
  const currentSrc = hasFrames && frames[current] ? `${basePath}${frames[current]}` : null

  const btnStyle = {
    flex:1, padding:'6px 8px', borderRadius:8, cursor:'pointer',
    fontFamily:'Inter,sans-serif', fontSize:12, fontWeight:700,
    background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)',
    color:'rgba(255,255,255,.7)', transition:'background .2s',
  }

  return (
    <div style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:8,...style }}>
      <div style={{ width,height,borderRadius:16,overflow:'hidden',background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',flexShrink:0 }}>
        {currentSrc ? (
          <img src={currentSrc} alt={label||`Frame ${current+1}`} style={{ width:'100%',height:'100%',objectFit:'contain' }}/>
        ) : (
          <div style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8,padding:16,textAlign:'center' }}>
            <div style={{ fontSize:32,opacity:.4 }}>🎬</div>
            <div style={{ fontSize:10,fontWeight:700,color:'rgba(255,255,255,.3)',letterSpacing:'.06em',textTransform:'uppercase',lineHeight:1.5 }}>
              {label ? `[ANIMATION: ${label}]` : `[ANIMATION_SEQUENCE: ${frames.length} frames]`}
            </div>
            {frames.length > 0 && <div style={{ fontSize:9,color:'rgba(255,255,255,.2)' }}>{frames.length} frames · {fps}fps</div>}
          </div>
        )}
        {hasFrames && frames.length > 1 && (
          <div style={{ position:'absolute',bottom:6,right:8,fontSize:9,color:'rgba(255,255,255,.4)',fontWeight:600,fontFamily:'Inter,sans-serif' }}>
            {current+1}/{frames.length}
          </div>
        )}
      </div>
      {label && <div style={{ fontSize:13,fontWeight:600,color:'rgba(255,255,255,.7)',textAlign:'center',maxWidth:width }}>{label}</div>}
      {showControls && (
        <div style={{ display:'flex',flexDirection:'column',gap:6,width:'100%',maxWidth:width }}>
          {frames.length > 1 && hasFrames && (
            <div onClick={(e) => { const r=e.currentTarget.getBoundingClientRect(); setCurrent(Math.round(((e.clientX-r.left)/r.width)*(frames.length-1))) }} style={{ height:4,background:'rgba(255,255,255,.1)',borderRadius:999,overflow:'hidden',cursor:'pointer' }}>
              <div style={{ width:`${progress}%`,height:'100%',borderRadius:999,background:'linear-gradient(90deg,#7C6AE0,#B0A0FF)',transition:playing?'none':'width .2s' }}/>
            </div>
          )}
          <div style={{ display:'flex',gap:6,justifyContent:'center' }}>
            {frames.length > 1 && (
              <>
                <button onClick={() => setCurrent(c=>Math.max(0,c-1))} disabled={playing} style={btnStyle}>‹</button>
                <button onClick={() => setPlaying(p=>!p)} style={{ ...btnStyle,background:playing?'rgba(124,106,224,.3)':'rgba(124,106,224,.2)',flex:2 }}>{playing?'⏸ Pause':'▶ Play'}</button>
                <button onClick={() => setCurrent(c=>Math.min(frames.length-1,c+1))} disabled={playing} style={btnStyle}>›</button>
              </>
            )}
            <button onClick={() => { setCurrent(0); setPlaying(false) }} style={btnStyle}>↺</button>
          </div>
        </div>
      )}
    </div>
  )
}

export const ASL_SIGNS = {
  hello:    { label:'Hello',          frames:Array.from({length:12},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/hello/',    fps:12 },
  thank_you:{ label:'Thank You',      frames:Array.from({length:10},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/thank_you/',fps:10 },
  please:   { label:'Please',         frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/please/',   fps:10 },
  yes:      { label:'Yes',            frames:Array.from({length:6}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/yes/',      fps:10 },
  no:       { label:'No',             frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/no/',       fps:10 },
  help:     { label:'Help',           frames:Array.from({length:10},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/help/',     fps:10 },
  love:     { label:'I Love You',     frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/love/',     fps:10 },
  good:     { label:'Good',           frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/good/',     fps:10 },
  bad:      { label:'Bad',            frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/bad/',      fps:10 },
  more:     { label:'More',           frames:Array.from({length:10},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/more/',     fps:10 },
  finished: { label:'Finished / Done',frames:Array.from({length:10},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/finished/', fps:10 },
  water:    { label:'Water',          frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/water/',    fps:10 },
  eat:      { label:'Eat / Food',     frames:Array.from({length:10},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/eat/',      fps:10 },
  home:     { label:'Home',           frames:Array.from({length:10},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/home/',     fps:10 },
  school:   { label:'School',         frames:Array.from({length:12},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/school/',   fps:10 },
  bathroom: { label:'Bathroom',       frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/bathroom/', fps:10 },
  mom:      { label:'Mom / Mother',   frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/mom/',      fps:10 },
  dad:      { label:'Dad / Father',   frames:Array.from({length:8}, (_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/asl/dad/',      fps:10 },
}

export const SCIENCE_ANIMATIONS = {
  photosynthesis:{ label:'Photosynthesis Process',    frames:Array.from({length:24},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/animations/science/photosynthesis/', fps:8 },
  cell_division: { label:'Cell Division (Mitosis)',   frames:Array.from({length:30},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/animations/science/mitosis/',        fps:6 },
  water_cycle:   { label:'The Water Cycle',           frames:Array.from({length:20},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/animations/science/water_cycle/',    fps:6 },
  solar_system:  { label:'Solar System Orbit',        frames:Array.from({length:36},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/animations/space/orbit/',            fps:12 },
  black_hole:    { label:'Black Hole Accretion Disk', frames:Array.from({length:24},(_,i)=>`${String(i+1).padStart(3,'0')}.png`), basePath:'/animations/space/black_hole/',       fps:10 },
}
