export default function Placeholder({ label, height = 120, width = '100%', style = {} }) {
  return (
    <div style={{
      height, width,
      background: 'rgba(255,255,255,.03)',
      border: '1px dashed rgba(255,255,255,.15)',
      borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '8px 12px',
      color: 'rgba(255,255,255,.25)', fontSize: 10, fontWeight: 600,
      letterSpacing: '.04em', fontFamily: 'Inter,sans-serif', lineHeight: 1.4,
      flexShrink: 0, ...style,
    }}>
      {label}
    </div>
  )
}
