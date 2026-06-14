const ALL_BADGES = [
  {id:'Solar Citizen',         world:'cosmos',   name:'Solar Citizen',         rarity:'common',   color:'#FFD73C', desc:'Complete: What Is the Solar System?'},
  {id:'Solar Scholar',         world:'cosmos',   name:'Solar Scholar',         rarity:'uncommon', color:'#FFD73C', desc:'Complete: The Sun — 80%+'},
  {id:'Mercury Scout',         world:'cosmos',   name:'Mercury Scout',         rarity:'common',   color:'#C4C4C4', desc:'Complete: Mercury'},
  {id:'Greenhouse Explorer',   world:'cosmos',   name:'Greenhouse Explorer',   rarity:'uncommon', color:'#3A9E5A', desc:'Complete: Venus — 80%+'},
  {id:'Earth Guardian',        world:'cosmos',   name:'Earth Guardian',        rarity:'uncommon', color:'#3AB5D4', desc:'Complete: Earth — 80%+'},
  {id:'Mars Explorer',         world:'cosmos',   name:'Mars Explorer',         rarity:'rare',     color:'#E84040', desc:'Complete: Mars — 80%+'},
  {id:'Giant Tamer',           world:'cosmos',   name:'Giant Tamer',           rarity:'rare',     color:'#9B6AE0', desc:'Complete: Jupiter — 80%+'},
  {id:'Star Scholar',          world:'cosmos',   name:'Star Scholar',          rarity:'uncommon', color:'#3AB5D4', desc:'Complete: What Is a Star?'},
  {id:'Life Cycle Master',     world:'cosmos',   name:'Life Cycle Master',     rarity:'rare',     color:'#FFD73C', desc:'Complete: Star Life Cycle — 85%+'},
  {id:'Galactic Explorer',     world:'cosmos',   name:'Galactic Explorer',     rarity:'rare',     color:'#7C6AE0', desc:'Complete: Galaxies — 85%+'},
  {id:'Horizon Crosser',       world:'cosmos',   name:'Horizon Crosser',       rarity:'epic',     color:'#9B6AE0', desc:'Complete: Black Holes — 85%+'},
  {id:'Mission Commander',     world:'cosmos',   name:'Mission Commander',     rarity:'rare',     color:'#E8A030', desc:'Complete: Rockets'},
  {id:'Lunar Scholar',         world:'cosmos',   name:'Lunar Scholar',         rarity:'rare',     color:'#C4C4C4', desc:'Complete: The Moon — 85%+'},
  {id:'Cosmic Scholar',        world:'cosmos',   name:'Cosmic Scholar',        rarity:'legendary',color:'#FFD73C', desc:'World mastery in Space & Cosmos'},
  {id:'Dragon Lore Scholar',   world:'mythology',name:'Dragon Lore Scholar',   rarity:'common',   color:'#D4507A', desc:'Complete: Dragons'},
  {id:'Phoenix Scholar',       world:'mythology',name:'Phoenix Scholar',       rarity:'common',   color:'#E8A030', desc:'Complete: The Phoenix'},
  {id:'Creature Lore Master',  world:'mythology',name:'Creature Lore Master',  rarity:'uncommon', color:'#9B6AE0', desc:'Complete: Creatures of Legend'},
  {id:'Olympian Scholar',      world:'mythology',name:'Olympian Scholar',      rarity:'rare',     color:'#C4A035', desc:'Complete: Greek Mythology — 80%+'},
  {id:'Egypt Scholar',         world:'mythology',name:'Egypt Scholar',         rarity:'rare',     color:'#E8A030', desc:'Complete: Egyptian Mythology — 80%+'},
  {id:'Norse Scholar',         world:'mythology',name:'Norse Scholar',         rarity:'rare',     color:'#3AB5D4', desc:'Complete: Norse Mythology — 80%+'},
  {id:'Critical Thinker',      world:'mythology',name:'Critical Thinker',      rarity:'epic',     color:'#20C8E0', desc:'Complete: Myth vs Reality — 85%+'},
  {id:'Master Mythologist',    world:'mythology',name:'Master Mythologist',    rarity:'legendary',color:'#D4507A', desc:'World mastery in Folklore & Mythology'},
  {id:'Counter',               world:'math',     name:'Counter',               rarity:'common',   color:'#FFD73C', desc:'Complete: Counting 1 to 10'},
  {id:'Place Value Pro',       world:'math',     name:'Place Value Pro',       rarity:'uncommon', color:'#9B6AE0', desc:'Complete: Numbers to 100'},
  {id:'Addition Ace',          world:'math',     name:'Addition Ace',          rarity:'common',   color:'#3AB5D4', desc:'Complete: What Is Addition?'},
  {id:'Multiplication Master', world:'math',     name:'Multiplication Master', rarity:'rare',     color:'#C44898', desc:'Complete: Multiplication — 80%+'},
  {id:'Fraction Expert',       world:'math',     name:'Fraction Expert',       rarity:'rare',     color:'#E8A030', desc:'Complete: Fractions — 80%+'},
  {id:'Pattern Master',        world:'math',     name:'Pattern Master',        rarity:'uncommon', color:'#7C6AE0', desc:'Complete: Patterns and Sequences'},
  {id:'Algebraist',            world:'math',     name:'Algebraist',            rarity:'epic',     color:'#A090FF', desc:'Complete: Introduction to Algebra — 85%+'},
  {id:'Mathematical Mind',     world:'math',     name:'Mathematical Mind',     rarity:'legendary',color:'#9B6AE0', desc:'World mastery in Mathematics'},
  {id:'Junior Scientist',      world:'science',  name:'Junior Scientist',      rarity:'common',   color:'#3AB5D4', desc:'Complete: What Is Science?'},
  {id:'Cell Biologist',        world:'science',  name:'Cell Biologist',        rarity:'rare',     color:'#3A9E5A', desc:'Complete: Cells — 80%+'},
  {id:'Matter Master',         world:'science',  name:'Matter Master',         rarity:'uncommon', color:'#9B6AE0', desc:'Complete: States of Matter'},
  {id:'Master Scientist',      world:'science',  name:'Master Scientist',      rarity:'legendary',color:'#3AB5D4', desc:'World mastery in Science'},
  {id:'Letter Master',         world:'language', name:'Letter Master',         rarity:'common',   color:'#C4A035', desc:'Complete: The Alphabet'},
  {id:'Phonics Reader',        world:'language', name:'Phonics Reader',        rarity:'uncommon', color:'#C4A035', desc:'Complete: Phonics — 80%+'},
  {id:'Sentence Builder',      world:'language', name:'Sentence Builder',      rarity:'uncommon', color:'#9B6AE0', desc:'Complete: Writing Complete Sentences'},
  {id:'Story Analyst',         world:'language', name:'Story Analyst',         rarity:'rare',     color:'#C44898', desc:'Complete: Story Elements — 80%+'},
  {id:'Language Master',       world:'language', name:'Language Master',       rarity:'legendary',color:'#C4A035', desc:'World mastery in Language'},
  {id:'Wildlife Scout',        world:'nature',   name:'Wildlife Scout',        rarity:'common',   color:'#3A9E5A', desc:'Complete: Animal Classification'},
  {id:'Botanist',              world:'nature',   name:'Botanist',              rarity:'uncommon', color:'#3A9E5A', desc:'Complete: Photosynthesis'},
  {id:'Earth Scientist',       world:'nature',   name:'Earth Scientist',       rarity:'uncommon', color:'#3AB5D4', desc:'Complete: Weather vs Climate'},
  {id:'Nature Master',         world:'nature',   name:'Nature Master',         rarity:'legendary',color:'#3A9E5A', desc:'World mastery in Natural World'},
  {id:'Color Artist',          world:'arts',     name:'Color Artist',          rarity:'common',   color:'#C44898', desc:'Complete: Color Theory'},
  {id:'Rhythm Keeper',         world:'arts',     name:'Rhythm Keeper',         rarity:'common',   color:'#9B6AE0', desc:'Complete: Rhythm and Beat'},
  {id:'Creative Master',       world:'arts',     name:'Creative Master',       rarity:'legendary',color:'#C44898', desc:'World mastery in Arts & Music'},
  {id:'History Detective',     world:'history',  name:'History Detective',     rarity:'common',   color:'#E8A030', desc:'Complete: What Is History?'},
  {id:'Egypt Explorer',        world:'history',  name:'Egypt Explorer',        rarity:'uncommon', color:'#E8A030', desc:'Complete: Ancient Egypt'},
  {id:'Science Pioneer',       world:'history',  name:'Science Pioneer',       rarity:'rare',     color:'#9B6AE0', desc:'Complete: Marie Curie'},
  {id:'History Scholar',       world:'history',  name:'History Scholar',       rarity:'legendary',color:'#E8A030', desc:'World mastery in History'},
  {id:'Junior Coder',          world:'tech',     name:'Junior Coder',          rarity:'common',   color:'#20C8E0', desc:'Complete: What Is Coding?'},
  {id:'Design Engineer',       world:'tech',     name:'Design Engineer',       rarity:'uncommon', color:'#E8A030', desc:'Complete: Engineering Design Process'},
  {id:'Tech Innovator',        world:'tech',     name:'Tech Innovator',        rarity:'legendary',color:'#20C8E0', desc:'World mastery in Technology'},
  {id:'World Explorer',        world:'society',  name:'World Explorer',        rarity:'common',   color:'#3A80D4', desc:'Complete: Continents and Oceans'},
  {id:'Money Wise',            world:'society',  name:'Money Wise',            rarity:'uncommon', color:'#3A9E5A', desc:'Complete: Understanding Money'},
  {id:'Empathy Champion',      world:'society',  name:'Empathy Champion',      rarity:'uncommon', color:'#C4A035', desc:'Complete: Empathy'},
  {id:'World Citizen',         world:'society',  name:'World Citizen',         rarity:'legendary',color:'#3A80D4', desc:'World mastery in Society'},
  {id:'Body Expert',           world:'health',   name:'Body Expert',           rarity:'uncommon', color:'#E86040', desc:'Complete: Body Systems'},
  {id:'Nutrition Navigator',   world:'health',   name:'Nutrition Navigator',   rarity:'uncommon', color:'#3A9E5A', desc:'Complete: Nutrition'},
  {id:'Wellness Champion',     world:'health',   name:'Wellness Champion',     rarity:'rare',     color:'#9B6AE0', desc:'Complete: Understanding Emotions — 80%+'},
  {id:'Health Champion',       world:'health',   name:'Health Champion',       rarity:'legendary',color:'#E86040', desc:'World mastery in Health & Body'},
]

