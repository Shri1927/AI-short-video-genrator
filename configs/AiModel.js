const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("API key is missing. Set NEXT_PUBLIC_GEMINI_API_KEY in your environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

let chatSession;

try {
  chatSession = model.startChat({
      generationConfig,
      history: [
          {
              role: "user",
              parts: [
                  { text: "Write a script to generate 30 seconds video on topic: Interesting historical\n story along with AI image prompt in realistic format for each scene and give the result in JSON \nformat with imageprompt and content text as field" },
              ],
          },
      ],
  });
} catch (error) {
  console.error("Failed to initialize chat session:", error);
  throw new Error("Chat session initialization failed.");
}

export { chatSession };
