import Ic from '../components/Ic.jsx'

export default function AccessibilityScreen({ th, profile, onSave, onBack }) {
  const C = th || {bg:'#06040E',surface:'rgba(255,255,255,.06)',border:'rgba(255,255,255,.09)',text:'#F0EEF8',textSub:'rgba(240,238,248,.55)',textMuted:'rgba(240,238,248,.3)'}
  const acc    = profile?.accessibility || {}
  const toggle = (key) => onSave({ accessibility: { ...acc, [key]: !acc[key] } })
  const set    = (key, val) => onSave({ accessibility: { ...acc, [key]: val } })

  const sections = [
    {
      title:'Dyslexia Support', icon:'edit', color:'#FFD73C',
      desc:'Reading aids, font options, and visual formatting adjustments.',
      settings:[
        {key:'dyslexiaMode',     label:'Dyslexia Mode',      desc:'Activates all dyslexia-friendly reading settings at once',              type:'toggle'},
        {key:'openDyslexicFont', label:'OpenDyslexic Font',  desc:'Uses the OpenDyslexic typeface designed to reduce reading difficulty',   type:'toggle'},
        {key:'readingRuler',     label:'Reading Ruler',      desc:'Shows a highlighted strip that follows the current line of text',        type:'toggle'},
        {key:'syllableBreak',    label:'Syllable Breakdown', desc:'Shows syllable separations in vocabulary words',                         type:'toggle'},
        {key:'lineSpacing',      label:'Line Spacing',       desc:'Increase space between lines for easier reading',
          type:'select', options:['normal','wide','wider'], labels:['Normal','Wide','Wider']},
        {key:'letterSpacing',    label:'Letter Spacing',     desc:'Increase space between letters',
          type:'select', options:['normal','wide','wider'], labels:['Normal','Wide','Wider']},
        {key:'bgColor',          label:'Background Color',   desc:'Tinted background can reduce visual stress for some readers',
          type:'color', options:[null,'#FFF9E6','#E6F0FF','#E6FFE6','#F5E6FF'], labels:['Default','Warm','Cool','Green','Lavender']},
      ],
    },
    {
      title:'Visual', icon:'sun', color:'#3AB5D4',
      desc:'Contrast, size, and motion settings.',
      settings:[
        {key:'highContrast',       label:'High Contrast Mode',  desc:'Maximum color contrast for easier reading',              type:'toggle'},
        {key:'largeText',          label:'Large Text',          desc:'Increases all text sizes throughout the app',            type:'toggle'},
        {key:'reducedMotion',      label:'Reduce Motion',       desc:'Minimizes animations and floating effects',              type:'toggle'},
        {key:'closedCaptions',     label:'Closed Captions',     desc:'Show text for all narrated audio content',               type:'toggle'},
        {key:'visualInstructions', label:'Visual Instructions', desc:'Show visual step indicators alongside all text instructions', type:'toggle'},
      ],
    },
    {
      title:'Sensory & Focus', icon:'settings', color:'#3A9E5A',
      desc:'Calmer experience for sensory sensitivities and attention differences.',
      settings:[
        {key:'reducedSensory',  label:'Reduced Sensory Mode', desc:'Softer colors, quieter sounds, calmer overall experience',      type:'toggle'},
        {key:'visualTimers',    label:'Visual Timers',        desc:'Show countdown timers for activities and transitions',          type:'toggle'},
        {key:'focusMode',       label:'Focus Mode',           desc:'Simplified interface during lessons — fewer distractions',      type:'toggle'},
        {key:'shortLessonMode', label:'Short Lesson Mode',    desc:'Break lessons into smaller chunks with more frequent breaks',   type:'toggle'},
        {key:'breakReminders',  label:'Break Reminders',      desc:'Suggest movement or rest breaks every 20 minutes',             type:'toggle'},
        {key:'extraRepetition', label:'Extra Repetition',     desc:'Repeat key vocabulary and concepts more frequently',           type:'toggle'},
      ],
    },
  ]

  return (
    <div style={{position:'fixed',inset:0,background:C.bg,overflowY:'auto'}}>
      {acc.openDyslexicFont&&<style>{`@import url('https://fonts.cdnfonts.com/css/opendyslexic'); body,*{font-family:'OpenDyslexic',sans-serif!important}`}</style>}
      <div style={{padding:'14px 18px 100px',maxWidth:680,margin:'0 auto'}}>
        <button onClick={onBack} style={{display:'flex',alignItems:'center',gap:7,background:'none',border:'none',color:C.textMuted,cursor:'pointer',fontSize:13,fontWeight:500,marginBottom:20,padding:0,fontFamily:'Inter,sans-serif'}}>
          <Ic n="back" s={15} c={C.textMuted}/> Profile
        </button>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:C.textMuted,marginBottom:6}}>Accessibility</div>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:28,color:C.text,marginBottom:8}}>Accessibility Settings</div>
        <p style={{fontSize:13,color:C.textMuted,marginBottom:24,lineHeight:1.6}}>
          Ceonis is built for every learner — dyslexic learners, autistic learners, learners who are hard of hearing, learners with ADHD, and any child who benefits from a more flexible experience.
        </p>
        {sections.map(section=>(
          <div key={section.title} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:20,padding:16,marginBottom:12}}>
            <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:5,display:'flex',alignItems:'center',gap:7}}>
              <Ic n={section.icon} s={14} c={section.color}/> {section.title}
            </div>
            <p style={{fontSize:12,color:C.textMuted,marginBottom:12,lineHeight:1.5}}>{section.desc}</p>
            {section.settings.map((s,i)=>(
              <div key={s.key} style={{borderTop:`1px solid ${C.border}`,paddingTop:10}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingBottom:10}}>
                  <div style={{flex:1,paddingRight:16}}>
                    <div style={{fontSize:14,fontWeight:600,color:C.text,marginBottom:2}}>{s.label}</div>
                    <div style={{fontSize:12,color:C.textMuted,lineHeight:1.4}}>{s.desc}</div>
                  </div>
                  {s.type==='toggle'&&(
                    <div onClick={()=>toggle(s.key)} style={{width:46,height:26,borderRadius:999,cursor:'pointer',background:acc[s.key]?section.color:'rgba(255,255,255,.1)',position:'relative',transition:'background .25s',flexShrink:0}}>
                      <div style={{position:'absolute',top:3,left:acc[s.key]?22:3,width:20,height:20,borderRadius:'50%',background:'white',transition:'left .25s'}}/>
                    </div>
                  )}
                  {s.type==='select'&&(
                    <div style={{display:'flex',gap:4,flexShrink:0}}>
                      {s.options.map((opt,oi)=>{
                        const active=acc[s.key]===opt||(!acc[s.key]&&opt==='normal')
                        return <button key={opt} onClick={()=>set(s.key,opt)} style={{padding:'4px 8px',borderRadius:8,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:11,fontWeight:700,background:active?section.color:'rgba(255,255,255,.06)',border:`1px solid ${active?section.color:C.border}`,color:active?'white':C.textMuted}}>{s.labels[oi]}</button>
                      })}
                    </div>
                  )}
                  {s.type==='color'&&(
                    <div style={{display:'flex',gap:5,flexShrink:0}}>
                      {s.options.map((opt,oi)=>(
                        <div key={oi} onClick={()=>set(s.key,opt)} style={{width:22,height:22,borderRadius:'50%',cursor:'pointer',background:opt||'rgba(255,255,255,.1)',border:`2px solid ${acc[s.key]===opt?section.color:'rgba(255,255,255,.15)'}`,boxShadow:acc[s.key]===opt?`0 0 0 2px ${section.color}`:'none',transition:'box-shadow .2s'}}/>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div style={{background:'rgba(124,106,224,.08)',border:'1px solid rgba(124,106,224,.2)',borderRadius:18,padding:16}}>
          <div style={{fontWeight:700,fontSize:13,color:'#A090FF',marginBottom:8}}>◈ Designed for Every Learner</div>
          <p style={{fontSize:13,color:'rgba(255,255,255,.5)',lineHeight:1.7}}>Dyslexia Mode helps with visual tracking and letter recognition. Reduced Sensory Mode supports sensory sensitivities. Focus Mode supports learners with ADHD. All settings save to your profile and apply across the entire app.</p>
        </div>
      </div>
    </div>
  )
}
