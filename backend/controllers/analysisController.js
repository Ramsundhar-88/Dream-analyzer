const Dream = require('../models/Dream');
const { analyzeDream } = require('../utils/aiService');

async function analyze(req, res, next) {
  try {
    const { text, save = true } = req.body || {};
    if (!text || !text.trim()) {
      res.status(400);
      throw new Error('text is required');
    }
    const history = await Dream.find({}).sort({ createdAt: -1 }).limit(50);
    const analysis = await analyzeDream(text, history);

    let doc = null;
    if (save) {
      doc = await Dream.create({ text, mode: 'analysis', analysis });
    }

    res.status(201).json({ success: true, analysis, id: doc?._id });
  } catch (err) {
    next(err);
  }
}

async function stats(req, res, next) {
  try {
    const dreams = await Dream.find({}).select('analysis text createdAt');
    const counts = {};
    for (const d of dreams) {
      const themes = d.analysis?.themes || [];
      for (const t of themes) counts[t] = (counts[t] || 0) + 1;
    }
    res.json({ success: true, total: dreams.length, themes: counts });
  } catch (err) {
    next(err);
  }
}

async function listDreams(req, res, next) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const [items, total] = await Promise.all([
      Dream.find({}).sort({ createdAt: -1 }).skip(skip).limit(parseInt(limit)),
      Dream.countDocuments()
    ]);
    res.json({ success: true, items, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    next(err);
  }
}

module.exports = { analyze, stats, listDreams };