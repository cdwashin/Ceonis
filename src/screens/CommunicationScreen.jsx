import { useState } from 'react'
import { AAC_CATEGORIES, AAC_SYMBOLS, SENTENCE_STARTERS, SCHEDULE_ITEMS } from '../communication/aacData.js'
import { ASL_SIGNS } from '../components/FrameAnimator.jsx'
import FrameAnimator from '../components/FrameAnimator.jsx'
import Ic from '../components/Ic.jsx'
import Placeholder from '../components/Placeholder.jsx'

function speak(text, lang) {
  if (!window.speechSynthesis || !text) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.rate = 0.9; u.pitch = 1.05; u.volume = 1
  if (lang) u.lang = lang
  window.speechSynthesis.speak(u)
}

const MODES = [
  {id:'boards',   label:'Symbol Boards', icon:'grid'},
  {id:'sentence', label:'Build Sentence',icon:'list'},
  {id:'schedule', label:'My Schedule',   icon:'schedule'},
  {id:'asl',      label:'ASL Signs',     icon:'voice'},
]

export default function CommunicationScreen({ th, profile }) {
  const [mode,       setMode]      = useState('boards')
  const [category,   setCategory]  = useState('needs')
  const [sentence,   setSentence]  = useState([])
  const [lastSpoken, setLastSpoken] = useState(null)
  const [aslSearch,  setAslSearch]  = useState('')
  const [activeSign, setActiveSign] = useState(null)
  const C = th || {bg:'#06040E',surface:'rgba(255,255,255,.06)',border:'rgba(255,255,255,.09)',text:'#F0EEF8',textSub:'rgba(240,238,248,.55)',textMuted:'rgba(240,238,248,.3)'}
  const symbols    = AAC_SYMBOLS[category] || []
  const aslEntries = Object.entries(ASL_SIGNS).filter(([id,s]) => !aslSearch||s.label.toLowerCase().includes(aslSearch.toLowerCase()))

  function tapSymbol(sym) { speak(sym.speech,profile?.language); setLastSpoken(sym); setTimeout(()=>setLastSpoken(null),2000) }
  function speakSentence() { const t=sentence.map(s=>s.label).join(' '); if(t)speak(t,profile?.language) }

  return (
    <div style={{position:'fixed',inset:0,bottom:72,background:C.bg,display:'flex',flexDirection:'column',overflow:'hidden'}}>
      <div style={{padding:'14px 18px 10px',flexShrink:0,borderBottom:`1px solid ${C.border}`}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:C.textMuted,marginBottom:3}}>Communication</div>
            <div style={{fontFamily:'Playfair Display,serif',fontSize:22,color:C.text}}>Speak</div>
          </div>
          {lastSpoken&&<div style={{padding:'7px 14px',borderRadius:999,background:`${lastSpoken.color}20`,border:`1px solid ${lastSpoken.color}40`,fontSize:12,fontWeight:700,color:lastSpoken.color}}>{lastSpoken.label}</div>}
        </div>
        <div style={{display:'flex',gap:5}}>
          {MODES.map(m=>(
            <button key={m.id} onClick={()=>setMode(m.id)} style={{flex:1,padding:'7px 2px',borderRadius:10,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:9,fontWeight:700,transition:'all .2s',background:mode===m.id?'rgba(124,106,224,.22)':'rgba(255,255,255,.04)',border:`1.5px solid ${mode===m.id?'#7C6AE0':'rgba(255,255,255,.08)'}`,color:mode===m.id?'#A090FF':C.textMuted,display:'flex',alignItems:'center',justifyContent:'center',gap:3}}>
              <Ic n={m.icon} s={10} c={mode===m.id?'#A090FF':C.textMuted}/>{m.label}
            </button>
          ))}
        </div>
      </div>

      {mode==='boards'&&(
        <div style={{flex:1,display:'flex',flexDirection:'column',overflow:'hidden'}}>
          <div style={{display:'flex',gap:0,overflowX:'auto',flexShrink:0,borderBottom:`1px solid ${C.border}`}}>
            {AAC_CATEGORIES.map(cat=>(
              <button key={cat.id} onClick={()=>setCategory(cat.id)} style={{flexShrink:0,padding:'10px 12px',background:'none',border:'none',cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:11,fontWeight:700,borderBottom:`2px solid ${category===cat.id?cat.color:'transparent'}`,color:category===cat.id?cat.color:C.textMuted,display:'flex',alignItems:'center',gap:5,whiteSpace:'nowrap',transition:'all .2s'}}>
                <span style={{fontSize:14}}>{cat.icon}</span>{cat.label}
              </button>
            ))}
          </div>
          <div style={{flex:1,overflowY:'auto',padding:'12px 14px 20px'}}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(90px,1fr))',gap:9}}>
              {symbols.map(sym=>(
                <button key={sym.id} onClick={()=>tapSymbol(sym)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,padding:'10px 6px',borderRadius:14,cursor:'pointer',background:`${sym.color}12`,border:`1.5px solid ${sym.color}30`,transition:'all .15s',fontFamily:'Inter,sans-serif'}}
                  onMouseEnter={e=>e.currentTarget.style.background=`${sym.color}25`}
                  onMouseLeave={e=>e.currentTarget.style.background=`${sym.color}12`}>
                  <Placeholder label={sym.image} height={56} width={56} style={{borderRadius:10,fontSize:7,border:`1px solid ${sym.color}20`,flexShrink:0}}/>
                  <span style={{fontSize:11,fontWeight:700,color:sym.color,textAlign:'center',lineHeight:1.2}}>{sym.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {mode==='sentence'&&(
        <div style={{flex:1,display:'flex',flexDirection:'column',overflow:'hidden'}}>
          <div style={{padding:'10px 14px',borderBottom:`1px solid ${C.border}`,flexShrink:0}}>
            <div style={{minHeight:52,background:'rgba(124,106,224,.08)',border:'1px solid rgba(124,106,224,.2)',borderRadius:12,padding:'8px 12px',display:'flex',alignItems:'center',gap:6,flexWrap:'wrap',marginBottom:8}}>
              {sentence.length===0
                ?<span style={{fontSize:13,color:'rgba(255,255,255,.25)',fontStyle:'italic'}}>Tap symbols to build a sentence...</span>
                :sentence.map((sym,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',gap:4,padding:'4px 10px',background:`${sym.color}20`,border:`1px solid ${sym.color}35`,borderRadius:999,fontSize:12,fontWeight:700,color:sym.color}}>
                    {sym.label}
                    <button onClick={()=>setSentence(s=>s.filter((_,ii)=>ii!==i))} style={{background:'none',border:'none',cursor:'pointer',color:sym.color,fontSize:14,lineHeight:1,padding:0,marginLeft:2}}>×</button>
                  </div>
                ))}
            </div>
            <div style={{display:'flex',gap:7}}>
              <button onClick={speakSentence} disabled={sentence.length===0} style={{flex:1,padding:'10px',borderRadius:999,background:sentence.length?'#7C6AE0':'rgba(255,255,255,.06)',border:'none',color:'white',fontWeight:700,fontSize:13,cursor:sentence.length?'pointer':'default',fontFamily:'Inter,sans-serif',display:'flex',alignItems:'center',justifyContent:'center',gap:6}}>
                <Ic n="voice" s={14} c="white"/> Speak Sentence
              </button>
              <button onClick={()=>setSentence([])} style={{padding:'10px 14px',borderRadius:999,background:'rgba(255,255,255,.06)',border:`1px solid ${C.border}`,color:C.textMuted,fontSize:13,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>Clear</button>
            </div>
          </div>
          <div style={{overflowY:'auto',flex:1,padding:'12px 14px 20px'}}>
            <div style={{fontSize:9,fontWeight:700,color:C.textMuted,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:8}}>Sentence Starters</div>
            <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:16}}>
              {SENTENCE_STARTERS.map(s=>(
                <button key={s.id} onClick={()=>setSentence(p=>[...p,{...s,color:'#7C6AE0'}])} style={{padding:'7px 14px',borderRadius:999,background:'rgba(124,106,224,.12)',border:'1px solid rgba(124,106,224,.28)',color:'#A090FF',fontSize:12,fontWeight:700,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>{s.label}</button>
              ))}
            </div>
            {AAC_CATEGORIES.map(cat=>(
              <div key={cat.id} style={{marginBottom:14}}>
                <div style={{fontSize:11,fontWeight:700,color:cat.color,marginBottom:7,display:'flex',alignItems:'center',gap:5}}><span>{cat.icon}</span>{cat.label}</div>
                <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                  {(AAC_SYMBOLS[cat.id]||[]).map(sym=>(
                    <button key={sym.id} onClick={()=>setSentence(p=>[...p,sym])} style={{padding:'5px 11px',borderRadius:999,background:`${sym.color}12`,border:`1px solid ${sym.color}30`,color:sym.color,fontSize:11,fontWeight:700,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>{sym.label}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {mode==='schedule'&&(
        <div style={{flex:1,overflowY:'auto',padding:'12px 14px 20px'}}>
          <p style={{fontSize:12,color:C.textMuted,marginBottom:14,lineHeight:1.5}}>Tap any activity to hear its name.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(100px,1fr))',gap:9}}>
            {SCHEDULE_ITEMS.map(item=>(
              <button key={item.id} onClick={()=>speak(item.label,profile?.language)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,padding:'10px 6px',borderRadius:14,cursor:'pointer',background:`${item.color}10`,border:`1.5px solid ${item.color}28`,fontFamily:'Inter,sans-serif',transition:'all .15s'}}
                onMouseEnter={e=>e.currentTarget.style.background=`${item.color}22`}
                onMouseLeave={e=>e.currentTarget.style.background=`${item.color}10`}>
                <Placeholder label={item.image} height={60} width={60} style={{borderRadius:10,fontSize:7,border:`1px solid ${item.color}20`,flexShrink:0}}/>
                <span style={{fontSize:11,fontWeight:700,color:item.color,textAlign:'center',lineHeight:1.2}}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {mode==='asl'&&(
        <div style={{flex:1,display:'flex',flexDirection:'column',overflow:'hidden'}}>
          <div style={{padding:'10px 14px',borderBottom:`1px solid ${C.border}`,flexShrink:0}}>
            <p style={{fontSize:12,color:C.textMuted,marginBottom:8,lineHeight:1.5}}>ASL (American Sign Language) — tap any sign to see the animation.</p>
            <input value={aslSearch} onChange={e=>setAslSearch(e.target.value)} placeholder="Search signs..." style={{width:'100%',padding:'8px 12px',borderRadius:12,background:'rgba(255,255,255,.06)',border:`1px solid ${C.border}`,color:C.text,fontSize:13,fontFamily:'Inter,sans-serif',outline:'none'}}/>
          </div>
          {activeSign&&(
            <div style={{padding:'14px',borderBottom:`1px solid ${C.border}`,flexShrink:0,display:'flex',gap:14,alignItems:'flex-start'}}>
              <FrameAnimator frames={ASL_SIGNS[activeSign].frames} basePath={ASL_SIGNS[activeSign].basePath} fps={ASL_SIGNS[activeSign].fps} label={ASL_SIGNS[activeSign].label} width={140} height={140} loop={true} autoPlay={true} showControls={true}/>
              <div style={{flex:1}}>
                <div style={{fontFamily:'Playfair Display,serif',fontSize:20,color:C.text,marginBottom:6}}>{ASL_SIGNS[activeSign].label}</div>
                <p style={{fontSize:12,color:C.textMuted,lineHeight:1.6,marginBottom:8}}>Watch the animation and practice signing along.</p>
                <button onClick={()=>speak(ASL_SIGNS[activeSign].label,'en')} style={{padding:'7px 14px',borderRadius:999,background:'rgba(124,106,224,.15)',border:'1px solid rgba(124,106,224,.3)',color:'#A090FF',fontSize:12,fontWeight:700,cursor:'pointer',fontFamily:'Inter,sans-serif',display:'flex',alignItems:'center',gap:6}}>
                  <Ic n="voice" s={12} c="#A090FF"/> Hear the word
                </button>
              </div>
              <button onClick={()=>setActiveSign(null)} style={{padding:6,borderRadius:'50%',background:'rgba(255,255,255,.08)',border:`1px solid ${C.border}`,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <Ic n="close" s={14} c={C.textMuted}/>
              </button>
            </div>
          )}
          <div style={{flex:1,overflowY:'auto',padding:'12px 14px 20px'}}>
            <div style={{fontSize:9,fontWeight:700,color:C.textMuted,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10}}>{aslEntries.length} signs available</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(100px,1fr))',gap:9}}>
              {aslEntries.map(([id,sign])=>(
                <button key={id} onClick={()=>setActiveSign(id)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:7,padding:'12px 8px',borderRadius:14,cursor:'pointer',background:activeSign===id?'rgba(124,106,224,.2)':'rgba(255,255,255,.04)',border:`1.5px solid ${activeSign===id?'#7C6AE0':'rgba(255,255,255,.08)'}`,transition:'all .15s',fontFamily:'Inter,sans-serif'}}
                  onMouseEnter={e=>{if(activeSign!==id)e.currentTarget.style.background='rgba(124,106,224,.1)'}}
                  onMouseLeave={e=>{if(activeSign!==id)e.currentTarget.style.background='rgba(255,255,255,.04)'}}>
                  <div style={{width:56,height:56,borderRadius:10,background:'rgba(124,106,224,.12)',border:'1px solid rgba(124,106,224,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,color:'rgba(124,106,224,.6)',textAlign:'center',lineHeight:1.3}}>[ASL]</div>
                  <span style={{fontSize:11,fontWeight:700,color:activeSign===id?'#A090FF':'rgba(255,255,255,.7)',textAlign:'center',lineHeight:1.2}}>{sign.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
