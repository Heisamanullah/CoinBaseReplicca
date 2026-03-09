import { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CoinbaseLogo from '../common/CoinbaseLogo'
import Button from '../common/Button'
import { navMenuData, languages } from '../../data/cryptoData'

/* ── Dropdown menu item ────────────────────────────────────────────── */
function MenuItem({ icon, name, desc, path = '/' }) {
  return (
    <Link to={path} className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group">
      <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center text-sm flex-shrink-0 mt-0.5 transition-colors">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-gray-900 leading-snug">{name}</div>
        <div className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</div>
      </div>
    </Link>
  )
}

/* ── Promo card ────────────────────────────────────────────────────── */
function PromoCard({ promo }) {
  if (!promo) return null
  return (
    <div className="w-52 flex-shrink-0 rounded-2xl p-5 flex flex-col" style={{ backgroundColor: promo.bg }}>
      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl mb-4 flex-shrink-0">
        {promo.icon}
      </div>
      <p className={`text-sm font-bold leading-snug mb-1 ${promo.light ? 'text-white' : 'text-gray-900'}`}>
        {promo.title}
      </p>
      {promo.desc && (
        <p className={`text-xs leading-snug mb-3 ${promo.light ? 'text-white/80' : 'text-gray-500'}`}>
          {promo.desc}
        </p>
      )}
      <span className={`text-xs font-semibold underline cursor-pointer mt-auto ${promo.light ? 'text-white' : 'text-gray-900'}`}>
        {promo.link}
      </span>
    </div>
  )
}

/* ── Mega-menu dropdown panel ──────────────────────────────────────── */
function DropdownPanel({ menu }) {
  if (!menu) return null

  if (menu.type === 'simple') {
    return (
      <div className="flex gap-2">
        <div className="min-w-[220px]">
          {menu.items.map(item => <MenuItem key={item.name} {...item} />)}
        </div>
        {menu.promo && <PromoCard promo={menu.promo} />}
      </div>
    )
  }

  // two-col
  return (
    <div className="flex gap-2">
      <div className="min-w-[220px]">
        {menu.col1Title && (
          <div className="px-3 pb-1 text-xs font-bold text-gray-900">{menu.col1Title}</div>
        )}
        {menu.col1.map(item => <MenuItem key={item.name} {...item} />)}
      </div>
      <div className="min-w-[220px]">
        {menu.col2Title && (
          <div className="px-3 pb-1 text-xs font-bold text-gray-900">{menu.col2Title}</div>
        )}
        {menu.col2.map(item => <MenuItem key={item.name} {...item} />)}
      </div>
      {menu.promo && <PromoCard promo={menu.promo} />}
    </div>
  )
}

/* ── Search overlay ────────────────────────────────────────────────── */
function SearchOverlay({ onClose }) {
  const [q, setQ] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const suggestions = ['Bitcoin', 'Ethereum', 'Solana', 'XRP', 'USDC', 'Dogecoin', 'BNB', 'Cardano']
    .filter(s => !q || s.toLowerCase().includes(q.toLowerCase()))

  return (
    <div
      className="fixed inset-0 z-[300] animate-fade-in"
      style={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div className="max-w-2xl mx-auto pt-20 px-4" onClick={e => e.stopPropagation()}>
        {/* Search input */}
        <div className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 shadow-2xl">
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search assets, products and more"
            className="flex-1 text-base outline-none bg-transparent text-gray-900 placeholder-gray-400"
          />
          <button onClick={onClose} className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">
            Cancel
          </button>
        </div>
        {/* Results */}
        <div className="mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {suggestions.length === 0
            ? <div className="px-5 py-4 text-sm text-gray-400">No results found</div>
            : suggestions.map(s => (
              <div key={s} className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors" onClick={onClose}>
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <span className="text-sm font-medium text-gray-700">{s}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

/* ── Language modal ────────────────────────────────────────────────── */
function LangModal({ onClose }) {
  const [selected, setSelected] = useState('en')

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 animate-fade-in"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl animate-slide-up" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-black text-gray-900 mb-1">Language & Region</h2>
        <p className="text-sm text-gray-500 mb-5">Select your preferred language</p>
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto mb-6">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className={`flex items-center gap-2.5 p-3 rounded-xl border-2 text-left transition-all ${
                selected === lang.code
                  ? 'border-[#0052FF] bg-blue-50'
                  : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div>
                <div className="text-sm font-semibold text-gray-900">{lang.label}</div>
                <div className="text-xs text-gray-400">{lang.region}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 rounded-full border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="flex-1 py-3 rounded-full bg-[#0052FF] text-white text-sm font-semibold hover:bg-[#0040CC] transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Main Navbar ───────────────────────────────────────────────────── */
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExp,  setMobileExp]  = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  const [showLang,   setShowLang]   = useState(false)
  const navRef   = useRef(null)
  const navigate = useNavigate()
  const labels   = Object.keys(navMenuData)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = e => {
      if (navRef.current && !navRef.current.contains(e.target)) setActiveMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeMenu = useCallback(() => setActiveMenu(null), [])

  return (
    <>
      {/* Blur backdrop behind open dropdown */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-30 animate-fade-in"
          style={{ top: 60, backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', backgroundColor: 'rgba(200,200,200,0.15)' }}
          onMouseEnter={closeMenu}
        />
      )}

      <nav
        ref={navRef}
        className="sticky top-0 z-40 h-[60px] bg-white/95 border-b border-gray-100"
        style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div className="h-full flex items-center gap-1 max-w-[1280px] mx-auto px-4 lg:px-8">

          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="mr-3 flex-shrink-0">
            <CoinbaseLogo size={32} />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {labels.map(label => (
              <div key={label} className="relative">
                <button
                  onMouseEnter={() => setActiveMenu(label)}
                  className={`px-2 py-2 rounded-lg text-[15px] font-black tracking-tight transition-colors ${
                    activeMenu === label ? 'bg-gray-100 text-black' : 'text-gray-900 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  {label}
                </button>
                {activeMenu === label && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 z-50 animate-drop-in"
                    style={{ minWidth: 'max-content' }}
                    onMouseEnter={() => setActiveMenu(label)}
                    onMouseLeave={closeMenu}
                  >
                    <DropdownPanel menu={navMenuData[label]} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search button */}
            <button
              onClick={() => setShowSearch(true)}
              className="hidden lg:flex w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 items-center justify-center transition-colors"
              aria-label="Search"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Globe / language */}
            <button
              onClick={() => setShowLang(true)}
              className="hidden lg:flex w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 items-center justify-center transition-colors"
              aria-label="Language"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>

            <Button variant="outline" size="sm" onClick={() => navigate('/signin')} className="hidden lg:flex">
              Sign in
            </Button>
            <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>
              Sign up
            </Button>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 ml-1"
              aria-label="Open menu"
            >
              <span
                className="block h-0.5 bg-gray-900 transition-transform duration-200 origin-center"
                style={{ transform: mobileOpen ? 'rotate(45deg) translate(2px, 3px)' : '' }}
              />
              <span
                className="block h-0.5 bg-gray-900 transition-opacity duration-200"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="block h-0.5 bg-gray-900 transition-transform duration-200 origin-center"
                style={{ transform: mobileOpen ? 'rotate(-45deg) translate(2px, -3px)' : '' }}
              />
            </button>
          </div>
        </div>

        {/* Mobile full-screen menu */}
        {mobileOpen && (
          <div className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto border-t border-gray-100 animate-slide-down">
            {labels.map(label => (
              <div key={label}>
                <button
                  onClick={() => setMobileExp(mobileExp === label ? null : label)}
                  className="w-full flex justify-between items-center px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-50 hover:bg-gray-50 transition-colors text-left"
                >
                  {label}
                  <span
                    className="text-gray-400 inline-block transition-transform duration-200"
                    style={{ transform: mobileExp === label ? 'rotate(180deg)' : '' }}
                  >
                    ▾
                  </span>
                </button>
                {mobileExp === label && (
                  <div className="bg-gray-50 px-4 py-3 flex flex-col gap-1">
                    {(navMenuData[label].items || [
                      ...(navMenuData[label].col1 || []),
                      ...(navMenuData[label].col2 || []),
                    ]).map(item => (
                      <Link
                        key={item.name}
                        to={item.path || '/'}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="p-5 flex gap-3">
              <Button variant="outline" size="md" className="flex-1" onClick={() => { navigate('/signin'); setMobileOpen(false) }}>
                Sign in
              </Button>
              <Button variant="primary" size="md" className="flex-1" onClick={() => { navigate('/signup'); setMobileOpen(false) }}>
                Sign up
              </Button>
            </div>
          </div>
        )}
      </nav>

      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}
      {showLang   && <LangModal     onClose={() => setShowLang(false)} />}
    </>
  )
}