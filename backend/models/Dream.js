const mongoose = require('mongoose');

const AnalysisSchema = new mongoose.Schema(
  {
    themes: [{ type: String }],
    sentiment: { type: String },
    summary: { type: String },
    stats: {
      type: Object,
      default: {}
    }
  },
  { _id: false }
);

const DreamSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
    mode: { type: String, enum: ['roast', 'analysis', 'both'], default: 'both' },
    roast: {
      dreamLine: String,
      realityLine: String,
      intensity: { type: String, enum: ['mild', 'savage'], default: 'mild' },
      imageUrl: String
    },
    analysis: AnalysisSchema
  },
  { timestamps: true }
);

module.exports = mongoose.model('Dream', DreamSchema);