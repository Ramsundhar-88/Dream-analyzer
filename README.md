# DreamRoast – AI Dream Interpreter & Roaster

## 📌 Project Overview

**DreamRoast** is a fun yet insightful AI app that lets users share their dreams and receive either:

* A sarcastic **roast** of their subconscious,
* A structured **psychological-style analysis**, or
* A mix of both.

It’s not just for laughs — the project also demonstrates **Prompting, Structured Output, API Handling, and Fun UX** in a single interactive application.

---

## 🎯 How It Works

### 1. User Input

* User types in a **dream description**.
* Selects a **mode**:

  * **Roast** → witty & sarcastic
  * **Analysis** → symbolic & thoughtful
  * **Both** → mix of roast + insights

### 2. Backend Processing

* AI interprets the dream.
* Applies the chosen mode’s tone:

  * Roast = sarcasm, wit
  * Analysis = logic, symbolism
  * Both = roast + analysis

### 3. Roast / Analysis Generation

* Uses **custom prompting** to guide AI responses.
* Returns results in **JSON format** for clean UI rendering.

### 4. Output Display

* **Roast Report** → sarcastic interpretation.
* **Analysis Report** → structured insights.
* **Combined Report** → both sections shown together.

---

## 🧠 AI Concepts in This Project

### 🔹 Prompting

* Mode-specific instructions:

  * Roast → “Be witty and sarcastic.”
  * Analysis → “Interpret with symbolism.”
  * Both → “Mix sarcasm with meaningful insights.”

### 🔹 Structured Output

* AI returns results in JSON for consistency.

**Example JSON Response:**

```json
{
  "roast": "Your dream about flying? Yeah, even gravity doesn’t want you.",
  "analysis": "Dreams of flying often represent ambition and desire for freedom."
}
```

### 🔹 Function Calling

Backend functions ensure separation of logic:

* `generateRoast()` → Roast only
* `generateAnalysis()` → Analysis only
* `generateBoth()` → Roast + Analysis

### 🔹 Error Handling & Parsing

* **JSON parsing with fallbacks**
* **Retry logic** for malformed outputs

---

## ⚙️ Tech Stack

* **Frontend:** React + Tailwind CSS
* **Backend:** Node.js + Express
* **AI API:** Google Gemini / OpenAI API
* **Hosting:**

  * Frontend → Vercel / Netlify
  * Backend → Render / Railway

---

## ⚠️ Disclaimer

DreamRoast is for **fun + insights** only.
Don’t take the roast personally — it’s just your subconscious clowning around.

