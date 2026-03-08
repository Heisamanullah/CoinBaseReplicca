import { useNavigate } from 'react-router-dom'

const articles = [
  { id:1, title:'USDC: The digital dollar for the global crypto economy',   category:'Stablecoins', bg:'#0A0B0D', icon:'💲', time:'5 min read' },
  { id:2, title:'Can crypto really replace your bank account?',              category:'Basics',      bg:'#1E7AE3', icon:'🏛️', time:'7 min read' },
  { id:3, title:'When is the best time to invest in crypto?',                category:'Investing',   bg:'#B8C4C0', icon:'₿', time:'6 min read' },
  { id:4, title:'What is a blockchain and how does it work?',                category:'Basics',      bg:'#0052FF', icon:'🔗', time:'8 min read' },
  { id:5, title:'How to set up your first crypto wallet',                    category:'Tutorial',    bg:'#1c1c1e', icon:'👜', time:'4 min read' },
  { id:6, title:'Understanding DeFi: decentralized finance explained',       category:'DeFi',        bg:'#4CAF50', icon:'🌱', time:'10 min read' },
]

export default function Learn() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#EBEBEB] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border-2 border-gray-200 rounded-full px-3 py-1.5 mb-6 bg-white">
              <span className="text-[11px] font-black tracking-widest text-gray-700 uppercase">Learn</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-5">
              New to crypto?<br />Learn some crypto basics.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['All','Basics','Investing','Stablecoins','DeFi','Tutorial'].map(cat => (
              <button key={cat} className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 bg-white transition-colors">
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(a => (
              <div
                key={a.id}
                className="bg-white rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-200 border border-gray-100"
                onClick={() => navigate('/learn')}
              >
                <div className="h-48 flex items-center justify-center text-5xl" style={{ background: a.bg }}>
                  <span style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>{a.icon}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#0052FF] uppercase tracking-wide">{a.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-400">{a.time}</span>
                  </div>
                  <h3 className="text-[16px] font-black text-gray-900 leading-snug">{a.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
