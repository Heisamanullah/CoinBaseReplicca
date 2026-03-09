export const cryptoAssets = [
    { id:'bitcoin',  name:'Bitcoin',  ticker:'BTC',  price:761529.76, change:-3.00, marketCap:'15.3T',  volume:'500.7B', color:'#F7931A', symbol:'₿',  tradable:true,  sparkline:[45,42,48,44,40,36,32,28,24,20] },
    { id:'ethereum', name:'Ethereum', ticker:'ETH',  price:22258.36,  change:-3.15, marketCap:'2.7T',   volume:'221.3B', color:'#627EEA', symbol:'Ξ',  tradable:true,  sparkline:[30,28,32,26,24,22,20,18,15,12] },
    { id:'tether',   name:'Tether',   ticker:'USDT', price:10.80,     change:0.00,  marketCap:'2.0T',   volume:'935.2B', color:'#26A17B', symbol:'₮',  tradable:true,  sparkline:[15,15,14,15,15,16,15,14,15,15] },
    { id:'bnb',      name:'BNB',      ticker:'BNB',  price:6912.65,   change:-3.63, marketCap:'944.1B', volume:'16.1B',  color:'#F3BA2F', symbol:'B',  tradable:true,  sparkline:[20,18,22,24,20,18,16,14,16,18] },
    { id:'xrp',      name:'XRP',      ticker:'XRP',  price:15.17,     change:-2.95, marketCap:'927.7B', volume:'26.0B',  color:'#1B1B1B', symbol:'X',  tradable:true,  sparkline:[14,16,18,22,20,22,24,20,22,24] },
    { id:'usdc',     name:'USDC',     ticker:'USDC', price:10.80,     change:0.00,  marketCap:'833.2B', volume:'143.8B', color:'#2775CA', symbol:'$',  tradable:true,  apy:'3.35', sparkline:[15,15,14,15,15,15,14,15,15,15] },
    { id:'solana',   name:'Solana',   ticker:'SOL',  price:945.62,    change:-5.38, marketCap:'540.1B', volume:'43.5B',  color:'#9945FF', symbol:'S',  tradable:true,  sparkline:[10,12,16,20,18,20,22,18,22,24] },
    { id:'tron',     name:'TRON',     ticker:'TRX',  price:3.09,      change:0.66,  marketCap:'293.2B', volume:'6.0B',   color:'#EF0027', symbol:'T',  tradable:false, sparkline:[22,20,18,14,12,10,8,6,5,4] },
    { id:'dogecoin', name:'Dogecoin', ticker:'DOGE', price:1.01,      change:-2.76, marketCap:'154.9B', volume:'11.8B',  color:'#C3A63A', symbol:'D',  tradable:true,  sparkline:[16,14,18,22,20,22,24,22,22,24] },
    { id:'cardano',  name:'Cardano',  ticker:'ADA',  price:2.89,      change:-3.32, marketCap:'104.6B', volume:'5.2B',   color:'#0033AD', symbol:'A',  tradable:true,  sparkline:[12,14,18,16,20,18,22,20,22,24] },
  ]
  
  export const languages = [
    { code:'en', label:'English',   flag:'🇺🇸', region:'United States' },
    { code:'es', label:'Español',   flag:'🇪🇸', region:'España'        },
    { code:'fr', label:'Français',  flag:'🇫🇷', region:'France'        },
    { code:'de', label:'Deutsch',   flag:'🇩🇪', region:'Deutschland'   },
    { code:'pt', label:'Português', flag:'🇧🇷', region:'Brasil'        },
    { code:'ja', label:'日本語',     flag:'🇯🇵', region:'Japan'         },
    { code:'ko', label:'한국어',     flag:'🇰🇷', region:'Korea'         },
    { code:'zh', label:'中文',       flag:'🇨🇳', region:'China'         },
  ]
  
  export const navMenuData = {
    Cryptocurrencies: {
      type: 'simple',
      items: [
        { icon:'₿', name:'Bitcoin',  desc:'The original cryptocurrency',             path:'/explore/bitcoin'  },
        { icon:'Ξ', name:'Ethereum', desc:'Smart contracts platform',                path:'/explore/ethereum' },
        { icon:'S', name:'Solana',   desc:'Fast, low-cost transactions',             path:'/explore/solana'   },
        { icon:'X', name:'XRP',      desc:'Global payment network',                  path:'/explore/xrp'      },
        { icon:'$', name:'USDC',     desc:'USD-pegged · Earns 3.35% APY',            path:'/explore/usdc'     },
      ],
      promo: null,
    },
    Individuals: {
      type: 'two-col',
      col1: [
        { icon:'🔵', name:'Buy and sell',   desc:'Buy, sell, and use crypto',                     path:'/' },
        { icon:'⬛', name:'Base App',       desc:'Post, earn, trade, and chat — all in one place', path:'/' },
        { icon:'🎯', name:'Coinbase One',   desc:'Zero trading fees and more',                    path:'/' },
        { icon:'💎', name:'Private Client', desc:'For trusts, family offices, UHNWIs',            path:'/' },
        { icon:'🔗', name:'Onchain',        desc:'Dive into onchain apps',                        path:'/' },
        { icon:'📚', name:'Learn',          desc:'Crypto tips and guides',                        path:'/learn' },
      ],
      col2: [
        { icon:'📊', name:'Advanced',        desc:'Professional-grade trading tools',        path:'/' },
        { icon:'%',  name:'Earn',            desc:'Stake your crypto and earn rewards',      path:'/' },
        { icon:'💼', name:'Coinbase Wealth', desc:'Institutional-grade services for UHNW',   path:'/' },
        { icon:'💳', name:'Credit Card',     desc:'Earn up to 4% bitcoin back',              path:'/' },
        { icon:'🏧', name:'Debit Card',      desc:'Spend crypto, get crypto back',           path:'/' },
      ],
      promo: { bg:'#0052FF', icon:'🚀', title:'System Update 2025', desc:'The next chapter of Coinbase.', link:'Learn more', light:true },
    },
    Businesses: {
      type: 'two-col',
      col1: [
        { icon:'🏢', name:'Business',       desc:'Crypto trading and payments for SMBs',   path:'/' },
        { icon:'⚙️', name:'Asset Listings', desc:'List your asset on Coinbase',             path:'/' },
      ],
      col2: [
        { icon:'💸', name:'Payments',      desc:'The stablecoin payments stack',             path:'/' },
        { icon:'🔄', name:'Token Manager', desc:'Token distributions, vesting, and lockups', path:'/' },
      ],
      promo: { bg:'#0052FF', icon:'🛒', title:'Commerce Payments Protocol', desc:'A new standard for onchain payments.', link:'Go to Payments', light:true },
    },
    Institutions: {
      type: 'two-col',
      col1Title: 'Prime',
      col1: [
        { icon:'⏱️', name:'Trading & Financing', desc:'Professional prime brokerage',     path:'/' },
        { icon:'🔒', name:'Custody',              desc:'Securely store digital assets',   path:'/' },
        { icon:'%',  name:'Staking',              desc:'Staking across our products',     path:'/' },
        { icon:'⬛', name:'Onchain Wallet',        desc:'Institutional-grade wallet',      path:'/' },
      ],
      col2Title: 'Markets',
      col2: [
        { icon:'⚡', name:'Exchange',               desc:'Spot markets for HFT',          path:'/' },
        { icon:'🌍', name:'International Exchange',  desc:'Perpetual futures markets',     path:'/' },
        { icon:'📈', name:'Derivatives Exchange',    desc:'Accessible futures market',     path:'/' },
        { icon:'⚙️', name:'Verified Pools',          desc:'Transparent liquidity pools',  path:'/' },
      ],
      promo: { bg:'#0052FF', icon:'🌐', title:'Our clients', desc:'Trusted by institutions and governments.', link:'Learn more', light:true },
    },
    Developers: {
      type: 'two-col',
      col1Title: 'Coinbase Developer Platform',
      col1: [
        { icon:'💳', name:'Payments',    desc:'Fast stablecoin payments',              path:'/' },
        { icon:'📊', name:'Trading',     desc:'Launch crypto trading for your users',  path:'/' },
        { icon:'👜', name:'Wallets',     desc:'Deploy scalable wallets',               path:'/' },
        { icon:'💵', name:'Stablecoins', desc:'Access USDC and custom stablecoins',    path:'/' },
      ],
      col2Title: 'Solutions',
      col2: [
        { icon:'🏦', name:'Banks & Brokerages', desc:'Regulated offerings for banking clients', path:'/' },
        { icon:'💸', name:'Payment Firms',      desc:'Near-instant global payment rails',       path:'/' },
        { icon:'🚀', name:'Startups',           desc:"Launch with the world's crypto leader",   path:'/' },
      ],
      promo: { bg:'#f8f9fa', icon:'⚡', title:'World class crypto infrastructure.', desc:"Coinbase's complete crypto-as-a-service platform.", link:'Learn more', light:false },
    },
    Company: {
      type: 'two-col',
      col1: [
        { icon:'ℹ️', name:'About',      desc:'Powering the crypto economy',       path:'/' },
        { icon:'👥', name:'Affiliates', desc:'Help introduce the world to crypto', path:'/' },
        { icon:'📰', name:'Blog',       desc:'Read the latest from Coinbase',      path:'/' },
      ],
      col2: [
        { icon:'💼', name:'Careers',  desc:'Work with us',                  path:'/' },
        { icon:'💬', name:'Support',  desc:'Find answers to your questions', path:'/' },
        { icon:'🛡️', name:'Security', desc:'The most trusted & secure',     path:'/' },
      ],
      promo: { bg:'#0052FF', icon:'📘', title:'Learn all about Coinbase', desc:"We're building the open financial system.", link:'Create your account', light:true },
    },
  }
  