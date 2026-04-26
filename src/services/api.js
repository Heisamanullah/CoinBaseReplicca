const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const request = async (endpoint, options = {}) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

export const registerUser = (name, email, password) =>
  request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });

export const loginUser = (email, password) =>
  request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

export const logoutUser = () =>
  request('/auth/logout', { method: 'POST' });

export const fetchProfile = () =>
  request('/auth/profile');

export const fetchAllCrypto   = () => request('/crypto');
export const fetchGainers     = () => request('/crypto/gainers');
export const fetchNewListings = () => request('/crypto/new');

export const addCrypto = (name, symbol, price, image, change24h) =>
  request('/crypto', {
    method: 'POST',
    body: JSON.stringify({ name, symbol, price, image, change24h }),
  });