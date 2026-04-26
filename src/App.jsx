import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/common/ProtectedRoute';

import Home        from './pages/Home';
import Explore     from './pages/Explore';
import AssetDetail from './pages/AssetDetail';
import Learn       from './pages/Learn';
import SignIn      from './pages/SignIn';
import SignUp      from './pages/SignUp';
import Profile     from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/"            element={<Home />}        />
            <Route path="/explore"     element={<Explore />}     />
            <Route path="/explore/:id" element={<AssetDetail />} />
            <Route path="/learn"       element={<Learn />}       />
            <Route path="/signin"      element={<SignIn />}       />
            <Route path="/signup"      element={<SignUp />}       />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}