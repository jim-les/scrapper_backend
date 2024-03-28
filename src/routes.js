const express = require('express');
const router = express.Router();
const scrapeController = require('./controllers/scrapeController');

router.get('/scrape', scrapeController.scrapeData);

module.exports = router;
