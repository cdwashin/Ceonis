import { useState, useRef } from 'react'
import { GALAXIES, ORB_SIZES, FLOAT_PARAMS } from '../data/constants.js'
import Ic from '../components/Ic.jsx'

function Stars() {
  const pts = useRef(Array.from({length:80},(_,i)=>({id:i,x:Math.random()*100,y:Math.random()*100,r:.3+Math.random()*1.3,d:Math.random()*5,dur:2+Math.random()*4}))).current
  return (
    <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}}>
      {pts.map(p=><circle key={p.id} cx={`${p.x}%`} cy={`${p.y}%`} r={p.r} fill="white" style={{animation:`twinkle ${p.dur}s ${p.d}s ease-in-out infinite`}}/>)}
    </svg>
  )
}

function OrbButton({ galaxy, index, onTap }) {
  const sz = ORB_SIZES[galaxy.id] || 80
  const fp = FLOAT_PARAMS[index] || FLOAT_PARAMS[0]
  return (
    <div onClick={onTap} style={{position:'absolute',left:`${galaxy.x}%`,top:`${galaxy.y}%`,transform:'translate(-50%,-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:7,cursor:'pointer',zIndex:10,animation:`orbFloat ${fp.dur}s ${fp.delay}s ease-in-out infinite`,'--dist':`${fp.dist}`}}>
      <div style={{width:sz,height:sz,borderRadius:'50%',position:'relative'}}>
        <div style={{position:'absolute',inset:`-${Math.round(sz*.2)}px`,borderRadius:'50%',background:`radial-gradient(circle,${galaxy.glow} 0%,transparent 68%)`,pointerEvents:'none',animation:`pulseG ${4+index*.35}s ${index*.22}s ease-in-out infinite`}}/>
        <div style={{position:'absolute',inset:-3,borderRadius:'50%',boxShadow:`0 0 ${Math.round(sz*.22)}px ${galaxy.color}cc,0 0 ${Math.round(sz*.44)}px ${galaxy.color}66`,pointerEvents:'none',animation:`pulseG ${3+index*.28}s ${index*.18}s ease-in-out infinite`}}/>
        <div style={{position:'absolute',inset:0,borderRadius:'50%',overflow:'hidden',background:`radial-gradient(135deg,${galaxy.color}35,${galaxy.color}08)`}}/>
        <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'radial-gradient(circle at 30% 26%,rgba(255,255,255,.22) 0%,rgba(255,255,255,.04) 45%,rgba(0,0,0,.14) 100%)',border:'1.5px solid rgba(255,255,255,.26)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',top:'9%',left:'16%',width:'28%',height:'13%',borderRadius:'50%',background:'rgba(255,255,255,.22)',filter:'blur(3px)',pointerEvents:'none'}}/>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontSize:Math.max(8,Math.round(sz*.13)),fontWeight:800,color:'rgba(255,255,255,.9)',textAlign:'center',textShadow:`0 0 8px ${galaxy.color},0 1px 4px rgba(0,0,0,.9)`,padding:'0 4px',lineHeight:1.1,fontFamily:'Inter,sans-serif'}}>
            {galaxy.name.split(' ').map((w,i)=><span key={i} style={{display:'block'}}>{w}</span>)}
          </span>
        </div>
      </div>
      <div style={{width:4,height:4,borderRadius:'50%',background:galaxy.color,boxShadow:`0 0 6px ${galaxy.color}`,animation:`pulseG 2.2s ${index*.18}s ease-in-out infinite`}}/>
    </div>
  )
}

