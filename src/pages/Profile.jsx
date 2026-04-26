import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CoinbaseLogo from '../components/common/CoinbaseLogo';
import Button from '../components/common/Button';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  const joinDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : '';

  return (
    <div className="min-h-[calc(100vh-60px)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-[480px]">
        <div className="flex justify-center mb-8">
          <CoinbaseLogo size={48} />
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#0052FF] flex items-center justify-center text-white text-3xl font-black mb-4">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <h1 className="text-2xl font-black text-gray-900">{user?.name}</h1>
            <p className="text-sm text-gray-500 mt-1">Coinbase Member</p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email Address</p>
              <p className="text-gray-900 font-semibold">{user?.email}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Member Since</p>
              <p className="text-gray-900 font-semibold">{joinDate || '—'}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Account Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <p className="text-gray-900 font-semibold">Active</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="primary" size="lg" className="w-full" onClick={() => navigate('/')}>
              Go to Dashboard
            </Button>
            <button
              onClick={handleLogout}
              className="w-full py-3 rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}