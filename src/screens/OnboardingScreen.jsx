import { useState } from 'react'

const AVATARS = ['🚀','🌟','🦁','🐬','🦋','🌈','⚡','🎨','🔭','🎵','🌿','🦊']
const LANGUAGES = [
  {code:'en',label:'English'},{code:'es',label:'Español'},
  {code:'fr',label:'Français'},{code:'pt',label:'Português'},
  {code:'ar',label:'العربية'},{code:'zh',label:'中文'},
]

export default function OnboardingScreen({ onComplete }) {
  const [step,   setStep]   = useState(0)
  const [name,   setName]   = useState('')
  const [age,    setAge]    = useState(7)
  const [avatar, setAvatar] = useState('🚀')
  const [lang,   setLang]   = useState('en')

  const steps = [
    {
      title:'Welcome to Ceonis',
      subtitle:'A learning universe built for every child',
      content:(
        <div style={{textAlign:'center'}}>
          <div style={{fontSize:72,marginBottom:20}}>◈</div>
          <p style={{fontSize:15,color:'rgba(255,255,255,.55)',lineHeight:1.7,maxWidth:280,margin:'0 auto'}}>
            Ceonis adapts to your child's age, learning style, and pace. Every child can learn — and every child can go as far as they are capable.
          </p>
        </div>
      ),
    },
    {
      title:"What's your name?",
      subtitle:'This is who will be learning today',
      content:(
        <div style={{display:'flex',flexDirection:'column',gap:14,alignItems:'center'}}>
          <div style={{fontSize:48,marginBottom:4}}>{avatar}</div>
          <input autoFocus value={name} onChange={e=>setName(e.target.value)} placeholder="Enter name..."
            style={{width:'100%',maxWidth:300,padding:'14px 18px',borderRadius:16,background:'rgba(255,255,255,.08)',border:'1.5px solid rgba(255,255,255,.2)',color:'white',fontSize:18,fontWeight:600,fontFamily:'Inter,sans-serif',textAlign:'center',outline:'none'}}/>
          <div style={{display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center',maxWidth:300}}>
            {AVATARS.map(a=>(
              <button key={a} onClick={()=>setAvatar(a)} style={{width:44,height:44,borderRadius:12,fontSize:22,background:avatar===a?'rgba(124,106,224,.3)':'rgba(255,255,255,.06)',border:`2px solid ${avatar===a?'#7C6AE0':'rgba(255,255,255,.1)'}`,cursor:'pointer',transition:'all .2s'}}>{a}</button>
            ))}
          </div>
        </div>
      ),
    },
    {
      title:`How old is ${name||'your child'}?`,
      subtitle:'This sets the starting point — mastery unlocks more',
      content:(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:20}}>
          <div style={{width:120,height:120,borderRadius:'50%',background:'rgba(124,106,224,.15)',border:'3px solid rgba(124,106,224,.4)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:52,fontWeight:800,color:'#A090FF'}}>{age}</div>
          <input type="range" min={1} max={18} value={age} onChange={e=>setAge(Number(e.target.value))} style={{width:'100%',maxWidth:300,accentColor:'#7C6AE0'}}/>
          <div style={{display:'flex',justifyContent:'space-between',width:'100%',maxWidth:300,fontSize:12,color:'rgba(255,255,255,.35)'}}>
            <span>1</span><span>5</span><span>10</span><span>15</span><span>18</span>
          </div>
          <p style={{fontSize:13,color:'rgba(255,255,255,.45)',textAlign:'center',maxWidth:280,lineHeight:1.6}}>
            Age only sets the starting path. A gifted 5-year-old can reach Grade 8 content. There is no ceiling.
          </p>
        </div>
      ),
    },
    {
      title:'Choose a language',
      subtitle:'More languages will be added over time',
      content:(
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,width:'100%',maxWidth:320}}>
          {LANGUAGES.map(l=>(
            <button key={l.code} onClick={()=>setLang(l.code)} style={{padding:'14px',borderRadius:14,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:14,fontWeight:600,background:lang===l.code?'rgba(124,106,224,.25)':'rgba(255,255,255,.06)',border:`1.5px solid ${lang===l.code?'#7C6AE0':'rgba(255,255,255,.1)'}`,color:lang===l.code?'#A090FF':'rgba(255,255,255,.65)',transition:'all .2s'}}>{l.label}</button>
          ))}
        </div>
      ),
    },
    {
      title:`Welcome, ${name||'Learner'}! 🎉`,
      subtitle:'Your universe is ready',
      content:(
        <div style={{textAlign:'center'}}>
          <div style={{fontSize:52,marginBottom:16}}>{avatar}</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:20}}>
            {[{label:'Name',value:name||'Learner'},{label:'Age',value:`${age} years old`},{label:'Language',value:LANGUAGES.find(l=>l.code===lang)?.label}].map(r=>(
              <div key={r.label} style={{display:'flex',justifyContent:'space-between',padding:'10px 16px',background:'rgba(255,255,255,.06)',borderRadius:12}}>
                <span style={{color:'rgba(255,255,255,.4)',fontSize:13}}>{r.label}</span>
                <span style={{color:'white',fontSize:13,fontWeight:600}}>{r.value}</span>
              </div>
            ))}
          </div>
          <p style={{fontSize:13,color:'rgba(255,255,255,.45)',lineHeight:1.7}}>You can change everything in Profile settings at any time.</p>
        </div>
      ),
    },
  ]

  const current = steps[step]
  const isLast  = step === steps.length - 1
  const canNext = step === 1 ? name.trim().length > 0 : true

  return (
    <div style={{position:'fixed',inset:0,background:'radial-gradient(ellipse at 50% 0%, #0E0830 0%, #06040E 70%)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:28,overflowY:'auto'}}>
      <div style={{display:'flex',gap:7,marginBottom:32}}>
        {steps.map((_,i)=>(
          <div key={i} style={{width:i===step?20:7,height:7,borderRadius:999,background:i<=step?'#7C6AE0':'rgba(255,255,255,.15)',transition:'all .3s'}}/>
        ))}
      </div>
      <div style={{width:'100%',maxWidth:380,textAlign:'center'}}>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:26,color:'white',marginBottom:8,lineHeight:1.2}}>{current.title}</div>
        <p style={{fontSize:14,color:'rgba(255,255,255,.4)',marginBottom:32,lineHeight:1.5}}>{current.subtitle}</p>
        <div style={{display:'flex',justifyContent:'center',marginBottom:36}}>{current.content}</div>
        <div style={{display:'flex',gap:10}}>
          {step>0&&<button onClick={()=>setStep(s=>s-1)} style={{flex:1,padding:'14px',borderRadius:999,background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.15)',color:'rgba(255,255,255,.6)',fontSize:14,fontWeight:600,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>Back</button>}
          <button onClick={()=>isLast?onComplete({name:name.trim()||'Learner',age,avatar,language:lang,onboardingComplete:true}):setStep(s=>s+1)} disabled={!canNext}
            style={{flex:2,padding:'14px',borderRadius:999,background:canNext?'#7C6AE0':'rgba(255,255,255,.08)',border:'none',color:canNext?'white':'rgba(255,255,255,.25)',fontSize:14,fontWeight:700,cursor:canNext?'pointer':'default',fontFamily:'Inter,sans-serif',boxShadow:canNext?'0 4px 20px rgba(124,106,224,.5)':'none',transition:'all .2s'}}>
            {isLast?'Enter the Universe →':'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}