function OrbModal({ galaxy, onClose, onEnter }) {
  const [closing, setClosing] = useState(false)
  const close = () => { setClosing(true); setTimeout(onClose,260) }
  const enter = () => { setClosing(true); setTimeout(onEnter,260) }
  const vw = typeof window!=='undefined'?window.innerWidth:375
  const vh = typeof window!=='undefined'?window.innerHeight:812
  const orbSz = Math.min(vw*.6,vh*.28,210)
  const ringW = orbSz*1.28, ringH = orbSz*0.23

  return (
    <div onClick={close} style={{position:'fixed',inset:0,zIndex:80,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 35%,#0E0830 0%,#060420 50%,#03020F 100%)'}}>
        <div style={{position:'absolute',top:'5%',left:'5%',width:'90%',height:'60%',borderRadius:'50%',background:`radial-gradient(ellipse,${galaxy.glow.replace('.9','.12')} 0%,transparent 70%)`,animation:'pulseG 6s ease-in-out infinite',pointerEvents:'none'}}/>
      </div>
      <div onClick={e=>e.stopPropagation()} style={{position:'absolute',top:'50%',left:'50%',transform:closing?'translate(-50%,-50%) scale(1.06)':'translate(-50%,-50%)',opacity:closing?0:1,transition:'transform .26s ease,opacity .26s ease',animation:closing?'none':'zoomIn .4s cubic-bezier(.16,1,.3,1) forwards',width:'calc(100% - 32px)',maxWidth:360,display:'flex',flexDirection:'column',alignItems:'center',zIndex:2}}>
        <div style={{position:'relative',width:orbSz,height:orbSz,flexShrink:0,marginBottom:12}}>
          <div style={{position:'absolute',inset:-20,borderRadius:'50%',background:`radial-gradient(circle,${galaxy.glow} 0%,transparent 62%)`,zIndex:0,animation:'pulseG 3s ease-in-out infinite',pointerEvents:'none'}}/>
          <div style={{position:'absolute',top:'50%',left:'50%',width:ringW,height:ringH,transform:'translate(-50%,-50%)',borderRadius:'50%',border:`2.5px solid ${galaxy.color}`,boxShadow:`0 0 10px ${galaxy.color}88`,zIndex:1,pointerEvents:'none',WebkitMaskImage:'linear-gradient(to bottom,black 50%,transparent 50%)',maskImage:'linear-gradient(to bottom,black 50%,transparent 50%)'}}/>
          <div style={{position:'absolute',inset:0,borderRadius:'50%',background:`radial-gradient(135deg,${galaxy.color}45,${galaxy.color}10)`,border:'1.5px solid rgba(255,255,255,.2)',zIndex:2,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{fontSize:orbSz*.18,fontWeight:800,color:'rgba(255,255,255,.9)',textAlign:'center',textShadow:`0 0 12px ${galaxy.color}`,fontFamily:'Playfair Display,serif'}}>{galaxy.name.split(' ')[0]}</span>
          </div>
          <div style={{position:'absolute',top:'50%',left:'50%',width:ringW,height:ringH,transform:'translate(-50%,-50%)',borderRadius:'50%',border:`2.5px solid ${galaxy.color}`,boxShadow:`0 0 6px ${galaxy.color},0 0 18px ${galaxy.color}dd,0 0 34px ${galaxy.color}88`,zIndex:6,pointerEvents:'none',WebkitMaskImage:'linear-gradient(to top,black 50%,transparent 50%)',maskImage:'linear-gradient(to top,black 50%,transparent 50%)'}}/>
        </div>
        <div style={{textAlign:'center',width:'100%'}}>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:27,fontWeight:700,color:'white',marginBottom:3,textShadow:'0 2px 20px rgba(0,0,0,.9)'}}>{galaxy.name}</div>
          <div style={{fontSize:12,fontWeight:600,color:galaxy.color,marginBottom:18}}>{galaxy.worlds} {galaxy.worlds===1?'World':'Worlds'}</div>
          <div style={{display:'flex',gap:10,justifyContent:'center'}}>
            <button onClick={close} style={{padding:'12px 20px',borderRadius:999,background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.18)',color:'rgba(255,255,255,.8)',fontSize:14,fontWeight:600,cursor:'pointer',fontFamily:'Inter,sans-serif',display:'flex',alignItems:'center',gap:6}}>
              <Ic n="back" s={14} c="rgba(255,255,255,.7)"/> Back
            </button>
            <button onClick={enter} style={{padding:'12px 28px',borderRadius:999,background:galaxy.color,border:'none',color:'white',fontSize:14,fontWeight:700,cursor:'pointer',fontFamily:'Inter,sans-serif',boxShadow:`0 4px 22px ${galaxy.color}88`}}>
              Enter →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function UniverseScreen({ profile, onGalaxy }) {
  const [expanded, setExpanded] = useState(null)
  const g = GALAXIES.find(x=>x.id===expanded)
  return (
    <div style={{position:'fixed',inset:0,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 0%,#0A0630 0%,#04021A 60%,#020010 100%)'}}/>
      <Stars/>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'22%',background:'linear-gradient(to top,rgba(4,2,20,.97) 0%,rgba(4,2,20,.5) 55%,transparent 100%)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',top:0,left:0,right:0,padding:'14px 16px 10px',display:'flex',alignItems:'center',gap:8,background:'linear-gradient(to bottom,rgba(4,2,20,.8) 0%,transparent 100%)',zIndex:20}}>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:22,fontWeight:700,color:'white',letterSpacing:'.02em'}}>ceonis</div>
        <div style={{flex:1}}/>
        <div style={{display:'flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.1)',backdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,.18)',borderRadius:999,padding:'6px 14px 6px 6px'}}>
          <div style={{width:34,height:34,borderRadius:'50%',background:'linear-gradient(135deg,#6A5ACD,#9B6AE0)',border:'2px solid rgba(255,255,255,.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>{profile?.avatar||'🚀'}</div>
          <div>
            <div style={{fontSize:13,fontWeight:700,color:'white',lineHeight:1}}>Lv {profile?.level||1} · {profile?.name||'Learner'}</div>
            <div style={{marginTop:3,width:80,height:4,borderRadius:999,background:'rgba(255,255,255,.15)',overflow:'hidden'}}>
              <div style={{width:`${((profile?.xp||0)/(profile?.xpNext||1000))*100}%`,height:'100%',borderRadius:999,background:'linear-gradient(90deg,#7C6AE0,#B0A0FF)'}}/>
            </div>
          </div>
        </div>
      </div>
      <div style={{position:'absolute',inset:0,zIndex:10}}>
        {GALAXIES.map((g,i)=>(
          <OrbButton key={g.id} galaxy={g} index={i} onTap={()=>setExpanded(g.id)}/>
        ))}
      </div>
      {expanded&&g&&(
        <OrbModal galaxy={g} onClose={()=>setExpanded(null)} onEnter={()=>{setExpanded(null);onGalaxy(g)}}/>
      )}
    </div>
  )
}
