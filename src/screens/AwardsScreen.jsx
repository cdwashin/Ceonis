import Placeholder from '../components/Placeholder.jsx'

const ALL_BADGES = [
  {id:'Solar Citizen',       world:'cosmos',    name:'Solar Citizen',       rarity:'common',   color:'#FFD73C', desc:'Complete: What Is the Solar System?'},
  {id:'Solar Scholar',       world:'cosmos',    name:'Solar Scholar',       rarity:'uncommon', color:'#FFD73C', desc:'Complete: The Sun — 80%+'},
  {id:'Mercury Scout',       world:'cosmos',    name:'Mercury Scout',       rarity:'common',   color:'#C4C4C4', desc:'Complete: Mercury'},
  {id:'Greenhouse Explorer', world:'cosmos',    name:'Greenhouse Explorer', rarity:'uncommon', color:'#3A9E5A', desc:'Complete: Venus — 80%+'},
  {id:'Earth Guardian',      world:'cosmos',    name:'Earth Guardian',      rarity:'uncommon', color:'#3AB5D4', desc:'Complete: Earth — 80%+'},
  {id:'Mars Explorer',       world:'cosmos',    name:'Mars Explorer',       rarity:'rare',     color:'#E84040', desc:'Complete: Mars — 80%+'},
  {id:'Giant Tamer',         world:'cosmos',    name:'Giant Tamer',         rarity:'rare',     color:'#9B6AE0', desc:'Complete: Jupiter — 80%+'},
  {id:'Star Scholar',        world:'cosmos',    name:'Star Scholar',        rarity:'uncommon', color:'#3AB5D4', desc:'Complete: What Is a Star?'},
  {id:'Life Cycle Master',   world:'cosmos',    name:'Life Cycle Master',   rarity:'rare',     color:'#FFD73C', desc:'Complete: Life Cycle of a Star — 85%+'},
  {id:'Star Navigator',      world:'cosmos',    name:'Star Navigator',      rarity:'uncommon', color:'#C4C4C4', desc:'Complete: Constellations'},
  {id:'Galactic Explorer',   world:'cosmos',    name:'Galactic Explorer',   rarity:'rare',     color:'#7C6AE0', desc:'Complete: Galaxies — 85%+'},
  {id:'Horizon Crosser',     world:'cosmos',    name:'Horizon Crosser',     rarity:'epic',     color:'#9B6AE0', desc:'Complete: Black Holes — 85%+'},
  {id:'Mission Commander',   world:'cosmos',    name:'Mission Commander',   rarity:'rare',     color:'#E8A030', desc:'Complete: Rockets'},
  {id:'Lunar Scholar',       world:'cosmos',    name:'Lunar Scholar',       rarity:'rare',     color:'#C4C4C4', desc:"Complete: Earth's Moon — 85%+"},
  {id:'Cosmic Scholar',      world:'cosmos',    name:'Cosmic Scholar',      rarity:'legendary',color:'#FFD73C', desc:'Earn world mastery in Space & Cosmos'},
  {id:'Dragon Lore Scholar', world:'mythology', name:'Dragon Lore Scholar', rarity:'common',   color:'#D4507A', desc:'Complete: Dragons'},
  {id:'Phoenix Scholar',     world:'mythology', name:'Phoenix Scholar',     rarity:'common',   color:'#E8A030', desc:'Complete: The Phoenix'},
  {id:'Creature Lore Master',world:'mythology', name:'Creature Lore Master',rarity:'uncommon', color:'#9B6AE0', desc:'Complete: Creatures of Legend'},
  {id:'Olympian Scholar',    world:'mythology', name:'Olympian Scholar',    rarity:'rare',     color:'#C4A035', desc:'Complete: Greek Mythology — 80%+'},
  {id:'Egypt Scholar',       world:'mythology', name:'Egypt Scholar',       rarity:'rare',     color:'#E8A030', desc:'Complete: Egyptian Mythology — 80%+'},
  {id:'Norse Scholar',       world:'mythology', name:'Norse Scholar',       rarity:'rare',     color:'#3AB5D4', desc:'Complete: Norse Mythology — 80%+'},
  {id:'Critical Thinker',    world:'mythology', name:'Critical Thinker',    rarity:'epic',     color:'#20C8E0', desc:'Complete: Myth vs Reality — 85%+'},
  {id:'Master Mythologist',  world:'mythology', name:'Master Mythologist',  rarity:'legendary',color:'#D4507A', desc:'Earn world mastery in Folklore & Mythology'},
]

