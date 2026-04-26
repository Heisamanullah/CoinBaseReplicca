import { Link } from 'react-router-dom'
import CoinbaseLogo from '../common/CoinbaseLogo'

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-[13px] font-bold text-gray-900 mb-3">{title}</h4>
      <ul className="space-y-2.5">
        {items.map(item => (
          <li key={item}>
            <Link to="#" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors leading-snug">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <CoinbaseLogo size={40} />

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          <FooterCol title="Company" items={['About','Careers','Affiliates','Blog','Press','Security','Investors','Legal & privacy','Cookie policy']} />
          <FooterCol title="Learn" items={['Explore','Market statistics','Crypto basics','Tips & tutorials','Crypto glossary','Market updates','What is Bitcoin?','What is crypto?','What is a blockchain?','Taxes']} />
          <FooterCol title="Individuals" items={['Buy & sell','Earn free crypto','Base App','Coinbase One','Debit Card']} />
          <div>
            <FooterCol title="Businesses" items={['Asset Listings','Coinbase Business','Payments','Commerce','Token Manager']} />
            <div className="mt-8">
              <FooterCol title="Institutions" items={['Prime','Staking','Exchange','International Exchange','Derivatives Exchange','Verified Pools']} />
            </div>
          </div>
          <FooterCol title="Developers" items={['Developer Platform','Base','Server Wallets','Embedded Wallets','Trade API','OnchainKit','Data API','Node','AgentKit','Staking','Exchange API','Prime API']} />
          <FooterCol title="Support" items={['Help center','Contact us','Create account','ID verification','Account information','Payment methods','Account access','Supported crypto','Status']} />
          <div>
            <FooterCol title="Asset prices" items={['Bitcoin price','Ethereum price','Solana price','XRP price']} />
            <div className="mt-8">
              <FooterCol title="Stock prices" items={['NVIDIA price','Apple price','Microsoft price','Amazon price']} />
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-5 mt-12">
          {/* X / Twitter */}
          <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
            </svg>
          </a>
        </div>

    {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col gap-4">
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 text-center">
            ⚠️ <strong>Demo Project:</strong> This is a student project built for educational purposes only. It is not affiliated with, endorsed by, or connected to Coinbase Inc. Do not enter real personal information, passwords, or financial data.
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex flex-wrap items-center gap-2 text-[13px] text-gray-500">
              <span>© 2026 Crypto App | Student Project</span>
              <span>•</span>
              <Link to="#" className="hover:text-gray-900 transition-colors">Privacy</Link>
              <span>•</span>
              <Link to="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</Link>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Global • English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
