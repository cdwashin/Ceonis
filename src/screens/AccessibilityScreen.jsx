import Ic from '../components/Ic.jsx'

export default function AccessibilityScreen({ th, profile, onSave, onBack }) {
  const C = th || {bg:'#06040E',surface:'rgba(255,255,255,.06)',border:'rgba(255,255,255,.09)',text:'#F0EEF8',textSub:'rgba(240,238,248,.55)',textMuted:'rgba(240,238,248,.3)'}
  const acc = profile?.accessibility || {}
  const toggle = (key) => onSave({ accessibility: { ...acc, [key]: !acc[key] } })

  const sections = [
    { title:'Visual', icon:'sun', color:'#FFD73C', settings:[
      {key:'highContrast',   label:'High Contrast Mode',  desc:'Maximum color contrast for easier reading'},
      {key:'largeText',      label:'Large Text',          desc:'Increases all text sizes throughout the app'},
      {key:'reducedMotion',  label:'Reduce Motion',       desc:'Minimizes animations and movement'},
      {key:'closedCaptions', label:'Closed Captions',     desc:'Show text for all narrated content'},
    ]},
    { title:'Sensory', icon:'settings', color:'#3AB5D4', settings:[
      {key:'reducedSensory', label:'Reduced Sensory Mode', desc:'Quieter sounds, softer colors, calmer experience'},
      {key:'visualTimers',   label:'Visual Timers',        desc:'Show countdown timers for activities'},
    ]},
    { title:'Learning', icon:'play', color:'#3A9E5A', settings:[
      {key:'shortLessonMode', label:'Short Lesson Mode',  desc:'Break lessons into smaller chunks'},
      {key:'focusMode',       label:'Focus Mode',         desc:'Simplified interface during lessons'},
      {key:'extraRepetition', label:'Extra Repetition',   desc:'Repeat key concepts more frequently'},
      {key:'breakReminders',  label:'Break Reminders',    desc:'Suggest breaks every 20 minutes'},
    ]},
  ]

  return (
    <div style={{position:'fixed',inset:0,background:C.bg,overflowY:'auto'}}>
      <div style={{padding:'14px 18px 100px',maxWidth:680,margin:'0 auto'}}>
        <button onClick={onBack} style={{display:'flex',alignItems:'center',gap:7,background:'none',border:'none',color:C.textMuted,cursor:'pointer',fontSize:13,fontWeight:500,marginBottom:20,padding:0,fontFamily:'Inter,sans-serif'}}>
          <Ic n="back" s={15} c={C.textMuted}/> Profile
        </button>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:C.textMuted,marginBottom:6}}>Accessibility</div>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:28,color:C.text,marginBottom:8}}>Accessibility Settings</div>
        <p style={{fontSize:13,color:C.textMuted,marginBottom:24,lineHeight:1.6}}>Ceonis is built for every learner. Adjust these settings to create the best experience for your child.</p>
        {sections.map(section=>(
          <div key={section.title} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:20,padding:16,marginBottom:12}}>
            <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:14,display:'flex',alignItems:'center',gap:7}}>
              <Ic n={section.icon} s={14} c={section.color}/> {section.title}
            </div>
            {section.settings.map((s,i)=>(
              <div key={s.key} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'11px 0',borderBottom:i<section.settings.length-1?`1px solid ${C.border}`:'none'}}>
                <div style={{flex:1,paddingRight:16}}>
                  <div style={{fontSize:14,fontWeight:600,color:C.text,marginBottom:2}}>{s.label}</div>
                  <div style={{fontSize:12,color:C.textMuted,lineHeight:1.4}}>{s.desc}</div>
                </div>
                <div onClick={()=>toggle(s.key)} style={{width:46,height:26,borderRadius:999,cursor:'pointer',background:acc[s.key]?section.color:'rgba(255,255,255,.1)',position:'relative',transition:'background .25s',flexShrink:0}}>
                  <div style={{position:'absolute',top:3,left:acc[s.key]?22:3,width:20,height:20,borderRadius:'50%',background:'white',transition:'left .25s'}}/>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div style={{background:'rgba(124,106,224,.08)',border:'1px solid rgba(124,106,224,.2)',borderRadius:18,padding:16}}>
          <div style={{fontWeight:700,fontSize:13,color:'#A090FF',marginBottom:8}}>◈ Designed for Every Learner</div>
          <p style={{fontSize:13,color:'rgba(255,255,255,.5)',lineHeight:1.7}}>These settings support autistic learners, children with ADHD, sensory sensitivities, hearing differences, visual differences, and any child who benefits from a calmer, more structured learning experience.</p>
        </div>
      </div>
    </div>
  )
}
