import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cryptoAssets } from '../data/cryptoData'
import Input from '../components/common/Input'
import CryptoCard from '../components/crypto/CryptoCard'
import PriceChart from '../components/crypto/PriceChart'

/* Reusable inline-safe button — immune to global button resets */
function Btn({ children, onClick, type = 'button', dark = false, outline = false, full = false }) {
  const bg     = dark    ? '#111827' : outline ? 'transparent' : '#0052FF'
  const color  = outline ? '#111827' : '#ffffff'
  const border = outline ? '2px solid #E5E7EB' : 'none'
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '13px 28px',
        fontSize: '15px',
        fontWeight: 700,
        lineHeight: 1.4,
        borderRadius: '9999px',
        backgroundColor: bg,
        color,
        border,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        width: full ? '100%' : 'auto',
        fontFamily: 'inherit',
        transition: 'opacity 0.15s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      {children}
    </button>
  )
}

/* ── Hero ──────────────────────────────────────────────────────── */
function Hero() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  return (
    <section className="min-h-[calc(100vh-60px)] flex items-center">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-8 lg:px-20 py-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Phone mockup */}
        <div className="w-full max-w-[440px] flex-shrink-0 order-2 lg:order-1">
          <div className="rounded-[32px] p-6 lg:p-8" style={{ background: 'linear-gradient(160deg,#1a3fcc 0%,#0a1f8f 40%,#000080 100%)' }}>
            <div className="bg-white rounded-[28px] w-full max-w-[290px] mx-auto p-4 shadow-2xl">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-100">
                <div className="flex gap-1">
                  {[0,1,2].map(i => <div key={i} className="w-4 bg-gray-300 rounded-full" style={{height:2}} />)}
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-6 flex items-center px-3">
                  <span className="text-[10px] text-gray-400">coinbase.com</span>
                </div>
                <div className="w-5 h-5 bg-[#0052FF] rounded-full" />
                <div className="w-5 h-5 bg-gray-200 rounded" />
                <div className="w-5 h-5 bg-gray-200 rounded-full" />
              </div>
              <div className="text-2xl font-black text-gray-900 mb-1">$33,683.80</div>
              <div className="text-xs font-bold text-[#05B169] mb-3">↗ $131.36 (1.38%) 1D ›</div>
              <PriceChart />
              {[
                { n:'Crypto',      v:'$14,186.12', up:false },
                { n:'Stocks',      v:'$8,133.98',  up:false },
                { n:'Derivatives', v:'$148.84',    up:true  },
                { n:'Predictions', v:'$42.69',     up:true  },
                { n:'Cash',        v:'$10,124.22', up:false },
              ].map(r => (
                <div key={r.n} className="flex justify-between items-center py-2 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-200" />
                    <span className="text-[12px] font-semibold text-gray-900">{r.n}</span>
                  </div>
                  <span className="text-[12px] font-semibold" style={{ color: r.up ? '#05B169' : '#111827' }}>
                    {r.up ? '↗ ' : ''}{r.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">Stocks and prediction markets not available in your jurisdiction.</p>
        </div>

        {/* Headline + form */}
        <div className="flex-1 order-1 lg:order-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-5">
            The future of<br />finance is here.
          </h1>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            Trade crypto and more on a platform you can trust.
          </p>
          <form
            onSubmit={e => { e.preventDefault(); navigate('/signup', { state: { email } }) }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}
          >
            <div style={{ flex: '1 1 220px', minWidth: 0, maxWidth: 320 }}>
              <Input type="email" placeholder="satoshi@nakamoto.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <Btn type="submit">Sign up</Btn>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ── Crypto Panel ──────────────────────────────────────────────── */
function CryptoPanel() {
  const [tab, setTab] = useState('Tradable')
  const navigate = useNavigate()
  const tabs = ['Tradable', 'Top gainers', 'New on Coinbase']
  const assets = tab === 'Top gainers'
    ? cryptoAssets.filter(a => a.change > 0).slice(0, 6)
    : cryptoAssets.slice(0, 6)

  return (
    <section className="bg-[#EBEBEB] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-5">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h2>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
          </p>
          <Btn dark onClick={() => navigate('/explore')}>See more assets</Btn>
        </div>
        <div className="w-full max-w-[520px] flex-shrink-0">
          <div className="bg-[#1c1c1e] rounded-[28px] p-6 shadow-2xl">
            <div className="flex gap-1 mb-2">
              {tabs.map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 9999,
                    fontSize: 13,
                    fontWeight: 600,
                    background: tab === t ? '#3a3a3c' : 'transparent',
                    color: tab === t ? '#fff' : '#9CA3AF',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            {assets.map(a => <CryptoCard key={a.id} asset={a} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Advanced Trader ───────────────────────────────────────────── */
function AdvancedTrader() {
  const navigate = useNavigate()
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full max-w-[520px] flex-shrink-0">
          <div className="bg-[#0f0f12] rounded-[28px] p-6">
            <div className="flex items-end gap-1 h-44 mb-4">
              {Array.from({ length: 26 }).map((_, i) => {
                const h = 28 + Math.abs(Math.sin(i * 0.8) * 55 + Math.cos(i * 0.5) * 20)
                const up = i % 3 !== 0
                return (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end gap-0.5">
                    <div className="w-px bg-gray-600" style={{ height: h * 0.25 }} />
                    <div className="w-full rounded-sm" style={{ height: h, backgroundColor: up ? '#05B169' : '#CF304A' }} />
                    <div className="w-px bg-gray-600" style={{ height: h * 0.15 }} />
                  </div>
                )
              })}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="text-white font-bold">BTC-USD</span>
              <span style={{ color: '#05B169' }}>↗ 2.34%</span>
              {['1H','1D','1W','1M'].map(t => <span key={t} className="cursor-pointer hover:text-white transition-colors">{t}</span>)}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-5">
            Powerful tools, designed for the advanced trader.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience.
          </p>
          <Btn dark onClick={() => navigate('/signup')}>Start trading</Btn>
        </div>
      </div>
    </section>
  )
}

/* ── Coinbase One ──────────────────────────────────────────────── */
function CoinbaseOne() {
  const navigate = useNavigate()
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 border-2 border-gray-200 rounded-full px-3 py-1.5 mb-6">
            <div className="w-3.5 h-3.5 rounded-full bg-[#0052FF]" />
            <span className="text-[11px] font-black tracking-widest text-gray-700 uppercase">Coinbase One</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-5">
            Zero trading fees, more rewards.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
          </p>
          <Btn dark onClick={() => navigate('/signup')}>Claim free trial</Btn>
        </div>
        <div className="w-full max-w-[340px] flex-shrink-0 order-1 lg:order-2">
          <div className="bg-gray-100 rounded-[32px] p-6">
            <div className="flex justify-between text-xs text-gray-400 mb-5 px-1"><span>3:57</span><span>▐▌🔋</span></div>
            <div className="bg-white rounded-2xl p-5 text-center mb-3 shadow-sm">
              <div className="w-14 h-14 bg-[#0052FF] rounded-full flex items-center justify-center mx-auto mb-3 relative">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="absolute -top-1 -right-1 text-sm">✦</span>
              </div>
              <div className="font-bold text-gray-900 text-sm">Trade successful!</div>
              <div className="text-xs text-gray-500">You got 0.012423 BTC</div>
            </div>
            <div className="bg-white rounded-2xl px-4 py-3 mb-3 flex items-center gap-2 shadow-sm">
              <span className="text-xs text-gray-400 line-through">$14.68</span>
              <div className="w-3 h-3 bg-[#0052FF] rounded-full flex-shrink-0" />
              <span className="text-xs font-semibold text-gray-900">No trading fees with Coinbase One</span>
            </div>
            <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
              <div className="flex-1">
                <div className="text-xs font-bold text-gray-900">Exclusive member benefits</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Coinbase One members get boosted staking rewards.</div>
                <span className="text-[11px] font-semibold cursor-pointer" style={{ color: '#0052FF' }}>Learn more</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#0052FF] flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Learn ─────────────────────────────────────────────────────── */
function LearnSection() {
  const navigate = useNavigate()
  const articles = [
    { id:1, title:'USDC: The digital dollar for the global crypto economy…', excerpt:'Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more…', bg:'#0A0B0D', icon:'💲' },
    { id:2, title:'Can crypto really replace your bank account?…', excerpt:'If you\'re a fan of crypto, you\'ve probably heard the phrase "be your own bank" — the idea being that…', bg:'#1E7AE3', icon:'🏛️' },
    { id:3, title:'When is the best time to invest in crypto?', excerpt:'Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause…', bg:'#B8C4C0', icon:'₿' },
  ]
  return (
    <section className="bg-[#EBEBEB] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 mb-12 lg:mb-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              New to crypto?<br />Learn some<br />crypto basics
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>
            <div><Btn dark onClick={() => navigate('/learn')}>Read More</Btn></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map(a => (
            <div key={a.id} className="bg-white rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-200" onClick={() => navigate('/learn')}>
              <div className="h-48 flex items-center justify-center text-5xl" style={{ background: a.bg }}>
                <span style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>{a.icon}</span>
              </div>
              <div className="p-5">
                <h3 className="text-[17px] font-black text-gray-900 leading-snug mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Take Control ──────────────────────────────────────────────── */
function TakeControl() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const coins = [
    { s:'⬛', bg:'#1a1a1a', sz:58, top:'6%',    left:'50%'   },
    { s:'→',  bg:'#F7B731', sz:66, top:'20%',   right:'0%'   },
    { s:'🔵', bg:'#0052FF', sz:70, top:'38%',   left:'34%'   },
    { s:'₿',  bg:'#F7931A', sz:70, top:'44%',   left:'55%'   },
    { s:'Ð',  bg:'#C3A63A', sz:62, bottom:'25%',left:'36%'   },
    { s:'•',  bg:'#0033AD', sz:70, bottom:'16%',right:'0%'   },
    { s:'Ξ',  bg:'#7F7FD5', sz:66, bottom:'2%', left:'48%'   },
  ]
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-4">
            Take control of your money
          </h2>
          <p className="text-lg text-gray-500 mb-8">Start your portfolio today and discover crypto</p>
          <form
            onSubmit={e => { e.preventDefault(); navigate('/signup', { state: { email } }) }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}
          >
            <div style={{ flex: '1 1 220px', minWidth: 0, maxWidth: 320 }}>
              <Input type="email" placeholder="satoshi@nakamoto.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <Btn type="submit">Sign up</Btn>
          </form>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center">
          <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]">
            {coins.map((c, i) => (
              <div key={i} className="absolute rounded-full flex items-center justify-center text-white font-black shadow-xl"
                style={{ width: c.sz, height: c.sz, backgroundColor: c.bg, top: c.top, left: c.left, right: c.right, bottom: c.bottom, transform: 'translate(-50%,-50%)', fontSize: c.sz * 0.4 }}>
                {c.s}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20 mt-16 pt-8 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center max-w-2xl mx-auto">DEX trading is offered by Coinbase Bermuda Technologies Ltd.</p>
        <p className="text-xs text-gray-400 text-center max-w-3xl mx-auto mt-2 leading-relaxed">
          Products and features may not be available in all regions. Information is for informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <CryptoPanel />
      <AdvancedTrader />
      <CoinbaseOne />
      <LearnSection />
      <TakeControl />
    </>
  )
}