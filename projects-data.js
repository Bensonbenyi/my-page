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
    title: "Product Launch Page",
    summary:
      "A high-conversion landing page using editorial typography, minimal animation, and a performance-first implementation.",
    detail:
      "<p>一个面向产品发布的高转化率着陆页，强调编辑级排版与极简动效。</p>" +
      "<p>Performance-first 实现，Lighthouse 评分全项 95+，首屏加载 &lt;1s。采用关键 CSS 内联、图片懒加载与字体预加载策略。</p>" +
      "<p>响应式设计覆盖移动端至 4K 屏幕，暗色模式自动适配系统偏好。</p>",
    tags: ["HTML", "CSS", "JavaScript", "Performance", "Responsive"],
    images: [],
    links: [
      { label: "Live Site", url: "https://example.com" },
    ],
  },
  {
    index: "03",
    title: "Design System Notes",
    summary:
      "A lightweight documentation space for design tokens, component usage, and interface consistency across teams.",
    detail:
      "<p>轻量级设计系统文档站，涵盖 Design Token 定义、组件用法与跨团队界面一致性规范。</p>" +
      "<p>支持实时预览与版本对照，Markdown 驱动的内容管理，零构建依赖。</p>",
    tags: ["Design System", "Documentation", "Tokens", "Markdown"],
    images: [],
    links: [
      { label: "View Docs", url: "https://example.com" },
    ],
  },
];
