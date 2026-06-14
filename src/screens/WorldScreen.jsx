import { useState } from 'react'
import { GENIUS_PATHS } from '../data/constants.js'
import Ic from '../components/Ic.jsx'
import Placeholder from '../components/Placeholder.jsx'
import LessonScreen from './LessonScreen.jsx'

export default function WorldScreen({ galaxy, curriculum, onBack, devMode, onLessonComplete, onWordLearned, onBadgeEarned, lessonsCompleted }) {
  const [activeSubworld, setActiveSubworld] = useState(null)
  const [activeLesson,   setActiveLesson]   = useState(null)
  const color       = galaxy.color
  const world       = curriculum[galaxy.id]
  const worldLessons = lessonsCompleted || {}

  if (activeSubworld && activeLesson) {
    return (
      <LessonScreen lesson={activeLesson} galaxy={galaxy} subworld={activeSubworld}
        onBack={()=>setActiveLesson(null)} onWordLearned={onWordLearned}
        onComplete={(score)=>{
          if (onLessonComplete) onLessonComplete(galaxy.id, activeLesson.id, score, activeLesson.xp)
          if (onBadgeEarned && activeLesson.mastery?.badge) {
            if (score >= (activeLesson.mastery.threshold||80)) onBadgeEarned(activeLesson.mastery.badge, galaxy.id)
          }
          setActiveLesson(null)
        }}/>
    )
  }

  if (activeSubworld) {
    const lessons = activeSubworld.lessons || activeSubworld.concepts || []
    return (
      <div style={{position:'fixed',inset:0,background:'#06040E',overflowY:'auto'}}>
        <div style={{position:'fixed',top:0,left:0,right:0,height:'35%',background:`radial-gradient(ellipse at 50% 0%,${color}14 0%,transparent 65%)`,pointerEvents:'none'}}/>
        <div style={{position:'relative',padding:'14px 18px 100px'}}>
          <button onClick={()=>setActiveSubworld(null)} style={{display:'flex',alignItems:'center',gap:7,background:'none',border:'none',color:'rgba(255,255,255,.5)',cursor:'pointer',fontSize:13,fontWeight:500,marginBottom:14,padding:0,fontFamily:'Inter,sans-serif'}}>
            <Ic n="back" s={15} c="rgba(255,255,255,.5)"/> {galaxy.name}
          </button>
          <div style={{fontSize:10,fontWeight:700,color,letterSpacing:'.09em',textTransform:'uppercase',marginBottom:5,opacity:.8}}>{lessons.length} Lessons</div>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:24,color:'#F0EEF8',marginBottom:4}}>{activeSubworld.name}</div>
          <p style={{fontSize:13,color:'rgba(255,255,255,.4)',marginBottom:18,lineHeight:1.5}}>{activeSubworld.subtitle}</p>
          {lessons.map((lesson,i)=>{
            const unlocked  = devMode || lesson.unlocked !== false
            const completed = !!worldLessons[lesson.id]
            const bestScore = worldLessons[lesson.id]?.score
            return (
              <div key={lesson.id} onClick={()=>unlocked&&setActiveLesson(lesson)}
                style={{background:completed?`${color}0A`:'rgba(255,255,255,.04)',border:`1px solid ${completed?`${color}50`:unlocked?`${color}28`:'rgba(255,255,255,.07)'}`,borderRadius:17,padding:'14px 16px',marginBottom:9,cursor:unlocked?'pointer':'default',opacity:unlocked?1:.42,animation:`fadeUp .3s ${i*.04}s ease both`,transition:'background .2s,border-color .2s'}}
                onMouseEnter={e=>{if(unlocked){e.currentTarget.style.background=`${color}12`;e.currentTarget.style.borderColor=`${color}55`}}}
                onMouseLeave={e=>{e.currentTarget.style.background=completed?`${color}0A`:'rgba(255,255,255,.04)';e.currentTarget.style.borderColor=completed?`${color}50`:unlocked?`${color}28`:'rgba(255,255,255,.07)'}}>
                <div style={{display:'flex',gap:11,alignItems:'flex-start'}}>
                  <div style={{width:40,height:40,borderRadius:12,flexShrink:0,background:completed?`${color}25`:unlocked?`${color}16`:'rgba(255,255,255,.05)',border:`1.5px solid ${completed?color:unlocked?`${color}88`:'rgba(255,255,255,.1)'}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {completed?<Ic n="check" s={14} c={color}/>:unlocked?<Ic n="play" s={14} c={color}/>:<Ic n="lock" s={12} c="rgba(255,255,255,.25)"/>}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:15,marginBottom:3,color:'#F0EEF8'}}>{lesson.title}</div>
                    <div style={{fontSize:12,color:'rgba(255,255,255,.42)',marginBottom:6,lineHeight:1.4}}>{lesson.objective}</div>
                    <div style={{display:'flex',gap:6,flexWrap:'wrap',alignItems:'center'}}>
                      <span style={{display:'inline-flex',alignItems:'center',padding:'3px 10px',borderRadius:999,background:'rgba(255,210,60,.14)',border:'1px solid rgba(255,210,60,.3)',fontSize:10,fontWeight:700,color:'#FFD73C'}}>{lesson.xp} XP</span>
                      <span style={{fontSize:10,color:`${color}99`,fontWeight:600}}>Ages {lesson.ageRange}</span>
                      {completed&&bestScore!==undefined&&<span style={{fontSize:10,color,fontWeight:700,padding:'2px 8px',borderRadius:999,background:`${color}18`,border:`1px solid ${color}30`}}>Best: {bestScore}%</span>}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const subworlds    = world?.subworlds||[]
  const totalLessons = subworlds.reduce((s,sw)=>s+(sw.lessons?.length||sw.concepts?.length||0),0)
  const completedCount = Object.keys(worldLessons).length
  const worldPct     = totalLessons>0?Math.min(100,Math.round((completedCount/totalLessons)*100)):0

  return (
    <div style={{position:'fixed',inset:0,background:'#06040E',overflowY:'auto'}}>
      <div style={{position:'fixed',top:0,left:0,right:0,height:'50%',background:`radial-gradient(ellipse at 50% 15%,${color}16 0%,transparent 65%)`,pointerEvents:'none'}}/>
      <div style={{position:'relative',padding:'14px 18px 100px'}}>
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:16}}>
          <button onClick={onBack} style={{display:'inline-flex',alignItems:'center',gap:7,background:'rgba(0,0,0,.4)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,.1)',borderRadius:999,padding:'8px 16px',color:'rgba(255,255,255,.7)',fontSize:13,fontWeight:600,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
            <Ic n="back" s={14} c="rgba(255,255,255,.7)"/> Universe
          </button>
          {devMode&&<span style={{padding:'5px 12px',borderRadius:999,background:'rgba(106,90,205,.22)',border:'1px solid rgba(106,90,205,.45)',fontSize:10,fontWeight:700,color:'#A090FF',letterSpacing:'.07em'}}>DEV MODE</span>}
        </div>
        <Placeholder label={`[WORLD_BACKGROUND: ${galaxy.name}]`} height={130} style={{borderRadius:18,marginBottom:16}}/>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(26px,6vw,40px)',lineHeight:1.1,color:'#F0EEF8',marginBottom:8}}>{galaxy.name}</div>
        {completedCount>0&&(
          <div style={{marginBottom:16}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:5,fontSize:12}}>
              <span style={{color:'rgba(255,255,255,.45)'}}>World Progress</span>
              <span style={{color,fontWeight:700}}>{worldPct}%</span>
            </div>
            <div style={{height:5,background:'rgba(255,255,255,.1)',borderRadius:999,overflow:'hidden'}}>
              <div style={{width:`${worldPct}%`,height:'100%',borderRadius:999,background:`linear-gradient(90deg,${color}88,${color})`,transition:'width .8s ease'}}/>
            </div>
          </div>
        )}
        <div style={{display:'flex',gap:7,flexWrap:'wrap',marginBottom:20}}>
          {[{v:subworlds.length,l:'Subworlds'},{v:totalLessons,l:'Lessons'}].map(s=>(
            <div key={s.l} style={{padding:'7px 14px',background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.08)',borderRadius:12,textAlign:'center'}}>
              <div style={{fontSize:17,fontWeight:800,color}}>{s.v}</div>
              <div style={{fontSize:9,color:'rgba(255,255,255,.3)',textTransform:'uppercase',letterSpacing:'.07em'}}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{fontSize:9,fontWeight:700,color:'rgba(255,255,255,.3)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10}}>Subworlds</div>
        {subworlds.map((sw,i)=>{
          const unlocked = devMode||sw.unlocked
          const lessons  = sw.lessons||sw.concepts||[]
          const swDone   = lessons.filter(l=>worldLessons[l.id]).length
          return (
            <div key={sw.id} onClick={()=>unlocked&&setActiveSubworld(sw)}
              style={{background:'rgba(255,255,255,.04)',border:`1px solid ${unlocked?`${color}30`:'rgba(255,255,255,.07)'}`,borderRadius:18,padding:'14px 16px',marginBottom:9,cursor:unlocked?'pointer':'default',opacity:unlocked?1:.38,animation:`fadeUp .35s ${i*.07}s ease both`,transition:'background .2s,border-color .2s'}}
              onMouseEnter={e=>{if(unlocked){e.currentTarget.style.background=`${color}0E`;e.currentTarget.style.borderColor=`${color}50`}}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.04)';e.currentTarget.style.borderColor=unlocked?`${color}30`:'rgba(255,255,255,.07)'}}>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <div style={{width:46,height:46,borderRadius:14,flexShrink:0,background:unlocked?`${color}16`:'rgba(255,255,255,.05)',border:`2px solid ${unlocked?color:'rgba(255,255,255,.1)'}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>
                  {unlocked?'◉':'🔒'}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:15,marginBottom:3,color:'#F0EEF8'}}>{sw.name}</div>
                  <div style={{fontSize:12,color:'rgba(255,255,255,.4)',marginBottom:4}}>{sw.subtitle}</div>
                  <div style={{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
                    <span style={{fontSize:11,color:`${color}99`,fontWeight:600}}>{lessons.length} Lessons</span>
                    {swDone>0&&<span style={{fontSize:11,color,fontWeight:700}}>{swDone}/{lessons.length} done</span>}
                  </div>
                </div>
                <Ic n="play" s={16} c={unlocked?color:'rgba(255,255,255,.15)'}/>
              </div>
            </div>
          )
        })}
        {(GENIUS_PATHS[galaxy.id]?.length>0)&&(
          <div style={{marginTop:8,background:'rgba(106,90,205,.05)',border:'1px solid rgba(106,90,205,.18)',borderRadius:18,padding:'14px 16px'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:9}}>
              <div style={{fontSize:10,fontWeight:700,color:'#A090FF',letterSpacing:'.08em',textTransform:'uppercase'}}>⚡ Genius Pathways</div>
              {!devMode&&<div style={{fontSize:10,color:'rgba(255,255,255,.25)'}}>Enable Dev Mode to preview</div>}
            </div>
            <div style={{display:'flex',gap:5,flexWrap:'wrap'}}>
              {GENIUS_PATHS[galaxy.id].map((p,i)=>(
                <div key={i} style={{padding:'5px 11px',borderRadius:999,fontSize:11,fontWeight:600,background:devMode?'rgba(106,90,205,.16)':'rgba(255,255,255,.04)',border:`1px solid ${devMode?'rgba(106,90,205,.38)':'rgba(255,255,255,.08)'}`,color:devMode?'#A090FF':'rgba(255,255,255,.25)'}}>{p}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
