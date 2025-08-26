const express = require('express');
const router = express.Router();
const { createRoast, getRoast } = require('../controllers/roastController');

router.POST = router.post;

router.POST('/', createRoast);
router.get('/:id', getRoast);

module.exports = router;