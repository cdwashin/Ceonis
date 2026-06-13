import { useState } from 'react'
import { THEMES, GALAXIES, NAV_TABS } from './data/constants.js'
import { COSMOS }    from './data/worlds/cosmos.js'
import { MYTHOLOGY } from './data/worlds/mythology.js'
import { useProgress } from './hooks/useProgress.js'
import Ic from './components/Ic.jsx'
import OnboardingScreen    from './screens/OnboardingScreen.jsx'
import UniverseScreen      from './screens/UniverseScreen.jsx'
import WorldScreen         from './screens/WorldScreen.jsx'
import JourneyScreen       from './screens/JourneyScreen.jsx'
import CommunicationScreen from './screens/CommunicationScreen.jsx'
import AwardsScreen        from './screens/AwardsScreen.jsx'
import ProfileScreen       from './screens/ProfileScreen.jsx'
import ParentScreen        from './screens/ParentScreen.jsx'
import AccessibilityScreen from './screens/AccessibilityScreen.jsx'

const CURRICULUM = {
  cosmos:   COSMOS,
  mythology: MYTHOLOGY,
}

function GlobalStyles({ th, acc }) {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { height: 100%; width: 100%; overflow: hidden; font-size: ${acc?.largeText ? '18px' : '16px'}; }
      body {
        font-family: 'Inter', sans-serif;
        background: ${th.bg}; color: ${th.text};
        -webkit-font-smoothing: antialiased;
        ${acc?.reducedSensory ? 'filter: saturate(0.7);' : ''}
      }
      ${acc?.reducedMotion ? `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      ` : `
        @keyframes pulseG  { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes twinkle { 0%,100%{opacity:.1;transform:scale(1)} 50%{opacity:.75;transform:scale(1.5)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes orbFloat {
          0%,100% { transform: translate(-50%,-50%) translateY(0); }
          50%      { transform: translate(-50%,-50%) translateY(calc(var(--dist,10) * -1px)); }
        }
        @keyframes zoomIn { from{opacity:0;transform:translate(-50%,-50%) scale(.3)} to{opacity:1;transform:translate(-50%,-50%) scale(1)} }
        @keyframes shoot  { 0%{opacity:0;transform:rotate(-18deg) translateX(0)} 12%{opacity:1} 100%{opacity:0;transform:rotate(-18deg) translateX(260px)} }
      `}
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(255,255,255,.12); border-radius: 4px; }
    `}</style>
  )
}

function BottomNav({ tab, setTab, hasWorld, th }) {
  return (
    <nav style={{
      position:'fixed', bottom:0, left:0, right:0, height:72,
      background:th.nav, backdropFilter:'blur(24px)',
      borderTop:`1px solid ${th.border}`,
      display:'flex', alignItems:'center',
      justifyContent:'space-around', padding:'0 8px', zIndex:100,
    }}>
      {NAV_TABS.map(n => {
        const active = tab === n.id && !hasWorld
        return (
          <button key={n.id} onClick={() => setTab(n.id)} style={{
            display:'flex', flexDirection:'column', alignItems:'center', gap:4,
            flex:1, padding:'8px 4px', background:'none', border:'none',
            cursor:'pointer', fontFamily:'Inter,sans-serif', position:'relative',
            color:active?'#A090FF':th.textMuted, transition:'color .2s',
          }}>
            {active && <div style={{
              position:'absolute', top:2, left:'14%', right:'14%', bottom:2,
              borderRadius:999, background:'rgba(124,106,224,.18)',
              border:'1px solid rgba(124,106,224,.3)',
            }}/>}
            <div style={{position:'relative',zIndex:1}}>
              <Ic n={n.icon} s={22} c="currentColor" w={active?2:1.6}/>
            </div>
            <span style={{fontSize:9,fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',position:'relative',zIndex:1}}>
              {n.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export default function App() {
  const [tab,               setTab]               = useState('universe')
  const [activeWorld,       setActiveWorld]        = useState(null)
  const [themeMode,         setThemeMode]          = useState('dark')
  const [showAccessibility, setShowAccessibility]  = useState(false)

  const progress = useProgress()
  const acc = progress.profile?.accessibility || {}

  const resolvedTheme = acc.highContrast ? 'highContrast'
    : themeMode === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : themeMode

  const th = THEMES[resolvedTheme] || THEMES.dark

  function openWorld(galaxy) {
    if (CURRICULUM[galaxy.id]) setActiveWorld(galaxy)
    else setActiveWorld({ ...galaxy, comingSoon: true })
  }

  if (!progress.profile.onboardingComplete) {
    return (
      <>
        <GlobalStyles th={th} acc={acc}/>
        <OnboardingScreen onComplete={(data) => progress.updateProfile(data)}/>
      </>
    )
  }

  if (showAccessibility) {
    return (
      <>
        <GlobalStyles th={th} acc={acc}/>
        <AccessibilityScreen
          th={th}
          profile={progress.profile}
          onSave={(fields) => progress.updateProfile(fields)}
          onBack={() => setShowAccessibility(false)}
        />
      </>
    )
  }

  if (activeWorld && !activeWorld.comingSoon) {
    return (
      <>
        <GlobalStyles th={th} acc={acc}/>
        <WorldScreen
          galaxy={activeWorld}
          curriculum={CURRICULUM}
          onBack={() => setActiveWorld(null)}
          devMode={progress.profile.devMode}
          onLessonComplete={progress.completeLesson}
          onWordLearned={progress.learnWord}
          onBadgeEarned={progress.earnBadge}
          lessonsCompleted={progress.lessonsCompleted[activeWorld.id] || {}}
          accessibility={acc}
        />
      </>
    )
  }

  if (activeWorld?.comingSoon) {
    return (
      <>
        <GlobalStyles th={th} acc={acc}/>
        <div style={{position:'fixed',inset:0,background:th.bg,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:16,padding:32,textAlign:'center'}}>
          <div style={{width:64,height:64,borderRadius:'50%',background:`${activeWorld.color}20`,border:`2px solid ${activeWorld.color}40`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28}}>◈</div>
          <div style={{fontFamily:'Playfair Display,serif',fontSize:24,color:th.text}}>{activeWorld.name}</div>
          <p style={{fontSize:14,color:th.textMuted,maxWidth:280,lineHeight:1.6}}>
            Curriculum coming soon. Space & Cosmos and Folklore & Mythology are the current complete worlds.
          </p>
          <button onClick={() => setActiveWorld(null)} style={{padding:'12px 28px',borderRadius:999,background:activeWorld.color,border:'none',color:'white',fontWeight:700,fontSize:14,cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
            ← Back to Universe
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <GlobalStyles th={th} acc={acc}/>
      {tab === 'universe' && (
        <UniverseScreen profile={progress.profile} onGalaxy={openWorld}/>
      )}
      {tab === 'journey' && (
        <JourneyScreen
          th={th}
          progress={progress}
          curriculum={CURRICULUM}
          onWorld={openWorld}
        />
      )}
      {tab === 'communicate' && (
        <CommunicationScreen th={th} profile={progress.profile}/>
      )}
      {tab === 'awards' && (
        <AwardsScreen th={th} progress={progress}/>
      )}
      {tab === 'profile' && (
        <ProfileScreen
          th={th}
          profile={progress.profile}
          onSave={progress.updateProfile}
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          onAccessibility={() => setShowAccessibility(true)}
        />
      )}
      {tab === 'parent' && (
        <ParentScreen th={th} progress={progress}/>
      )}
      <BottomNav tab={tab} setTab={setTab} hasWorld={!!activeWorld} th={th}/>
    </>
  )
}
