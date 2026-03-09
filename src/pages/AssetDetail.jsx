import { useParams, useNavigate } from 'react-router-dom'
import { cryptoAssets } from '../data/cryptoData'
import Button from '../components/common/Button'
import Sparkline from '../components/crypto/Sparkline'

export default function AssetDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const asset = cryptoAssets.find(a => a.id === id) || cryptoAssets[0]

  const isUp   = asset.change > 0
  const isFlat = asset.change === 0
  const changeColor = isFlat ? 'text-gray-400' : isUp ? 'text-[#05B169]' : 'text-[#CF304A]'

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <button onClick={() => navigate('/explore')} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
        ← Back to Explore
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: chart + info */}
        <div className="flex-1">
          {/* Asset header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0" style={{ backgroundColor: asset.color }}>
              {asset.symbol}
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900">{asset.name}</h1>
              <span className="text-sm text-gray-400 font-semibold">{asset.ticker}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="text-4xl font-black text-gray-900 mb-1">
              GHS {asset.price.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className={`text-lg font-bold ${changeColor}`}>
              {isFlat ? '0.00%' : isUp ? `↗ ${asset.change.toFixed(2)}%` : `↙ ${Math.abs(asset.change).toFixed(2)}%`} (1D)
            </div>
          </div>

          {/* Sparkline chart */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <Sparkline
              data={asset.sparkline}
              color={isFlat ? '#9CA3AF' : isUp ? '#05B169' : asset.color}
              width={600}
              height={120}
            />
            <div className="flex gap-2 mt-4">
              {['1H','1D','1W','1M','1Y','All'].map(t => (
                <button key={t} className="px-3 py-1 rounded-full text-xs font-semibold text-gray-500 hover:bg-gray-200 transition-colors">{t}</button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label:'Market cap',   value:`GHS ${asset.marketCap}` },
              { label:'Volume (24h)', value:`GHS ${asset.volume}`    },
              { label:'24h Change',   value:`${asset.change.toFixed(2)}%` },
              { label:'Ticker',       value:asset.ticker             },
            ].map(stat => (
              <div key={stat.label} className="bg-gray-50 rounded-2xl p-4">
                <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                <div className="text-[15px] font-bold text-gray-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: trade card */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 sticky top-20">
            <h3 className="font-black text-gray-900 text-lg mb-5">Buy {asset.name}</h3>
            <div className="bg-gray-50 rounded-2xl p-4 mb-4">
              <div className="text-xs text-gray-500 mb-1">Current price</div>
              <div className="text-xl font-black text-gray-900">
                GHS {asset.price.toLocaleString('en-GH', { minimumFractionDigits: 2 })}
              </div>
              <div className={`text-sm font-bold ${changeColor}`}>
                {isFlat ? '0.00%' : isUp ? `↗ ${asset.change.toFixed(2)}%` : `↙ ${Math.abs(asset.change).toFixed(2)}%`} today
              </div>
            </div>
            <Button variant="primary" size="lg" className="w-full mb-3" onClick={() => navigate('/signup')}>
              Buy {asset.ticker}
            </Button>
            <Button variant="outline" size="lg" className="w-full" onClick={() => navigate('/signup')}>
              Sell {asset.ticker}
            </Button>
            <p className="text-xs text-gray-400 mt-4 text-center">
              You need an account to trade. Create one in minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
