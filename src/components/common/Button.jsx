export default function Button({ children, variant = 'primary', size = 'md', onClick, className = '', type = 'button', disabled = false }) {

    const bgColors = {
      primary: '#0052FF',
      dark:    '#111827',
      outline: 'transparent',
      white:   '#ffffff',
      ghost:   'transparent',
      pillDark:'#000000',
    }
    const textColors = {
      primary: '#ffffff',
      dark:    '#ffffff',
      outline: '#111827',
      white:   '#111827',
      ghost:   '#4B5563',
      pillDark:'#ffffff',
    }
    const borders = {
      primary: 'none',
      dark:    'none',
      outline: '2px solid #E5E7EB',
      white:   'none',
      ghost:   'none',
      pillDark:'1px solid #000',
    }
    const paddings = { sm: '8px 16px', md: '10px 20px', lg: '12px 28px' }
    const fontSizes = { sm: '14px', md: '15px', lg: '15px' }
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full whitespace-nowrap cursor-pointer transition-opacity duration-150 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        style={{
          backgroundColor: bgColors[variant],
          color: textColors[variant],
          border: borders[variant],
          padding: paddings[size],
          fontSize: fontSizes[size],
          fontFamily: 'inherit',
          fontWeight: 700,
          lineHeight: 1.4,
          flexShrink: 0,
        }}
        onMouseEnter={e => { if (!disabled) e.currentTarget.style.opacity = '0.85' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        {children}
      </button>
    )
  }