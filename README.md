# 🛡️ BotShield — Free AI & Meta Scraper Blocker

**BotShield** is a fast, zero-signup, client-side web tool that helps website owners block aggressive AI training bots and social scrapers (`meta-externalagent`, `GPTBot`, `ClaudeBot`, `CCBot`, `Bytespider`) **without hurting Google or Bing Search rankings**.

🌐 **Live Tool:** [https://botshield-generator.vercel.app/](https://botshield-generator.vercel.app/)

---

## ✨ Features

- **100% Client-Side & Privacy-First:** Runs completely in your browser. Your domain name is never saved, logged, or sent to any server.
- **Custom `robots.txt` Generator:** Select the crawlers you want to block while keeping `Googlebot` and `Bingbot` allowed, with automatic `Sitemap` formatting.
- **Cloudflare WAF Expression Generator:** Creates ready-to-paste firewall expressions (`http.user_agent contains ...`) for hard server-level blocking when crawlers ignore `robots.txt`.
- **One-Click Copy & Download:** Export your rules directly as a `.txt` file or copy to clipboard in one click.

---

## 🤖 Supported Crawlers

- **Meta (`meta-externalagent`)** — Meta AI training & crawler
- **OpenAI (`GPTBot`)** — ChatGPT / OpenAI training crawler
- **Anthropic (`ClaudeBot`)** — Claude AI data collection
- **Google (`Google-Extended`)** — Blocks Gemini AI training without affecting Google Search
- **Common Crawl (`CCBot`)** — Open web scraping dataset
- **ByteDance (`Bytespider`)** — LLM training scraper
- **Perplexity (`PerplexityBot`)** — AI search summary crawler

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel

---

## 🚀 Run Locally

```bash
git clone https://github.com/ruben-dev-vibe/botshield-gen
cd botshield-gen
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Need Help Setting It Up?

Don't want to risk breaking your SEO or Cloudflare DNS/WAF settings? Book a **Done-For-You Setup ($9)** or support the project via Ko-fi:

👉 **[Support or Book Setup on Ko-fi](https://ko-fi.com/botshield)**

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
