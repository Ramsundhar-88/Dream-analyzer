// services/dreamService.js
const axios = require("axios");
const { GEMINI_API_KEY } = require("../config/env");

if (!GEMINI_API_KEY) {
  throw new Error(
    "GEMINI_API_KEY not found. This service requires an active internet connection and Gemini API key."
  );
}

// Helper: strip markdown formatting from JSON output
function cleanJSONText(str) {
  return str
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
}

// 🔹 Roast Generator (LONG, detailed)
async function generateRoast(text, intensity = "mild") {
  if (!text || !text.trim()) {
    throw new Error("Dream text is required for generating a roast.");
  }

  const prompt = `
You are a savage, witty roast comedian. 

The user dreamed this:
"${text}"

Instructions:
- Dream self = heroic, cinematic, absurdly epic.
- Real self = painfully unimpressive, hilariously mundane.
- Output 3 fields:
  1. dreamLine: (100 words), epic description of dream self.
  2. realityLine: (80 words), funny roast of real self.
  3. fullRoast: LONG (150-200 words), absurdly detailed, extremely creative, vivid, over-the-top roast with metaphors, unusual scenarios, and visual humor.
- Make it ${intensity} in tone but PG-13.
- ONLY return valid JSON, nothing else.

Return JSON exactly like this:
{
  "dreamLine": "...",
  "realityLine": "...",
  "fullRoast": "..."
}
`;

  try {
    const body = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    const resp = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      body,
      { params: { key: GEMINI_API_KEY } }
    );

    let content = resp.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    content = cleanJSONText(content);

    const parsed = JSON.parse(content);

    if (!parsed.dreamLine || !parsed.realityLine || !parsed.fullRoast) {
      throw new Error("Gemini did not return all required fields.");
    }

    return parsed;
  } catch (err) {
    console.error("Gemini roast error:", err.message);
    throw new Error(
      "Failed to generate roast via Gemini. Ensure internet connection and valid API key."
    );
  }
}

// 🔹 Dream Analysis (Meaningful, detailed)
async function analyzeDream(text, history = []) {
  if (!text || !text.trim()) {
    throw new Error("Dream text is required for analysis.");
  }

  const prompt = `
You are a dream interpreter who writes vivid, descriptive narratives. Analyze this dream: "${text}". Also consider past dreams: ${JSON.stringify(history.map((h) => h.text))}.

Instructions:
- Write the analysis as a vivid, descriptive narrative (80-100 words)
- Use rich imagery and detailed descriptions of the dream scenes
- Write in a storytelling style that brings the dream to life
- Focus on the visual and sensory elements of the dream
- Follow with relevant themes as an array of keywords
- Determine the overall mood of the dream
- Output only valid JSON, nothing else

Return JSON exactly like this:
{
  "analysis": "In a realm sculpted from mist and shadow, where the city itself was a vertical playground, I moved with grace through towering buildings... [80-100 words describing the dream in vivid, narrative detail]",
  "themes": ["theme1", "theme2", "theme3"],
  "mood": "positive"
}

Note: mood must be exactly one of: "positive", "negative", or "neutral"
`;

  try {
    const body = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    const resp = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      body,
      { params: { key: GEMINI_API_KEY } }
    );

    let content = resp.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    content = cleanJSONText(content);

    const parsed = JSON.parse(content);

    if (!parsed.analysis || !parsed.themes || !parsed.mood) {
      throw new Error("Gemini did not return all required analysis fields.");
    }

    return parsed;
  } catch (err) {
    console.error("Gemini analysis error:", err.message);
    throw new Error(
      "Failed to analyze dream via Gemini. Ensure internet connection and valid API key."
    );
  }
}

module.exports = { generateRoast, analyzeDream };