const RARITY_COLOR = {legendary:'#FFD73C',epic:'#9B6AE0',rare:'#4A90D9',uncommon:'#7BAE8A',common:'rgba(255,255,255,.4)'}

export default function AwardsScreen({ th, progress }) {
  const C = th || {bg:'#06040E',surface:'rgba(255,255,255,.06)',border:'rgba(255,255,255,.09)',text:'#F0EEF8',textSub:'rgba(240,238,248,.55)',textMuted:'rgba(240,238,248,.3)'}
  const earnedIds = new Set(Object.keys(progress?.badgesEarned||{}))

  return (
    <div style={{position:'fixed',inset:0,bottom:72,background:C.bg,overflowY:'auto'}}>
      <div style={{padding:'32px 20px 40px',maxWidth:680,margin:'0 auto'}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:C.textMuted,marginBottom:8}}>Milestones</div>
        <div style={{fontFamily:'Playfair Display,serif',fontSize:30,color:C.text,marginBottom:22}}>Achievements</div>
        <div style={{background:'rgba(255,215,60,.06)',border:'1px solid rgba(255,215,60,.14)',borderRadius:26,padding:20,textAlign:'center',marginBottom:22}}>
          <Placeholder label="[JURIST_LEVEL_BADGE]" height={64} width={64} style={{borderRadius:'50%',margin:'0 auto 12px',background:'rgba(255,215,60,.12)',border:'2px solid rgba(255,215,60,.28)'}}/>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:18,color:C.text,marginBottom:5}}>Level {progress?.totals?.level||1}</div>
          <div style={{height:5,maxWidth:200,margin:'0 auto 6px',background:'rgba(255,255,255,.1)',borderRadius:999,overflow:'hidden'}}>
            <div style={{width:`${((progress?.totals?.xp||0)/Math.max(progress?.totals?.xpNext||1000,1))*100}%`,height:'100%',borderRadius:999,background:'linear-gradient(90deg,#D4A843,#FFD73C)',transition:'width .8s ease'}}/>
          </div>
          <div style={{fontSize:11,color:C.textMuted}}>{(progress?.totals?.xp||0).toLocaleString()} / {(progress?.totals?.xpNext||1000).toLocaleString()} XP</div>
        </div>
        <div style={{marginBottom:14,fontSize:12,color:C.textMuted}}>{earnedIds.size} of {ALL_BADGES.length} badges earned</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:10}}>
          {ALL_BADGES.map((b,i)=>{
            const isEarned = earnedIds.has(b.id)
            const earnedAt = isEarned?progress.badgesEarned[b.id]?.earnedAt:null
            return (
              <div key={i} style={{background:isEarned?C.surface:'rgba(255,255,255,.02)',border:`1px solid ${isEarned?C.border:'rgba(255,255,255,.04)'}`,borderRadius:19,padding:16,textAlign:'center',opacity:isEarned?1:.28,transition:'opacity .3s'}}>
                <Placeholder label="[BADGE]" height={46} width={46} style={{borderRadius:13,background:`${b.color}14`,border:`1px solid ${b.color}28`,margin:'0 auto 9px',fontSize:9}}/>
                <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:3}}>{b.name}</div>
                <div style={{fontSize:11,color:C.textSub||C.textMuted,marginBottom:8,lineHeight:1.45}}>{b.desc}</div>
                {isEarned&&earnedAt&&<div style={{fontSize:9,color:b.color,marginBottom:6,fontWeight:600}}>{new Date(earnedAt).toLocaleDateString()}</div>}
                <div style={{display:'inline-block',padding:'2px 7px',borderRadius:999,background:`${RARITY_COLOR[b.rarity]}14`,border:`1px solid ${RARITY_COLOR[b.rarity]}35`,fontSize:9,fontWeight:800,color:RARITY_COLOR[b.rarity],letterSpacing:'.09em',textTransform:'uppercase'}}>{b.rarity}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
