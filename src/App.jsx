import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home        from './pages/Home'
import Explore     from './pages/Explore'
import AssetDetail from './pages/AssetDetail'
import Learn       from './pages/Learn'
import SignIn      from './pages/SignIn'
import SignUp      from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"            element={<Home />}        />
          <Route path="/explore"     element={<Explore />}     />
          <Route path="/explore/:id" element={<AssetDetail />} />
          <Route path="/learn"       element={<Learn />}       />
          <Route path="/signin"      element={<SignIn />}       />
          <Route path="/signup"      element={<SignUp />}       />
          <Route path="*"            element={<Home />}        />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
