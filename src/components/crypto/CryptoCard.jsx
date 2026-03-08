// CryptoCard - used in the dark crypto panel on the homepage
export default function CryptoCard({ asset }) {
    const isUp   = asset.change > 0
    const isFlat = asset.change === 0
  
    return (
      <div className="flex items-center py-3.5 border-t border-white/10 gap-3">
        {/* Icon */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: asset.color }}
        >
          {asset.symbol}
        </div>
  
        {/* Name */}
        <span className="text-white font-semibold text-[16px] flex-1">{asset.name}</span>
  
        {/* Price + change */}
        <div className="text-right">
          <div className="text-white text-sm font-medium">
            GHS {asset.price.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={`text-xs font-bold ${isFlat ? 'text-white/40' : isUp ? 'text-[#05B169]' : 'text-[#FF5C5C]'}`}>
            {isFlat ? '0.00%' : isUp ? `↗ ${asset.change.toFixed(2)}%` : `↙ ${Math.abs(asset.change).toFixed(2)}%`}
          </div>
        </div>
      </div>
    )
  }
  