import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sparkline from './Sparkline'
import Button from '../common/Button'

// CryptoRow - one row in the Explore market table
export default function CryptoRow({ asset }) {
  const [starred, setStarred] = useState(false)
  const navigate = useNavigate()

  const isUp   = asset.change > 0
  const isFlat = asset.change === 0
  const changeClass = isFlat ? 'text-gray-400' : isUp ? 'text-[#05B169]' : 'text-[#CF304A]'
  const sparkColor  = isFlat ? '#9CA3AF' : isUp ? '#05B169' : asset.color

  return (
    <tr
      className="border-b border-gray-100 hover:bg-gray-50/60 transition-colors cursor-pointer"
      onClick={() => navigate(`/explore/${asset.id}`)}
    >
      {/* Star */}
      <td className="py-4 pl-3 w-8" onClick={e => { e.stopPropagation(); setStarred(!starred) }}>
        <span className={`text-lg transition-colors ${starred ? 'text-amber-400' : 'text-gray-200 hover:text-gray-400'}`}>
          {starred ? '★' : '☆'}
        </span>
      </td>

      {/* Asset info */}
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: asset.color }}
          >
            {asset.symbol}
          </div>
          <div>
            <div className="font-bold text-gray-900 text-[15px] leading-tight">{asset.name}</div>
            <div className={`text-xs leading-tight mt-0.5 ${asset.apy ? 'text-[#0052FF] font-semibold' : 'text-gray-400'}`}>
              {asset.ticker}{asset.apy ? ` · Earns ${asset.apy}% APY` : ''}
            </div>
          </div>
        </div>
      </td>

      {/* Price */}
      <td className="py-4 px-4 text-right font-semibold text-[15px] text-gray-900 whitespace-nowrap">
        GHS {asset.price.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>

      {/* Sparkline */}
      <td className="py-4 px-4 text-right">
        <div className="flex justify-end">
          <Sparkline data={asset.sparkline} color={sparkColor} />
        </div>
      </td>

      {/* Change */}
      <td className={`py-4 px-4 text-right font-semibold text-sm whitespace-nowrap ${changeClass}`}>
        {isFlat ? '0.00%' : isUp ? `↗ ${asset.change.toFixed(2)}%` : `↙ ${Math.abs(asset.change).toFixed(2)}%`}
      </td>

      {/* Market cap */}
      <td className="py-4 px-4 text-right text-sm text-gray-500 whitespace-nowrap">GHS {asset.marketCap}</td>

      {/* Volume */}
      <td className="py-4 px-4 text-right text-sm text-gray-500 whitespace-nowrap">GHS {asset.volume}</td>

      {/* Action */}
      <td className="py-4 px-4 text-right" onClick={e => e.stopPropagation()}>
        {asset.tradable
          ? <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>Trade</Button>
          : <span />
        }
      </td>
    </tr>
  )
}
