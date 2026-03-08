// Coinbase "C" logo using a custom sans-serif letterform inside a circle
const WRAPPER_CLASSES = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }
  
  const TEXT_CLASSES = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }
  
  function getSizeKey(size) {
    if (typeof size === 'number') {
      if (size <= 24) return 'sm'
      if (size <= 32) return 'md'
      return 'lg'
    }
    return ['sm', 'md', 'lg'].includes(size) ? size : 'md'
  }
  
  export default function CoinbaseLogo({ size = 'md' }) {
    const key = getSizeKey(size)
    const wrapperSize = WRAPPER_CLASSES[key]
    const textSize = TEXT_CLASSES[key]
  
    return (
      <div className={`flex items-center justify-center rounded-full bg-white ${wrapperSize}`}>
        <span className={`font-sans font-black tracking-tight text-[#0052FF] leading-none ${textSize}`}>
          C
        </span>
      </div>
    )
  }
  