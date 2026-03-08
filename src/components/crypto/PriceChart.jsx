import { useState } from 'react'

// Mini price chart for the phone mockup on homepage
export default function PriceChart() {
  const [active, setActive] = useState('1D')
  const tabs = ['1H', '1D', '1W', '1M', '1Y', 'All']

  return (
    <div className="mb-3">
      <div className="h-16 mb-2">
        <svg viewBox="0 0 300 64" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0052FF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0052FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,52 C50,44 100,36 150,24 C200,12 250,6 300,2" stroke="#0052FF" strokeWidth="2" fill="none" />
          <path d="M0,52 C50,44 100,36 150,24 C200,12 250,6 300,2 L300,64 L0,64Z" fill="url(#g)" />
          <circle cx="300" cy="2" r="3" fill="#0052FF" />
        </svg>
      </div>
      <div className="flex gap-0.5 mb-3">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-2 py-1 rounded-full text-[10px] font-semibold transition-colors ${active === t ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}
