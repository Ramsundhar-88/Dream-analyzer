# Dream-analyzer

DreamRoast

Tell the AI your dream.
It listens, analyzes, and roasts your subconscious — brutally. Then it throws in insights so you don’t walk away completely confused.

Project Idea

DreamRoast is a fun yet insightful AI app where you:

Share your dream in text form.

Choose a mode: Roast, Analysis, or Both.

AI processes your dream and delivers:

A sarcastic, witty roast of your dream.

A structured psychological-style analysis.

Or a combination of both.

This project isn’t just for laughs — it’s a practical showcase of combining Prompting, Structured Output, API Handling, and Fun UX into a single interactive application.

How It Works
1. User Input

A dream description (typed in by the user).

A mode selection: Roast, Analysis, or Both.

2. Backend Processing

The AI interprets the dream.

It applies sarcasm for roast mode, logic and symbolism for analysis mode, or mixes both.

3. Roast / Analysis Generation

Prompting and structured outputs ensure results are both funny and clear.

Backend handles formatting and JSON parsing for consistent UI rendering.

4. Output

Displayed in the UI as Roast Report and/or Analysis Report.

AI Concepts in This Project
1. Prompting

We craft prompts that adapt to the chosen mode.
Instead of simply “analyze this dream,” we guide the AI with tone instructions, e.g.:

If mode = roast: Be witty and sarcastic.  
If mode = analysis: Be thoughtful, interpret symbols.  
If mode = both: Mix roast with insight.  

2. Structured Output

The AI returns JSON so the frontend knows how to render each section.

Example:

{
  "roast": "Your dream about flying? Yeah, even gravity doesn’t want you.",
  "analysis": "Dreams of flying often represent ambition and desire for freedom."
}

3. Function Calling

Different backend functions handle different user needs:

generateRoast() – Produces only roast output.

generateAnalysis() – Produces structured analysis.

generateBoth() – Combines roast + analysis.

This allows flexibility and cleaner API design.

4. Error Handling & Parsing

Since LLM outputs can be messy, the app includes:

JSON parsing + fallback handling.

Retry logic for malformed outputs.

Tech Stack

Frontend: React + Tailwind

Backend: Node.js + Express

AI: Google Gemini / OpenAI API

Hosting: Vercel / Netlify (frontend), Render / Railway (backend)

Disclaimer

We roast with care.
Don’t take it too seriously — it’s just your subconscious clowning around.
