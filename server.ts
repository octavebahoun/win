import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // Initialize Gemini API client safely
  let ai: GoogleGenAI | null = null;
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("WARNING: GEMINI_API_KEY is not defined in process.env. Interactive chat will run in simulated mode.");
  }

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV, hasGeminiKey: !!apiKey });
  });

  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message input is required." });
      return;
    }

    if (!ai) {
      // Return simulated responses if API key is not yet set up
      const mockResponses = [
        `Salut ! Je suis **WINE AI**, ton assistant virtuel de sprint. Je vois que la clé API n'est pas encore configurée, mais je suis opérationnel pour t'accompagner ! Quel projet de startup africaine lançons-nous aujourd'hui ? 🚀`,
        `Excellente question. Pour optimiser la vélocité de l'équipe (qui est actuellement de **84 pts/sprint**), je te propose de découper la tâche "Refonte Dashboard" en 3 sous-tâches plus digestes pour Elara.`,
        `J'ai analysé ton calendrier de diffusion. Le post WhatsApp prévu pour ce soir à 18:00 est optimisé pour un taux d'ouverture maximal dans les régions de Dakar et d'Abidjan ! 📈`
      ];
      const randomMock = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      setTimeout(() => {
        res.json({ response: randomMock });
      }, 800);
      return;
    }

    try {
      // Structure the conversation context nicely
      const systemInstruction = `You are WINE AI, the premium, elite workspace AI for WINE SaaS—the unified productivity dashboard for fast-growing African startups. 
Your tone is incredibly helpful, professional, tech-savvy, agile, and warm.
Format your responses using clean Markdown (with bold key points, bulleted lists, and snippets where helpful).
Help the user manage tasks, sprints, calendar postings on WhatsApp and LinkedIn, team structures, and workspace goals.
Keep responses concise, high-value, and strictly in French (since the app language is French).`;

      // Build contents array with history
      const contents = [];
      if (history && Array.isArray(history)) {
        for (const msg of history) {
          // Avoid system or empty messages
          if (!msg.content || (msg.sender !== "user" && msg.sender !== "assistant")) continue;
          contents.push({
            role: msg.sender === "user" ? "user" : "model",
            parts: [{ text: msg.content }]
          });
        }
      }
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ response: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Une erreur est survenue lors de la génération." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
