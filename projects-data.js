/* ── Project Data ──────────────────────────────────────────────
   Edit this array to add / remove / update projects.
   Each object:
     index   – display number (e.g. "01")
     title   – card & page title
     summary – short description on the home page card
     detail  – full HTML description for the detail page
     tags    – tech tags
     images  – array of { src, alt } for screenshots / demos
     links   – array of { label, url } for external links
──────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    index: "01",
    title: "Coding-Agent",
    summary:
      "基于 ReAct 框架与 LangGraph 的 AI Agent 架构设计，结合 AST 与 embedding 实现代码结构级检索，通过 LLM 进行高语义保真的上下文压缩与本地 JSON memory 管理。",
    detail:
      "<p>一个完整的 AI 编程助手，核心基于 ReAct 推理框架与 LangGraph 状态图构建。Agent 能够自主规划任务步骤、调用工具、并根据执行结果动态调整策略。</p>" +
      "<p>利用 Python AST 解析结合 Embedding 向量检索，实现对代码库的结构级语义搜索，相比纯文本检索精度显著提升。支持跨文件引用追踪与上下文窗口内的精准定位。</p>" +
      "<p>通过 LLM 对上下文进行高语义保真压缩，配合本地 JSON 文件管理 Agent Memory，在长对话场景下保持稳定性能。Memory 支持自动摘要与重要性评分，实现高效的知识检索。</p>" +
      "<p>使用 Typer + Rich 构建高质量 CLI/TUI 交互界面，支持流式输出、语法高亮与多轮对话，提供接近 IDE 的交互体验。</p>",
    tags: ["Python", "LangGraph", "ReAct", "AST", "Embedding", "Typer"],
    images: [],
    links: [
      { label: "GitHub Repo", url: "https://github.com/Bensonbenyi" },
      { label: "Live Demo", url: "https://example.com" },
    ],
  },
  {
    index: "02",
    title: "example",
    summary:
      "",
    detail:
      "",
    tags: ["HTML", "CSS", "JavaScript", "Performance", "Responsive"],
    images: [],
    links: [
      { label: "Live Site", url: "https://example.com" },
    ],
  },
  {
    index: "03",
    title: "example",
    summary:
      "",
    detail:
      "",
    tags: ["Design System", "Documentation", "Tokens", "Markdown"],
    images: [],
    links: [
      { label: "View Docs", url: "https://example.com" },
    ],
  },
];
