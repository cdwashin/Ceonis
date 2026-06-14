import { useState } from 'react'
import { GALAXIES } from '../data/constants.js'
import Ic from '../components/Ic.jsx'

export default function JourneyScreen({ th, progress, curriculum, onWorld }) {
  const [detail, setDetail] = useState(null)
  const C = th || {bg:'#06040E',surface:'rgba(255,255,255,.06)',border:'rgba(255,255,255,.09)',text:'#F0EEF8',textSub:'rgba(240,238,248,.55)',textMuted:'rgba(240,238,248,.3)',surfaceHov:'rgba(255,255,255,.1)'}

  const worldStats = GALAXIES.map(g=>{
    const cur    = curriculum?.[g.id]
    const sws    = cur?.subworlds||[]
    const totalL = sws.reduce((s,sw)=>s+(sw.lessons?.length||sw.concepts?.length||0),0)
    const totalV = sws.reduce((s,sw)=>s+(sw.lessons||sw.concepts||[]).reduce((ss,l)=>ss+(l.vocabulary?.length||0),0),0)
    const totalX = sws.reduce((s,sw)=>s+(sw.lessons||sw.concepts||[]).reduce((ss,l)=>ss+(l.xp||0),0),0)
    const done   = Object.keys(progress?.lessonsCompleted?.[g.id]||{}).length
    const pct    = totalL>0?Math.min(100,Math.round((done/totalL)*100)):0
    return {...g,sws,totalL,totalV,totalX,done,pct}
  })

  const weekly = progress?.getWeeklyActivity?.() || []
  const wMax   = Math.max(...weekly.map(d=>d.xp),1)

  if (detail) {
    const ws = worldStats.find(w=>w.id===detail.id)
    return (
      <div style={{position:'fixed',inset:0,bottom:72,background:C.bg,overflowY:'auto'}}>
        <div style={{padding:'20px 20px 40px',maxWidth:680,margin:'0 auto'}}>
          <button onClick={()=>setDetail(null)} style={{display:'flex',alignItems:'center',gap:7,background:'none',border:'none',color:C.textMuted,cursor:'pointer',fontSize:13,fontWeight:500,marginBottom:20,padding:0,fontFamily:'Inter,sans-serif'}}>
            <Ic n="back" s={15} c={C.textMuted}/> Journey
          </button>
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:18}}>
            <div style={{width:50,height:50,borderRadius:'50%',flexShrink:0,background:`${detail.color}30`,border:`2px solid ${detail.color}55`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>◈</div>
            <div>
              <div style={{fontFamily:'Playfair Display,serif',fontSize:22,color:C.text}}>{detail.name}</div>
              <div style={{fontSize:11,color:C.textMuted}}>{ws.done} of {ws.totalL} lessons complete</div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:7,marginBottom:16}}>
            {[{v:ws.totalL,l:'Lessons'},{v:ws.totalV,l:'Vocab'},{v:ws.done,l:'Done'}].map(s=>(
              <div key={s.l} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:13,padding:'9px 7px',textAlign:'center'}}>
                <div style={{fontSize:17,fontWeight:800,color:detail.color}}>{s.v}</div>
                <div style={{fontSize:9,color:C.textMuted,textTransform:'uppercase',letterSpacing:'.06em',marginTop:2}}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:17,padding:'13px 15px',marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:7}}>
              <span style={{fontSize:13,fontWeight:600,color:C.text}}>Progress</span>
              <span style={{fontSize:14,fontWeight:700,color:detail.color}}>{ws.pct}%</span>
            </div>
            <div style={{height:7,background:'rgba(255,255,255,.1)',borderRadius:999,overflow:'hidden'}}>
              <div style={{width:`${ws.pct}%`,height:'100%',borderRadius:999,background:detail.color,transition:'width .8s ease'}}/>
            </div>
          </div>
          <button onClick={()=>{onWorld(detail);setDetail(null)}} style={{width:'100%',padding:'14px',marginTop:8,borderRadius:999,background:detail.color,border:'none',color:'white',fontWeight:700,fontSize:14,cursor:'pointer',fontFamily:'Inter,sans-serif',boxShadow:`0 4px 18px ${detail.color}55`}}>
            Continue Learning →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{position:'fixed',inset:0,bottom:72,background:C.bg,overflowY:'auto'}}>
      <div style={{padding:'28px 20px 40px',maxWidth:680,margin:'0 auto'}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:C.textMuted,marginBottom:6}}>Your Progress</div>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:30,color:C.text,marginBottom:20}}>Journey</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:8,marginBottom:18}}>
          {[
            {v:(progress?.totals?.xp||0).toLocaleString(),l:'Total XP',       c:'#FFD73C'},
            {v:`${progress?.totals?.streak||0}d`,          l:'Streak',         c:'#FF8C42'},
            {v:progress?.totals?.lessonsCompleted||0,       l:'Lessons Done',   c:'#3AB5D4'},
            {v:progress?.totals?.vocabularyLearned||0,      l:'Vocab Learned',  c:'#3A9E5A'},
          ].map(s=>(
            <div key={s.l} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:16,padding:'13px 15px',display:'flex',alignItems:'center',gap:11}}>
              <div style={{width:40,height:40,borderRadius:12,background:`${s.c}18`,border:`1px solid ${s.c}30`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <span style={{fontSize:14,fontWeight:800,color:s.c}}>{typeof s.v==='number'?s.v:String(s.v).replace(/[^\d]/g,'').slice(0,5)||'0'}</span>
              </div>
              <div>
                <div style={{fontSize:16,fontWeight:800,color:s.c}}>{s.v}</div>
                <div style={{fontSize:10,color:C.textMuted,textTransform:'uppercase',letterSpacing:'.06em'}}>{s.l}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:'15px 17px',marginBottom:18}}>
          <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:12}}>This Week</div>
          <div style={{display:'flex',alignItems:'flex-end',gap:5,height:64}}>
            {weekly.map((d,i)=>(
              <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                <div style={{width:'100%',borderRadius:'3px 3px 0 0',minHeight:3,background:d.xp>0?'linear-gradient(to top,#7C6AE0,#B0A0FF)':'rgba(124,106,224,.1)',height:`${Math.round((d.xp/wMax)*50)+3}px`}}/>
                <div style={{fontSize:9,color:d.xp>0?C.text:C.textMuted,fontWeight:600}}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{fontSize:10,fontWeight:700,color:C.textMuted,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10}}>All Worlds</div>
        {worldStats.map((ws,i)=>(
          <div key={ws.id} onClick={()=>setDetail(ws)} style={{padding:'13px 15px',background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,cursor:'pointer',transition:'all .2s',display:'flex',alignItems:'center',gap:12,marginBottom:8,animation:`fadeUp .35s ${i*.03}s ease both`}}
            onMouseEnter={e=>{e.currentTarget.style.background=C.surfaceHov;e.currentTarget.style.borderColor=`${ws.color}44`}}
            onMouseLeave={e=>{e.currentTarget.style.background=C.surface;e.currentTarget.style.borderColor=C.border}}>
            <div style={{width:42,height:42,borderRadius:'50%',flexShrink:0,background:`${ws.color}30`,border:`2px solid ${ws.color}55`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:16}}>◈</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:5}}>
                <div style={{fontWeight:600,fontSize:14,color:C.text}}>{ws.name}</div>
                <div style={{fontSize:13,fontWeight:700,color:ws.color,flexShrink:0,marginLeft:8}}>{ws.pct}%</div>
              </div>
              <div style={{height:4,background:'rgba(255,255,255,.1)',borderRadius:999,overflow:'hidden',marginBottom:4}}>
                <div style={{width:`${ws.pct}%`,height:'100%',borderRadius:999,background:ws.color,transition:'width .8s ease'}}/>
              </div>
              <div style={{fontSize:10,color:C.textMuted,display:'flex',gap:7}}>
                <span>{ws.totalL} lessons</span><span>·</span>
                <span>{ws.totalX.toLocaleString()} XP available</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
