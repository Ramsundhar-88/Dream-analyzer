const Dream = require('../models/Dream');
const { generateRoast } = require('../utils/aiService');
const { generateRoastImage } = require('../utils/imageService');

async function createRoast(req, res, next) {
  try {
    const { text, intensity = 'mild', save = true } = req.body || {};
    if (!text || !text.trim()) {
      res.status(400);
      throw new Error('text is required');
    }

    const roast = await generateRoast(text, intensity);
    const imageUrl = await generateRoastImage(roast);

    let doc = null;
    if (save) {
      doc = await Dream.create({
        text,
        mode: 'roast',
        roast: { ...roast, imageUrl }
      });
    }

    return res.status(201).json({ success: true, roast: { ...roast, imageUrl }, id: doc?._id });
  } catch (err) {
    next(err);
  }
}

async function getRoast(req, res, next) {
  try {
    const { id } = req.params;
    const doc = await Dream.findById(id);
    if (!doc) {
      res.status(404);
      throw new Error('Roast not found');
    }
    res.json({ success: true, roast: doc.roast, text: doc.text });
  } catch (err) {
    next(err);
  }
}

module.exports = { createRoast, getRoast };