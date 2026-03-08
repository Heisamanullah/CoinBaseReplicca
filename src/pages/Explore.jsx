import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cryptoAssets } from '../data/cryptoData'
import CryptoRow from '../components/crypto/CryptoRow'
import Sparkline from '../components/crypto/Sparkline'
import Button from '../components/common/Button'

function StatCard({ title, value, change, isUp, sparkData, sparkColor }) {
  return (
    <div className="bg-gray-100 rounded-2xl p-4 min-w-[175px] flex-1">
      <div className="text-xs text-gray-500 mb-1">{title}</div>
      <div className="text-[15px] font-bold text-gray-900 mb-1">{value}</div>
      <div className={`text-xs font-bold mb-2 ${isUp ? 'text-[#05B169]' : 'text-[#CF304A]'}`}>
        {isUp ? '↗' : '↙'} {change}
      </div>
      <Sparkline data={sparkData} color={sparkColor} width={140} height={32} />
    </div>
  )
}

export default function Explore() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const filtered = cryptoAssets.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.ticker.toLowerCase().includes(search.toLowerCase())
  )

  const stats = [
    { title:'Total market cap', value:'GHS 25.21T', change:'1.91%', isUp:false, sparkColor:'#CF304A', sparkData:[30,28,25,22,24,20,18,16,14,12] },
    { title:'Trade volume',     value:'GHS 2.00T',  change:'29.34%',isUp:true,  sparkColor:'#05B169', sparkData:[5,6,7,7,8,9,11,14,16,18]       },
    { title:'Buy-sell ratio',   value:'0.82',        change:'9.38%', isUp:true,  sparkColor:'#05B169', sparkData:[10,10,10,10,10,11,12,14,16,18]  },
    { title:'BTC dominance',    value:'60.62%',      change:'0.65%', isUp:false, sparkColor:'#CF304A', sparkData:[22,20,22,24,20,22,18,22,20,18]  },
  ]

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex gap-8 items-start">

        {/* ── Main content ─────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Page header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900">Explore crypto</h1>
              <p className="text-sm text-gray-500 mt-1">Coinbase 50 Index is down ↘ 3.95% (24hrs)</p>
            </div>
            <div className="sm:ml-auto flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5 w-full sm:w-64">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search for an asset"
                className="bg-transparent text-sm outline-none flex-1 placeholder-gray-400 text-gray-900"
              />
            </div>
          </div>

          {/* Market stats */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-black text-gray-900">Market stats</h2>
              <div className="flex gap-1">
                {['‹','›'].map(a => (
                  <button key={a} className="w-7 h-7 rounded-full border border-gray-200 bg-white text-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              The overall crypto market is growing this week. As of today, the total crypto market capitalization is 25.21 trillion, representing a 3.58% increase from last week.
            </p>
            <span className="text-sm text-[#0052FF] font-semibold cursor-pointer hover:underline">Read more</span>
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {stats.map(s => <StatCard key={s.title} {...s} />)}
            </div>
          </div>

          {/* Table */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h2 className="text-xl font-black text-gray-900">
                Crypto market prices{' '}
                <span className="text-sm font-normal text-gray-400">18,618 assets</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              The overall crypto market is growing this week.
            </p>
            <span className="text-sm text-[#0052FF] font-semibold cursor-pointer hover:underline">Read more</span>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              {['All assets ▾','1D ▾','GHS ▾','10 rows ▾'].map(f => (
                <button key={f} className="flex items-center gap-1 px-3.5 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 bg-white transition-colors">
                  {f}
                </button>
              ))}
            </div>

            {/* Scrollable table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 pl-3 w-8" />
                    <th className="py-3 px-4 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Asset ⇅</th>
                    <th className="py-3 px-4 text-right text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Price ⇅</th>
                    <th className="py-3 px-4 text-right text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Chart</th>
                    <th className="py-3 px-4 text-right text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Change ⇅</th>
                    <th className="py-3 px-4 text-right text-[11px] font-semibold text-[#0052FF] uppercase tracking-wide">Mkt cap ⇅</th>
                    <th className="py-3 px-4 text-right text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Volume ⇅</th>
                    <th className="py-3 px-4 text-right text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(a => <CryptoRow key={a.id} asset={a} />)}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col items-center gap-2 mt-8">
              <div className="flex items-center gap-1">
                {[1,2,3].map(p => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
                      page === p ? 'bg-[#0052FF] text-white' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <span className="text-gray-400 px-2">…</span>
                <button className="px-3 h-9 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-100 transition-colors">1,862</button>
                <button className="w-9 h-9 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">›</button>
              </div>
              <p className="text-xs text-gray-400">1–10 of 18,618 assets</p>
            </div>
          </div>

          {/* Blue CTA banner */}
          <div className="bg-[#0052FF] rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-5">
                Create a Coinbase account to trade crypto. It's quick, easy, and secure.
              </h3>
              <button
                onClick={() => navigate('/signup')}
                className="flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                Start Trading →
              </button>
            </div>
            {/* Mini chart */}
            <div className="hidden md:flex items-end gap-1 h-20 flex-shrink-0">
              {[30,50,20,60,40,70,35,55,45,65].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <div className="w-0.5 bg-white/30" style={{ height: h * 0.25 }} />
                  <div className="w-3.5 rounded-sm" style={{ height: h, backgroundColor: i%2===0 ? '#CF304A' : '#05B169' }} />
                  <div className="w-0.5 bg-white/30" style={{ height: h * 0.15 }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar ───────────────────────────────────────────────── */}
        <aside className="hidden xl:block w-[275px] flex-shrink-0 space-y-6">
          {/* Get started */}
          <div className="bg-[#0052FF] rounded-2xl p-5 flex items-center justify-between">
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Get started</h4>
              <p className="text-white/80 text-xs mb-3">Create your account today</p>
              <Button variant="white" size="sm" onClick={() => navigate('/signup')}>Sign up</Button>
            </div>
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl flex-shrink-0">✦</div>
          </div>

          {/* Top movers */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-900 text-sm">Top movers</h4>
              <div className="flex gap-1">
                {['‹','›'].map(a => <button key={a} className="w-6 h-6 rounded-full border border-gray-200 bg-white text-xs flex items-center justify-center hover:bg-gray-50 transition-colors">{a}</button>)}
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-3">24hr change</p>
            <div className="flex gap-2">
              {[{t:'FAI',p:'↗ 51.37%'},{t:'SYND',p:'↗ 35.16%'}].map(m => (
                <div key={m.t} className="bg-gray-100 rounded-2xl p-3 flex-1">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mb-2" />
                  <div className="text-xs font-bold text-gray-400">{m.t}</div>
                  <div className="text-sm font-black text-[#05B169]">{m.p}</div>
                  <div className="text-xs text-gray-400 mt-1">GHS 0.05</div>
                </div>
              ))}
            </div>
          </div>

          {/* New on Coinbase */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-900 text-sm">New on Coinbase</h4>
              <div className="flex gap-1">
                {['‹','›'].map(a => <button key={a} className="w-6 h-6 rounded-full border border-gray-200 bg-white text-xs flex items-center justify-center hover:bg-gray-50 transition-colors">{a}</button>)}
              </div>
            </div>
            <div className="flex gap-2">
              {[
                { name:'Hyperliquid', ticker:'HYPE',    added:'Added Feb 5'  },
                { name:'Jupiter',     ticker:'JUPITER',  added:'Added Dec 9'  },
              ].map(c => (
                <div key={c.name} className="bg-gray-100 rounded-2xl p-3 flex-1 cursor-pointer hover:bg-gray-200 transition-colors">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mb-2" />
                  <div className="text-[10px] font-bold text-gray-400 uppercase">{c.ticker}</div>
                  <div className="text-sm font-bold text-gray-900 leading-tight">{c.name}</div>
                  <div className="text-[11px] text-gray-400 mt-1">{c.added}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
