const express = require('express');
const router = express.Router();
const { analyze, stats, listDreams } = require('../controllers/analysisController');

router.post('/', analyze);
router.get('/stats', stats);
router.get('/dreams', listDreams);

module.exports = router;