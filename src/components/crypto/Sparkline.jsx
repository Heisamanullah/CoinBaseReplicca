// Sparkline SVG chart for crypto price trend
export default function Sparkline({ data = [], color = '#CF304A', width = 80, height = 32 }) {
    if (!data || data.length < 2) return <div style={{ width, height }} />
    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1
    const pts = data
      .map((v, i) => {
        const x = (i / (data.length - 1)) * width
        const y = height - ((v - min) / range) * (height - 4) - 2
        return `${x},${y}`
      })
      .join(' ')
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block">
        <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  