/*
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                  SINGLE AI AGENT (JavaScript)               │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  PROMPTS SECTION                      │  │
│  │                                                       │  │
│  │  systemPrompt = "You are a Playwright expert..."      │  │
│  │  userPrompt   = "Write a login test..."               │  │
│  │  history      = [...previous messages...]             │  │
│  └──────────────────────┬────────────────────────────────┘  │
│                         ▼                                    │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              LLM (Ollama / OpenAI / Claude)           │  │
│  └──────────────────────┬────────────────────────────────┘  │
│                         ▼                                    │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  RESPONSE OUTPUT                      │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
*/

class SingleAgent {
  constructor(model = "llama3.2", baseUrl = "http://localhost:11434") {
    this.model = model;
    this.baseUrl = baseUrl;
    this.history = [];
    this.systemPrompt = "";
  }

  setSystemPrompt(prompt) {
    this.systemPrompt = prompt;
  }

  addToHistory(role, content) {
    this.history.push({ role, content });
  }

  // Build the full prompts array sent to LLM
  buildPrompts(userInput) {
    const messages = [];

    // 1. System Prompt (defines agent behavior)
    if (this.systemPrompt) {
      messages.push({ role: "system", content: this.systemPrompt });
    }

    // 2. Chat History (context / memory)
    for (const msg of this.history) {
      messages.push(msg);
    }

    // 3. User Prompt (current input)
    messages.push({ role: "user", content: userInput });

    return messages;
  }

  async run(userInput) {
    try {
      const messages = this.buildPrompts(userInput);

      console.log("\n=== PROMPTS SENT TO LLM ===");
      for (const msg of messages) {
        console.log(`[${msg.role.toUpperCase()}]: ${msg.content.substring(0, 80)}...`);
      }
      console.log("============================\n");

      // Send to Ollama (local, free, no API key)
      const response = await fetch(`${this.baseUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: this.model,
          messages: messages,
          stream: false
        })
      });

      const data = await response.json();

      // Save to history for context
      this.addToHistory("user", userInput);
      this.addToHistory("assistant", data.message.content);

      return data.message.content;
    } catch (error) {
      console.error("Error:", error.message);
      console.log("\n💡 Make sure Ollama is running: https://ollama.com");
      console.log("   Then run: ollama pull llama3.2\n");
      return null;
    }
  }

  async runWithOpenAI(userInput, apiKey) {
    // Alternative: Use OpenAI (requires API key)
    const messages = this.buildPrompts(userInput);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: messages
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    this.addToHistory("user", userInput);
    this.addToHistory("assistant", reply);

    return reply;
  }
}

async function main() {
  // ──────────────────────────────────────────────
  //  EXAMPLE: Playwright Test Agent
  // ──────────────────────────────────────────────

  const agent = new SingleAgent();

  // STEP 1: Set System Prompt (defines role)
  agent.setSystemPrompt(
    "You are a senior QA engineer expert in Playwright. " +
    "You write clean, reliable test scripts. " +
    "You follow Page Object Model pattern."
  );

  // STEP 2: Ask questions
  const response1 = await agent.run("Write a Playwright test for login page");
  console.log("AGENT RESPONSE:\n", response1);

  // STEP 3: Follow-up question (uses history for context)
  const response2 = await agent.run("Now add error handling for invalid credentials");
  console.log("AGENT RESPONSE:\n", response2);
}

// Run the agent
main().catch(console.error);
