export interface BotRule {
  id: string;
  name: string;
  userAgent: string;
  owner: string;
  description: string;
  defaultChecked: boolean;
}

export const BOTS: BotRule[] = [
  {
    id: "meta",
    name: "Meta External Agent",
    userAgent: "meta-externalagent",
    owner: "Meta (Facebook / Instagram)",
    description: "Crawls sites for Meta AI training and link previews.",
    defaultChecked: true,
  },
  {
    id: "gptbot",
    name: "GPTBot",
    userAgent: "GPTBot",
    owner: "OpenAI (ChatGPT)",
    description: "Scrapes web content to train OpenAI models.",
    defaultChecked: true,
  },
  {
    id: "claudebot",
    name: "ClaudeBot",
    userAgent: "ClaudeBot",
    owner: "Anthropic (Claude)",
    description: "Collects training data for Anthropic AI models.",
    defaultChecked: true,
  },
  {
    id: "google-ext",
    name: "Google-Extended",
    userAgent: "Google-Extended",
    owner: "Google",
    description: "Blocks Gemini AI training without hurting Google Search.",
    defaultChecked: true,
  },
  {
    id: "ccbot",
    name: "CCBot",
    userAgent: "CCBot",
    owner: "Common Crawl",
    description: "Open dataset used to train almost all major AI models.",
    defaultChecked: false,
  },
  {
    id: "bytespider",
    name: "Bytespider",
    userAgent: "Bytespider",
    owner: "ByteDance (TikTok)",
    description: "Aggressive crawler used for ByteDance LLM training.",
    defaultChecked: false,
  },
  {
    id: "perplexity",
    name: "PerplexityBot",
    userAgent: "PerplexityBot",
    owner: "Perplexity AI",
    description: "Indexes pages for AI-generated search summaries.",
    defaultChecked: false,
  },
];
