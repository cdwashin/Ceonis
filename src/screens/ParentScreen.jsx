import { useState } from 'react'
import Ic from '../components/Ic.jsx'
import { GALAXIES } from '../data/constants.js'

export default function ParentScreen({ th, progress }) {
  const [pin,  setPin]  = useState('')
  const [auth, setAuth] = useState(false)
  const [err,  setErr]  = useState(false)
  const C = th || {bg:'#06040E',surface:'rgba(255,255,255,.06)',border:'rgba(255,255,255,.09)',text:'#F0EEF8',textSub:'rgba(240,238,248,.55)',textMuted:'rgba(240,238,248,.3)'}

  function tryPin(p) { if(p==='1234'){setAuth(true);setPin('')}else if(p.length===4){setErr(true);setTimeout(()=>{setPin('');setErr(false)},700)} }
  function press(d) { if(pin.length>=4)return; const nx=pin+d; setPin(nx); if(nx.length===4)tryPin(nx) }

  if (!auth) return (
    <div style={{position:'fixed',inset:0,bottom:72,background:C.bg,display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
      <div style={{textAlign:'center',maxWidth:280,width:'100%'}}>
        <div style={{width:52,height:52,borderRadius:16,background:C.surface,border:`1px solid ${C.border}`,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}><Ic n="parent" s={23} c={C.textSub}/></div>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:21,color:C.text,marginBottom:4}}>Parent Area</div>
        <p style={{color:C.textMuted,marginBottom:22,fontSize:13,lineHeight:1.6}}>Enter PIN<br/><span style={{fontSize:11}}>Default: 1234</span></p>
        <div style={{display:'flex',justifyContent:'center',gap:10,marginBottom:20}}>
          {[0,1,2,3].map(i=><div key={i} style={{width:12,height:12,borderRadius:'50%',background:pin.length>i?(err?'#FF6060':'#6A5ACD'):'rgba(255,255,255,.12)',transition:'all .2s'}}/>)}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:7,maxWidth:220,margin:'0 auto'}}>
          {[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map((d,i)=>(
            <button key={i} onClick={()=>d==='⌫'?setPin(p=>p.slice(0,-1)):d!==''&&press(String(d))} style={{padding:'13px',borderRadius:12,background:C.surface,border:`1px solid ${C.border}`,color:d===''?'transparent':C.text,fontSize:16,fontWeight:600,cursor:d===''?'default':'pointer',fontFamily:'Inter,sans-serif',transition:'all .15s'}}>{d}</button>
          ))}
        </div>
      </div>
    </div>
  )

  const profile   = progress?.profile || {}
  const totals    = progress?.totals  || {}
  const weekly    = progress?.getWeeklyActivity?.() || []
  const wMax      = Math.max(...weekly.map(d=>d.xp),1)
  const worldStats = GALAXIES.map(g=>({...g,done:Object.keys(progress?.lessonsCompleted?.[g.id]||{}).length})).filter(g=>g.done>0).slice(0,5)

  return (
    <div style={{position:'fixed',inset:0,bottom:72,background:C.bg,overflowY:'auto'}}>
      <div style={{padding:'28px 20px 40px',maxWidth:680,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:22}}>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:C.textMuted,marginBottom:5}}>Parent View</div>
            <div style={{fontFamily:'Playfair Display,serif',fontSize:30,color:C.text}}>Dashboard</div>
          </div>
          <button onClick={()=>setAuth(false)} style={{padding:'6px 13px',borderRadius:999,background:C.surface,border:`1px solid ${C.border}`,color:C.textSub,fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>Lock</button>
        </div>
        <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:24,padding:18,marginBottom:12}}>
          <div style={{display:'flex',alignItems:'center',gap:11,marginBottom:14}}>
            <div style={{fontSize:32}}>{profile.avatar||'🚀'}</div>
            <div>
              <div style={{fontWeight:700,fontSize:15,color:C.text}}>{profile.name||'Learner'}</div>
              <div style={{fontSize:11,color:C.textMuted}}>Age {profile.age} · Level {totals.level||1}</div>
            </div>
            <div style={{marginLeft:'auto',textAlign:'right'}}>
              <div style={{fontSize:16,fontWeight:800,color:'#FFD73C'}}>{totals.streak||0}</div>
              <div style={{fontSize:9,color:C.textMuted,textTransform:'uppercase'}}>Day Streak</div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
            {[{l:'XP',v:(totals.xp||0).toLocaleString(),c:'#FFD73C'},{l:'Lessons',v:totals.lessonsCompleted||0,c:'#3AB5D4'},{l:'Vocab',v:totals.vocabularyLearned||0,c:'#7BAE8A'},{l:'Badges',v:totals.badgesEarned||0,c:'#C44898'}].map(s=>(
              <div key={s.l} style={{textAlign:'center',background:C.bg||'rgba(0,0,0,.3)',borderRadius:12,padding:8}}>
                <div style={{fontSize:14,fontWeight:800,color:s.c}}>{s.v}</div>
                <div style={{fontSize:9,color:C.textMuted,textTransform:'uppercase',letterSpacing:'.05em'}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:16,marginBottom:10}}>
          <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:10}}>Weekly Activity</div>
          {weekly.length>0?(
            <div style={{display:'flex',alignItems:'flex-end',gap:5,height:58}}>
              {weekly.map((d,i)=>(
                <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                  <div style={{width:'100%',borderRadius:'3px 3px 0 0',minHeight:3,background:d.xp>0?'linear-gradient(to top,rgba(74,144,217,.75),rgba(74,144,217,.2))':'rgba(255,255,255,.06)',height:`${Math.round((d.xp/wMax)*44)+3}px`}}/>
                  <div style={{fontSize:9,color:d.xp>0?C.text:C.textMuted,fontWeight:600}}>{d.label}</div>
                </div>
              ))}
            </div>
          ):<p style={{fontSize:12,color:C.textMuted,textAlign:'center',padding:'12px 0'}}>No activity yet — lessons completed will appear here</p>}
        </div>
        <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:16}}>
          <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:10}}>World Progress</div>
          {worldStats.length>0?worldStats.map(g=>(
            <div key={g.id} style={{marginBottom:10}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:4,fontSize:13}}>
                <span style={{color:C.text,fontWeight:500}}>{g.name}</span>
                <span style={{color:g.color,fontWeight:700}}>{g.done} lesson{g.done!==1?'s':''}</span>
              </div>
              <div style={{height:5,background:'rgba(255,255,255,.1)',borderRadius:999,overflow:'hidden'}}>
                <div style={{width:`${Math.min(100,g.done*10)}%`,height:'100%',borderRadius:999,background:g.color,transition:'width .8s ease'}}/>
              </div>
            </div>
          )):<p style={{fontSize:12,color:C.textMuted,textAlign:'center',padding:'8px 0'}}>No worlds started yet. Begin with Space & Cosmos!</p>}
        </div>
      </div>
    </div>
  )
}
