import { useState } from 'react'
import Ic from '../components/Ic.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function ProfileScreen({ th, profile, onSave, themeMode, setThemeMode, onAccessibility }) {
  const [editing, setEditing] = useState(false)
  const [draft,   setDraft]   = useState(profile)
  const C = th || {bg:'#06040E',surface:'rgba(255,255,255,.06)',surfaceHov:'rgba(255,255,255,.1)',border:'rgba(255,255,255,.09)',text:'#F0EEF8',textSub:'rgba(240,238,248,.55)',textMuted:'rgba(240,238,248,.3)'}
  function save() { onSave(draft); setEditing(false) }

  return (
    <div style={{position:'fixed',inset:0,bottom:72,background:C.bg,overflowY:'auto'}}>
      <div style={{padding:'28px 20px 40px',maxWidth:680,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:22}}>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:30,color:C.text}}>Profile</div>
          <button onClick={()=>editing?save():setEditing(true)} style={{padding:'7px 14px',borderRadius:999,background:editing?'#6A5ACD':C.surface,border:`1px solid ${editing?'#6A5ACD':C.border}`,color:editing?'white':C.textSub,fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'Inter,sans-serif',display:'flex',alignItems:'center',gap:6}}>
            <Ic n={editing?'check':'edit'} s={13} c={editing?'white':C.textSub}/>{editing?'Save':'Edit'}
          </button>
        </div>

        <div style={{background:'linear-gradient(135deg,rgba(106,90,205,.12),rgba(106,90,205,.04))',border:'1px solid rgba(106,90,205,.2)',borderRadius:26,padding:20,marginBottom:14}}>
          <div style={{fontSize:36,textAlign:'center',marginBottom:8}}>{profile.avatar||'🚀'}</div>
          {editing?(
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {[{label:'Name',key:'name',type:'text',val:draft.name},{label:'Age',key:'age',type:'number',val:draft.age}].map(field=>(
                <div key={field.key}>
                  <div style={{fontSize:11,color:C.textMuted,marginBottom:4,fontWeight:600}}>{field.label}</div>
                  <input type={field.type} value={field.val} min={field.type==='number'?1:undefined} max={field.type==='number'?18:undefined}
                    onChange={e=>setDraft(d=>({...d,[field.key]:field.type==='number'?Number(e.target.value):e.target.value}))}
                    style={{width:'100%',padding:'9px 12px',borderRadius:12,background:C.surface,border:`1px solid ${C.border}`,color:C.text,fontSize:14,fontFamily:'Inter,sans-serif',outline:'none'}}/>
                </div>
              ))}
              <button onClick={save} style={{padding:'11px',borderRadius:999,background:'#6A5ACD',border:'none',color:'white',fontWeight:700,fontSize:13,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>Save Changes</button>
            </div>
          ):(
            <div style={{textAlign:'center'}}>
              <div style={{fontWeight:800,fontSize:17,color:C.text,marginBottom:2}}>{profile.name||'Learner'}</div>
              <div style={{fontSize:12,color:C.textMuted,marginBottom:14}}>Age {profile.age} · Level {profile.level||1}</div>
              <div style={{display:'flex',justifyContent:'center',gap:22}}>
                {[{v:(profile.xp||0).toLocaleString(),l:'XP'},{v:`${profile.streak||0}d`,l:'Streak'}].map(s=>(
                  <div key={s.l}>
                    <div style={{fontSize:15,fontWeight:800,color:'#FFD73C'}}>{s.v}</div>
                    <div style={{fontSize:9,color:C.textMuted,textTransform:'uppercase',letterSpacing:'.07em'}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Section title="Appearance" icon={themeMode==='dark'?'moon':'sun'} C={C}>
          <div style={{display:'flex',gap:7}}>
            {['dark','light','system'].map(m=>(
              <button key={m} onClick={()=>setThemeMode(m)} style={{flex:1,padding:'9px 4px',borderRadius:12,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:12,fontWeight:600,textTransform:'capitalize',transition:'all .2s',background:themeMode===m?'#6A5ACD':C.surface,border:`1px solid ${themeMode===m?'#6A5ACD':C.border}`,color:themeMode===m?'white':C.textSub}}>{m}</button>
            ))}
          </div>
        </Section>

        <Section title="Voice & Narration" icon="voice" C={C}>
          {[{label:'Narration',key:'narrationOn'},{label:'Sound Effects',key:'sfxOn'},{label:'Music',key:'musicOn'}].map((item,i,arr)=>(
            <Row key={item.key} label={item.label} last={i===arr.length-1} C={C}>
              <Toggle value={profile[item.key]} onChange={()=>onSave({...profile,[item.key]:!profile[item.key]})}/>
            </Row>
          ))}
          <div style={{marginTop:10}}>
            <div style={{fontSize:11,color:C.textMuted,marginBottom:6}}>Narration Speed</div>
            <div style={{display:'flex',gap:6}}>
              {[.75,1,1.25,1.5].map(r=>(
                <button key={r} onClick={()=>onSave({...profile,voiceRate:r})} style={{flex:1,padding:'8px 4px',borderRadius:10,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:12,fontWeight:700,background:profile.voiceRate===r?'#3AB5D4':C.surface,border:`1px solid ${profile.voiceRate===r?'#3AB5D4':C.border}`,color:profile.voiceRate===r?'white':C.textSub}}>{r}x</button>
              ))}
            </div>
          </div>
        </Section>

        <div onClick={onAccessibility} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:18,padding:16,marginBottom:10,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'space-between',transition:'background .2s'}}
          onMouseEnter={e=>e.currentTarget.style.background=C.surfaceHov||'rgba(255,255,255,.1)'}
          onMouseLeave={e=>e.currentTarget.style.background=C.surface}>
          <div>
            <div style={{fontWeight:700,fontSize:13,color:C.text,display:'flex',alignItems:'center',gap:7,marginBottom:2}}>
              <Ic n="settings" s={14} c="#3AB5D4"/> Accessibility
            </div>
            <div style={{fontSize:11,color:C.textMuted}}>Motion, contrast, captions, sensory settings</div>
          </div>
          <Ic n="play" s={14} c={C.textMuted}/>
        </div>

        <Section title="Developer Mode" icon="dev" C={C} color={profile.devMode?'#6A5ACD':undefined}>
          <Row label="Unlock all content for testing" last C={C}>
            <Toggle value={profile.devMode} onChange={()=>onSave({...profile,devMode:!profile.devMode})}/>
          </Row>
          {profile.devMode&&<div style={{marginTop:8,padding:'9px 12px',background:'rgba(106,90,205,.1)',borderRadius:10,fontSize:11,color:'#A090FF',lineHeight:1.7}}>All worlds · All lessons · Genius pathways · No progress locks</div>}
        </Section>
      </div>
    </div>
  )
}

function Section({ title, icon, C, color, children }) {
  return (
    <div style={{background:C.surface,border:`1px solid ${color?`${color}40`:C.border}`,borderRadius:18,padding:16,marginBottom:10}}>
      <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:12,display:'flex',alignItems:'center',gap:7}}>
        <Ic n={icon} s={14} c={color||C.textSub}/> {title}
      </div>
      {children}
    </div>
  )
}

function Row({ label, last, C, children }) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 0',borderBottom:last?'none':`1px solid ${C.border}`}}>
      <span style={{fontSize:13,color:C.text}}>{label}</span>
      {children}
    </div>
  )
}

function Toggle({ value, onChange }) {
  return (
    <div onClick={onChange} style={{width:44,height:24,borderRadius:999,cursor:'pointer',background:value?'#6A5ACD':'rgba(255,255,255,.1)',position:'relative',transition:'background .25s',flexShrink:0}}>
      <div style={{position:'absolute',top:2,left:value?21:2,width:20,height:20,borderRadius:'50%',background:'white',transition:'left .25s'}}/>
    </div>
  )
}
