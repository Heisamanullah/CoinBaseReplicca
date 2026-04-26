const express = require('express');
const router = express.Router();

const {
  getAllCrypto,
  getGainers,
  getNewListings,
  addCrypto,
} = require('../controllers/cryptoController');

// NOTE: /gainers and /new MUST be defined before /:id to avoid
// Express treating "gainers" as a dynamic :id parameter.
router.get('/gainers', getGainers);
router.get('/new',     getNewListings);
router.get('/',        getAllCrypto);
router.post('/',       addCrypto);

module.exports = router;
