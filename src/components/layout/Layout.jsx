import Navbar from './Navbar'
import Footer from './Footer'
import DemoBanner from '../common/DemoBanner'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <DemoBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}