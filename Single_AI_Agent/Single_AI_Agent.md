# Single AI Agent Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     SINGLE AI AGENT                         │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │                PROMPTS / INSTRUCTIONS                 │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │  SYSTEM PROMPT (Role & Behavior)                │  │  │
│  │  │  "You are a helpful assistant..."               │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │  USER PROMPT (Input from User)                  │  │  │
│  │  │  "Write hello world in JS"                      │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │  CONTEXT / HISTORY (Past messages)              │  │  │
│  │  │  Previous Q&A for continuity                    │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                                                       │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                             │                                │
│                             ▼                                │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │                     LLM (BRAIN)                       │  │
│  │                                                       │  │
│  │           ┌─────────────────────────────┐             │  │
│  │           │                             │             │  │
│  │           │   Ollama / OpenAI / Claude  │             │  │
│  │           │                             │             │  │
│  │           │   Processes all prompts     │             │  │
│  │           │   & generates response      │             │  │
│  │           │                             │             │  │
│  │           └─────────────────────────────┘             │  │
│  │                                                       │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                             │                                │
│                             ▼                                │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │               TOOLS / ACTIONS                         │  │
│  │                                                       │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │  │
│  │  │  Search  │  │  Read    │  │  Write Code      │   │  │
│  │  └──────────┘  └──────────┘  └──────────────────┘   │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │  │
│  │  │  Run     │  │  Grep    │  │  Web Fetch       │   │  │
│  │  │  Scripts │  │  Files   │  │                  │   │  │
│  │  └──────────┘  └──────────┘  └──────────────────┘   │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## How Prompts Flow

```
USER INPUT
    │
    ▼
┌─────────────────────┐
│  PROMPT ASSEMBLER   │
│                     │
│  System Prompt  ────┤
│  User Prompt   ────┤────► LLM ────► RESPONSE
│  Chat History  ────┤
└─────────────────────┘
```

## Core Prompt Structure

| Section | Purpose | Example |
|---------|---------|---------|
| **System Prompt** | Defines agent's role, behavior, constraints | "You are a QA engineer expert in Playwright" |
| **User Prompt** | The actual task/question from user | "Write a test for login page" |
| **Context** | Previous conversation history | Last 10 messages for continuity |