const RARITY_COLOR = {legendary:'#FFD73C',epic:'#9B6AE0',rare:'#4A90D9',uncommon:'#7BAE8A',common:'rgba(255,255,255,.4)'}
const WORLD_LABELS = {cosmos:'Space & Cosmos',mythology:'Folklore & Mythology',math:'Mathematics',science:'Science',language:'Language',nature:'Nature',arts:'Arts & Music',history:'History',tech:'Technology',society:'Society',health:'Health'}

export default function AwardsScreen({ th, progress }) {
  const C = th || {bg:'#06040E',surface:'rgba(255,255,255,.06)',border:'rgba(255,255,255,.09)',text:'#F0EEF8',textSub:'rgba(240,238,248,.55)',textMuted:'rgba(240,238,248,.3)'}
  const earnedIds   = new Set(Object.keys(progress?.badgesEarned||{}))
  const earnedCount = earnedIds.size
  const worlds      = [...new Set(ALL_BADGES.map(b=>b.world))]

  return (
    <div style={{position:'fixed',inset:0,bottom:72,background:C.bg,overflowY:'auto'}}>
      <div style={{padding:'28px 20px 40px',maxWidth:680,margin:'0 auto'}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:C.textMuted,marginBottom:8}}>Milestones</div>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:30,color:C.text,marginBottom:6}}>Achievements</div>
        <p style={{fontSize:13,color:C.textMuted,marginBottom:20}}>{earnedCount} of {ALL_BADGES.length} badges earned across all worlds</p>
        <div style={{background:'rgba(255,215,60,.06)',border:'1px solid rgba(255,215,60,.14)',borderRadius:22,padding:18,textAlign:'center',marginBottom:22}}>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:20,color:C.text,marginBottom:8}}>Jurist Level {progress?.totals?.level||1}</div>
          <div style={{height:5,maxWidth:240,margin:'0 auto 6px',background:'rgba(255,255,255,.1)',borderRadius:999,overflow:'hidden'}}>
            <div style={{width:`${((progress?.totals?.xp||0)/Math.max(progress?.totals?.xpNext||1000,1))*100}%`,height:'100%',borderRadius:999,background:'linear-gradient(90deg,#D4A843,#FFD73C)',transition:'width .8s ease'}}/>
          </div>
          <div style={{fontSize:11,color:C.textMuted}}>{(progress?.totals?.xp||0).toLocaleString()} / {(progress?.totals?.xpNext||1000).toLocaleString()} XP</div>
        </div>
        {worlds.map(worldId=>{
          const worldBadges = ALL_BADGES.filter(b=>b.world===worldId)
          const worldEarned = worldBadges.filter(b=>earnedIds.has(b.id)).length
          return (
            <div key={worldId} style={{marginBottom:20}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
                <div style={{fontWeight:700,fontSize:14,color:C.text}}>{WORLD_LABELS[worldId]}</div>
                <div style={{fontSize:12,color:worldBadges[0]?.color||'#7C6AE0',fontWeight:700}}>{worldEarned}/{worldBadges.length}</div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(145px,1fr))',gap:8}}>
                {worldBadges.map((b,i)=>{
                  const isEarned = earnedIds.has(b.id)
                  const earnedAt = isEarned?progress.badgesEarned[b.id]?.earnedAt:null
                  return (
                    <div key={i} style={{background:isEarned?C.surface:'rgba(255,255,255,.02)',border:`1px solid ${isEarned?C.border:'rgba(255,255,255,.04)'}`,borderRadius:16,padding:13,textAlign:'center',opacity:isEarned?1:.25,transition:'opacity .3s'}}>
                      <div style={{width:40,height:40,borderRadius:12,background:`${b.color}14`,border:`1px solid ${b.color}28`,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 8px'}}>
                        <span style={{fontSize:9,color:`${b.color}80`,fontWeight:700}}>[★]</span>
                      </div>
                      <div style={{fontWeight:700,fontSize:12,color:C.text,marginBottom:3}}>{b.name}</div>
                      <div style={{fontSize:10,color:C.textMuted,marginBottom:7,lineHeight:1.4}}>{b.desc}</div>
                      {isEarned&&earnedAt&&<div style={{fontSize:9,color:b.color,marginBottom:5,fontWeight:600}}>{new Date(earnedAt).toLocaleDateString()}</div>}
                      <div style={{display:'inline-block',padding:'2px 7px',borderRadius:999,background:`${RARITY_COLOR[b.rarity]}14`,border:`1px solid ${RARITY_COLOR[b.rarity]}35`,fontSize:8,fontWeight:800,color:RARITY_COLOR[b.rarity],letterSpacing:'.08em',textTransform:'uppercase'}}>{b.rarity}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
