const jwt = require('jsonwebtoken');
const User = require('../models/User');

const sendTokenCookie = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ success: false, message: 'An account with this email already exists.' });
  }

  const user = await User.create({ name, email, password });
  const token = sendTokenCookie(res, user._id);

  res.status(201).json({
    success: true,
    message: 'Account created successfully.',
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }

  const token = sendTokenCookie(res, user._id);

  res.json({
    success: true,
    message: 'Logged in successfully.',
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
};

const getProfile = async (req, res) => {
  res.json({
    success: true,
    user: {
      id:        req.user._id,
      name:      req.user.name,
      email:     req.user.email,
      createdAt: req.user.createdAt,
    },
  });
};

const logout = (req, res) => {
  res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
  res.json({ success: true, message: 'Logged out successfully.' });
};

module.exports = { register, login, getProfile, logout };