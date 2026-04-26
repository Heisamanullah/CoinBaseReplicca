const Crypto = require('../models/Crypto');

// ── GET /api/crypto  — All tradable cryptocurrencies ────────────────────────
const getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });
    res.json({ success: true, count: cryptos.length, data: cryptos });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch cryptocurrencies.' });
  }
};

// ── GET /api/crypto/gainers  — Top gainers (highest % change, asc → desc) ───
const getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } })
      .sort({ change24h: -1 });   // highest first
    res.json({ success: true, count: gainers.length, data: gainers });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch top gainers.' });
  }
};

// ── GET /api/crypto/new  — New listings (newest first) ──────────────────────
const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find().sort({ createdAt: -1 }).limit(20);
    res.json({ success: true, count: newListings.length, data: newListings });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch new listings.' });
  }
};

// ── POST /api/crypto  — Add new cryptocurrency ───────────────────────────────
const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || price === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Name, symbol, and price are required.',
      });
    }

    const crypto = await Crypto.create({ name, symbol, price, image, change24h });

    res.status(201).json({
      success: true,
      message: `${name} (${symbol}) added successfully.`,
      data: crypto,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    res.status(500).json({ success: false, message: 'Failed to add cryptocurrency.' });
  }
};

module.exports = { getAllCrypto, getGainers, getNewListings, addCrypto };
