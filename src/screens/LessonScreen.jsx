import { useState } from 'react'
import { LEARNING_STAGES } from '../data/constants.js'
import { useNarrator } from '../hooks/useNarrator.js'
import Ic from '../components/Ic.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function LessonScreen({ lesson, galaxy, subworld, onBack, onComplete, onWordLearned }) {
  const [stageIdx, setStageIdx] = useState(0)
  const [tier,     setTier]     = useState('foundation')
  const [qIdx,     setQIdx]     = useState(0)
  const [sel,      setSel]      = useState(null)
  const [fb,       setFb]       = useState(null)
  const [score,    setScore]    = useState(0)
  const [done,     setDone]     = useState(false)
  const narrator = useNarrator()
  const color    = galaxy.color
  const qs       = lesson.assessment?.questions || []
  const tierText = lesson.narrator?.[tier] || lesson.narrator?.foundation || ''
  const stage    = LEARNING_STAGES[stageIdx]

  const TIERS = {
    foundation:{ label:'Foundation', color:'#3A9E5A', desc:'Core understanding — where every learner begins' },
    explore:   { label:'Explore',    color:'#3AB5D4', desc:'Deeper understanding — patterns and context' },
    mastery:   { label:'Mastery',    color:'#C44898', desc:'Advanced concepts for learners ready to go beyond' },
  }
  const currentTier = TIERS[tier]

  function pick(opt) {
    if (sel !== null) return
    setSel(opt)
    const ok = opt === qs[qIdx]?.answer
    setFb({ ok, msg: ok ? 'Correct! Well done.' : `Not quite. The answer is: ${qs[qIdx]?.answer}` })
    if (ok) setScore(s=>s+1)
  }

  function nextQ() {
    if (qIdx+1 >= qs.length) {
      setDone(true)
      if (onComplete) onComplete(Math.round((score/Math.max(qs.length,1))*100))
      return
    }
    setQIdx(q=>q+1); setSel(null); setFb(null)
  }

  return (
    <div style={{position:'fixed',inset:0,background:'#06040E',overflowY:'auto'}}>
      <div style={{position:'fixed',top:0,left:0,right:0,height:'40%',background:`radial-gradient(ellipse at 50% 0%,${color}18 0%,transparent 70%)`,pointerEvents:'none',zIndex:0}}/>
      <div style={{position:'relative',zIndex:1,paddingBottom:90}}>
        <div style={{padding:'14px 18px 10px',position:'sticky',top:0,zIndex:20,background:'linear-gradient(to bottom,rgba(6,4,14,.98) 85%,transparent)'}}>
          <button onClick={onBack} style={{display:'flex',alignItems:'center',gap:7,background:'none',border:'none',color:'rgba(255,255,255,.5)',cursor:'pointer',fontSize:13,fontWeight:500,marginBottom:10,padding:0,fontFamily:'Inter,sans-serif'}}>
            <Ic n="back" s={15} c="rgba(255,255,255,.5)"/>{subworld?.name||galaxy.name}
          </button>
          <div style={{fontSize:10,color:`${color}99`,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:5}}>{galaxy.name} › {subworld?.name} › Ages {lesson.ageRange}</div>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:21,lineHeight:1.25,marginBottom:8,color:'#F0EEF8'}}>{lesson.title}</div>
          <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:10}}>
            {[
              {label:`${lesson.xp} XP`,bg:'rgba(255,210,60,.14)',bc:'rgba(255,210,60,.3)',tc:'#FFD73C'},
              {label:`Ages ${lesson.ageRange}`,bg:`${color}18`,bc:`${color}35`,tc:color},
              {label:`${lesson.vocabulary?.length||0} vocab`,bg:'rgba(255,255,255,.05)',bc:'rgba(255,255,255,.1)',tc:'rgba(255,255,255,.4)'},
              {label:`${qs.length} questions`,bg:'rgba(255,255,255,.05)',bc:'rgba(255,255,255,.1)',tc:'rgba(255,255,255,.4)'},
            ].map((ch,i)=>(
              <span key={i} style={{display:'inline-flex',alignItems:'center',padding:'3px 10px',borderRadius:999,background:ch.bg,border:`1px solid ${ch.bc}`,fontSize:10,fontWeight:700,color:ch.tc}}>{ch.label}</span>
            ))}
          </div>
          <div style={{display:'flex',gap:5}}>
            {Object.entries(TIERS).map(([key,t])=>(
              <button key={key} onClick={()=>setTier(key)} style={{flex:1,padding:'7px 4px',borderRadius:11,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:11,fontWeight:700,transition:'all .2s',background:tier===key?`${t.color}22`:'rgba(255,255,255,.04)',border:`1.5px solid ${tier===key?t.color:'rgba(255,255,255,.08)'}`,color:tier===key?t.color:'rgba(255,255,255,.35)'}}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{padding:'0 18px'}}>
          <div style={{background:`${currentTier.color}10`,border:`1px solid ${currentTier.color}22`,borderRadius:13,padding:'10px 14px',marginBottom:12,marginTop:6}}>
            <p style={{fontSize:12,color:`${currentTier.color}cc`,lineHeight:1.5}}>{currentTier.desc}</p>
          </div>
          <Placeholder label={lesson.heroImage||'[LESSON_HERO_IMAGE]'} height={140} style={{marginBottom:14}}/>
          <div style={{marginBottom:14,background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',borderRadius:13,padding:'12px 14px'}}>
            <div style={{fontSize:9,fontWeight:700,color:'rgba(255,255,255,.3)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:5}}>Learning Objective</div>
            <p style={{fontSize:13,color:'rgba(255,255,255,.75)',lineHeight:1.6}}>{lesson.objective}</p>
          </div>
          {lesson.whyItMatters&&(
            <div style={{marginBottom:14,background:`${color}08`,border:`1px solid ${color}20`,borderRadius:13,padding:'12px 14px'}}>
              <div style={{fontSize:9,fontWeight:700,color,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:5}}>Why This Matters</div>
              <p style={{fontSize:13,color:'rgba(255,255,255,.65)',lineHeight:1.65}}>{lesson.whyItMatters}</p>
            </div>
          )}
          <div style={{marginBottom:16}}>
            <div style={{fontSize:9,fontWeight:700,color:'rgba(255,255,255,.3)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:8}}>Learning Journey</div>
            <div style={{display:'flex',gap:4,overflowX:'auto',paddingBottom:6,marginBottom:10}}>
              {LEARNING_STAGES.map((s,i)=>(
                <button key={s.id} onClick={()=>setStageIdx(i)} style={{flexShrink:0,padding:'6px 10px',borderRadius:10,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:10,fontWeight:700,whiteSpace:'nowrap',transition:'all .2s',background:stageIdx===i?`${s.color}22`:'rgba(255,255,255,.04)',border:`1.5px solid ${stageIdx===i?s.color:'rgba(255,255,255,.07)'}`,color:stageIdx===i?s.color:'rgba(255,255,255,.3)'}}>
                  {s.label}
                </button>
              ))}
            </div>
            <div style={{background:`${stage.color}10`,border:`1px solid ${stage.color}28`,borderRadius:15,padding:'13px 15px'}}>
              <div style={{fontWeight:700,fontSize:13,color:stage.color,marginBottom:5}}>{stage.label}</div>
              <p style={{fontSize:13,color:'rgba(255,255,255,.6)',lineHeight:1.65,marginBottom:10}}>{stage.desc}</p>
              {stage.id==='listen'&&(
                <div>
                  <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:8}}>
                    <button onClick={()=>narrator.speaking?narrator.stop():narrator.speak(tierText)} style={{padding:'8px 16px',borderRadius:999,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:12,fontWeight:700,background:narrator.speaking?`${stage.color}30`:stage.color,border:'none',color:'white',display:'flex',alignItems:'center',gap:6}}>
                      <Ic n="voice" s={13} c="white"/>{narrator.speaking?'Stop':'Play Narration'}
                    </button>
                    {[.75,1,1.25,1.5].map(r=>(
                      <button key={r} onClick={()=>narrator.setRate(r)} style={{padding:'6px 10px',borderRadius:8,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:10,fontWeight:700,background:narrator.rate===r?'rgba(255,255,255,.15)':'rgba(255,255,255,.05)',border:`1px solid ${narrator.rate===r?'rgba(255,255,255,.3)':'rgba(255,255,255,.08)'}`,color:narrator.rate===r?'white':'rgba(255,255,255,.4)'}}>{r}x</button>
                    ))}
                  </div>
                  <p style={{fontSize:13,color:'rgba(255,255,255,.6)',lineHeight:1.7,fontStyle:'italic'}}>"{tierText}"</p>
                </div>
              )}
              {stage.id==='see'&&(
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:7}}>
                  {['[LESSON_HERO_IMAGE]','[CONCEPT_DIAGRAM]','[ANIMATION_PLACEHOLDER]','[VIDEO_PLACEHOLDER]'].map(t=>(
                    <Placeholder key={t} label={t} height={70}/>
                  ))}
                </div>
              )}
              {['interact','practice','create'].includes(stage.id)&&(()=>{
                const typeMap={interact:['simulate','build','drag_drop','explore'],practice:['game','match','sort','trace','sequence'],create:['create','compose','draw','write','design']}
                const relevant=lesson.activities?.filter(a=>typeMap[stage.id]?.includes(a.type))||[]
                return relevant.length>0?(
                  <div>
                    {relevant.slice(0,2).map((act,i)=>(
                      <div key={i} style={{background:'rgba(255,255,255,.05)',border:`1px solid ${stage.color}25`,borderRadius:12,padding:'11px 13px',marginBottom:7}}>
                        <div style={{fontWeight:700,fontSize:13,marginBottom:2,color:'#F0EEF8'}}>{act.title}</div>
                        <div style={{fontSize:11,color:'rgba(255,255,255,.45)',marginBottom:6,lineHeight:1.5}}>{act.instruction}</div>
                        <Placeholder label={act.placeholder} height={52} style={{borderRadius:8}}/>
                      </div>
                    ))}
                  </div>
                ):<Placeholder label={`[${stage.label.toUpperCase()} ACTIVITY]`} height={60}/>
              })()}
              {stage.id==='apply'&&(
                <div style={{background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',borderRadius:12,padding:'12px 14px'}}>
                  <div style={{fontSize:10,fontWeight:700,color:stage.color,marginBottom:6,letterSpacing:'.08em',textTransform:'uppercase'}}>Why This Matters</div>
                  <p style={{fontSize:13,color:'rgba(255,255,255,.65)',lineHeight:1.65}}>{lesson.whyItMatters||`Understanding ${lesson.title?.toLowerCase()} helps you see the world with deeper understanding.`}</p>
                </div>
              )}
              {stage.id==='master'&&(
                done?(
                  <div style={{textAlign:'center',padding:'8px 0'}}>
                    <div style={{width:52,height:52,borderRadius:'50%',background:`${stage.color}20`,border:`2px solid ${stage.color}50`,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px'}}>
                      <Ic n="award" s={22} c={stage.color}/>
                    </div>
                    <div style={{fontFamily:'Playfair Display,serif',fontSize:18,marginBottom:4,color:'#F0EEF8'}}>Assessment Complete</div>
                    <div style={{fontSize:13,color:'rgba(255,255,255,.45)',marginBottom:10}}>{score}/{qs.length} correct</div>
                    {lesson.mastery?.badge&&(
                      <div style={{display:'inline-flex',alignItems:'center',gap:6,padding:'7px 14px',borderRadius:999,background:'rgba(255,215,60,.1)',border:'1px solid rgba(255,215,60,.2)',marginBottom:12}}>
                        <Ic n="star" s={13} c="#FFD73C"/>
                        <span style={{fontSize:12,fontWeight:700,color:'#FFD73C'}}>Earned: {lesson.mastery.badge}</span>
                      </div>
                    )}
                    <button onClick={()=>{setDone(false);setQIdx(0);setSel(null);setFb(null);setScore(0)}} style={{display:'block',width:'100%',padding:'10px',borderRadius:999,background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.6)',fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>Retake</button>
                  </div>
                ):qs.length>0?(
                  <div>
                    <div style={{fontSize:11,color:'rgba(255,255,255,.35)',marginBottom:7}}>Question {qIdx+1} of {qs.length}</div>
                    <div style={{height:5,background:'rgba(255,255,255,.1)',borderRadius:999,overflow:'hidden',marginBottom:10}}>
                      <div style={{width:`${(qIdx/qs.length)*100}%`,height:'100%',borderRadius:999,background:stage.color,transition:'width .8s ease'}}/>
                    </div>
                    <div style={{background:`${stage.color}10`,border:`1px solid ${stage.color}20`,borderRadius:12,padding:'12px 14px',marginBottom:9}}>
                      <p style={{fontFamily:'Playfair Display,serif',fontSize:15,lineHeight:1.5,color:'#F0EEF8'}}>{qs[qIdx]?.q}</p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',gap:6}}>
                      {qs[qIdx]?.options?.map((opt,i)=>{
                        const isSel=sel===opt,isRight=opt===qs[qIdx]?.answer
                        let bg='rgba(255,255,255,.05)',bc='rgba(255,255,255,.1)',tc='rgba(255,255,255,.8)'
                        if(sel!==null){if(isRight){bg='rgba(60,200,100,.14)';bc='rgba(60,200,100,.5)';tc='#80FFB0'}else if(isSel){bg='rgba(255,70,70,.12)';bc='rgba(255,70,70,.4)';tc='#FF9090'}}
                        return(
                          <button key={i} onClick={()=>pick(opt)} style={{padding:'11px 13px',background:bg,border:`1px solid ${bc}`,borderRadius:11,color:tc,fontSize:13,fontWeight:500,textAlign:'left',cursor:sel?'default':'pointer',fontFamily:'Inter,sans-serif',transition:'all .2s',display:'flex',alignItems:'center',gap:8}}>
                            <div style={{width:21,height:21,borderRadius:'50%',border:`1.5px solid ${bc}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:700,flexShrink:0,color:tc}}>{['A','B','C','D'][i]}</div>
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                    {fb&&(
                      <>
                        <div style={{marginTop:8,background:fb.ok?'rgba(60,200,100,.1)':'rgba(255,70,70,.09)',border:`1px solid ${fb.ok?'rgba(60,200,100,.3)':'rgba(255,70,70,.25)'}`,borderRadius:11,padding:'10px 13px'}}>
                          <div style={{fontWeight:700,color:fb.ok?'#80FFB0':'#FF9090',display:'flex',alignItems:'center',gap:6,marginBottom:4}}>
                            <Ic n={fb.ok?'check':'close'} s={12} c={fb.ok?'#80FFB0':'#FF9090'}/>{fb.ok?'Correct!':'Not quite'}
                          </div>
                          <p style={{fontSize:12,color:'rgba(255,255,255,.6)',lineHeight:1.5}}>{fb.msg}</p>
                          {qs[qIdx]?.explanation&&<p style={{fontSize:11,color:'rgba(255,255,255,.4)',lineHeight:1.5,marginTop:4,fontStyle:'italic'}}>{qs[qIdx].explanation}</p>}
                        </div>
                        <button onClick={nextQ} style={{width:'100%',marginTop:8,padding:'12px',borderRadius:999,background:stage.color,color:'white',border:'none',fontWeight:700,fontSize:13,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
                          {qIdx+1>=qs.length?'See Results':'Next Question'}
                        </button>
                      </>
                    )}
                  </div>
                ):<Placeholder label={`[Assessment — ${lesson.title}]`} height={60}/>
              )}
            </div>
          </div>
          {lesson.narrator&&(
            <div style={{background:'rgba(58,181,212,.07)',border:'1px solid rgba(58,181,212,.18)',borderRadius:15,padding:'12px 15px',marginBottom:14}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
                <div style={{display:'flex',alignItems:'center',gap:7}}>
                  <div style={{width:27,height:27,borderRadius:'50%',background:'rgba(58,181,212,.18)',display:'flex',alignItems:'center',justifyContent:'center'}}><Ic n="voice" s={13} c="#3AB5D4"/></div>
                  <span style={{fontSize:10,fontWeight:700,color:'#3AB5D4',letterSpacing:'.07em',textTransform:'uppercase'}}>Narrator Script</span>
                </div>
                <button onClick={()=>narrator.speaking?narrator.stop():narrator.speak(tierText)} style={{padding:'5px 12px',borderRadius:999,cursor:'pointer',fontFamily:'Inter,sans-serif',fontSize:11,fontWeight:700,background:narrator.speaking?'rgba(58,181,212,.25)':'rgba(58,181,212,.12)',border:'1px solid rgba(58,181,212,.25)',color:'#3AB5D4',display:'flex',alignItems:'center',gap:5}}>
                  <Ic n="voice" s={11} c="#3AB5D4"/>{narrator.speaking?'Stop':'Play'}
                </button>
              </div>
              <p style={{fontSize:13,lineHeight:1.8,color:'rgba(255,255,255,.7)',fontStyle:'italic'}}>"{tierText}"</p>
            </div>
          )}
          {lesson.vocabulary?.length>0&&(
            <div style={{marginBottom:14}}>
              <div style={{fontSize:9,fontWeight:700,color:'rgba(255,255,255,.3)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10}}>Vocabulary — {lesson.vocabulary.length} Words</div>
              {lesson.vocabulary.map((v,i)=>(
                <div key={i} style={{background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',borderRadius:13,padding:'11px 13px',marginBottom:7,display:'flex',gap:11}}>
                  <div style={{flexShrink:0,minWidth:80}}>
                    <div style={{fontWeight:700,fontSize:14,color:'white',marginBottom:2}}>{v.word}</div>
                    <div style={{fontSize:10,color,fontWeight:600}}>/{v.phonetic}/</div>
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:12,color:'rgba(255,255,255,.65)',lineHeight:1.5,marginBottom:3}}>{v.definition}</div>
                    <div style={{fontSize:11,color:'rgba(255,255,255,.3)',fontStyle:'italic'}}>"{v.example}"</div>
                    {v.image&&<div style={{marginTop:6}}><Placeholder label={v.image} height={36} style={{borderRadius:6,fontSize:8}}/></div>}
                  </div>
                  <button onClick={()=>{narrator.speakWord(v);if(onWordLearned)onWordLearned(`${lesson.id}_${v.word}`)}} style={{width:28,height:28,borderRadius:'50%',background:`${color}15`,border:'none',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0}}>
                    <Ic n="voice" s={12} c={color}/>
                  </button>
                </div>
              ))}
            </div>
          )}
          {lesson.activities?.length>0&&(
            <div style={{marginBottom:14}}>
              <div style={{fontSize:9,fontWeight:700,color:'rgba(255,255,255,.3)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10}}>Activities — {lesson.activities.length} Total</div>
              {lesson.activities.map((act,i)=>(
                <div key={i} style={{background:'rgba(255,255,255,.04)',border:`1px solid ${color}20`,borderRadius:13,padding:'11px 13px',marginBottom:7}}>
                  <div style={{display:'flex',alignItems:'center',gap:9,marginBottom:6}}>
                    <div style={{width:30,height:30,borderRadius:9,background:`${color}18`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Ic n="play" s={12} c={color}/></div>
                    <div>
                      <div style={{fontWeight:700,fontSize:13,color:'#F0EEF8'}}>{act.title}</div>
                      <div style={{fontSize:9,color,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',opacity:.8}}>{act.type}</div>
                    </div>
                  </div>
                  <p style={{fontSize:12,color:'rgba(255,255,255,.5)',lineHeight:1.5,marginBottom:6}}>{act.instruction}</p>
                  <Placeholder label={act.placeholder} height={40} style={{borderRadius:8,fontSize:9}}/>
                </div>
              ))}
            </div>
          )}
          {lesson.mastery?.badge&&(
            <div style={{background:'rgba(255,215,60,.05)',border:'1px solid rgba(255,215,60,.15)',borderRadius:14,padding:'12px 15px',display:'flex',alignItems:'center',gap:12}}>
              <Ic n="award" s={20} c="#FFD73C"/>
              <div>
                <div style={{fontWeight:700,fontSize:13,color:'#FFD73C',marginBottom:2}}>{lesson.mastery.badge}</div>
                <div style={{fontSize:11,color:'rgba(255,255,255,.4)'}}>Score {lesson.mastery.threshold}%+ to earn · {lesson.mastery.reward}</div>
              </div>
              <div style={{marginLeft:'auto'}}><Placeholder label={lesson.mastery.badgeImage||'[BADGE_IMAGE]'} height={44} width={44} style={{borderRadius:'50%',fontSize:7}}/></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
