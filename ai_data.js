window.AI_TOOL_SITE_DATA = {
  version: "3.2",
  updated: "2026-05",
  categories: [
    {
      key: "models",
      color: "var(--purple)",
      icon: "🧠",
      title: {
        zh: "模型图谱",
        en: "Model Taxonomy"
      },
      summary: {
        zh: "先看底层能力：旗舰、开源、中国模型。",
        en: "Model layer: flagship, open, and Chinese stacks."
      },
      description: {
        zh: "先理解底层能力层：旗舰多模态、快模型、开源模型，以及中国主流模型家族。",
        en: "Understand the model layer first: flagship multimodal, fast workhorse, open models, and major Chinese model families."
      },
      chips: {
        zh: ["旗舰多模态", "开源模型", "中国模型", "推理与成本平衡"],
        en: ["Flagship multimodal", "Open models", "Chinese model families", "Reasoning vs. speed"]
      },
      decisions: {
        zh: [
          ["要最强综合能力", "看 GPT-5.4、Claude Opus 4.6、Gemini 3.1 Pro。"],
          ["要日常主力模型", "看 Claude Sonnet 4.6、Gemini 3 Flash、Gemini 3.1 Flash-Lite。"],
          ["要开放生态或本地部署", "看 Gemma 4、Llama 4、Qwen、DeepSeek。"],
          ["要中国语境和本土生态", "看 Doubao Seed、MiniMax、混元、文心、GLM。"]
        ],
        en: [
          ["Need top-end frontier models", "Look at GPT-5.4, Claude Opus 4.6, and Gemini 3.1 Pro."],
          ["Need fast daily workhorses", "Look at Claude Sonnet 4.6, Gemini 3 Flash, and Gemini 3.1 Flash-Lite."],
          ["Need open ecosystems", "Look at Gemma 4, Llama 4, Qwen, and DeepSeek."],
          ["Need Chinese-first model stacks", "Look at Doubao Seed, MiniMax, Hunyuan, ERNIE, and GLM."]
        ]
      },
      tools: [
        {
          name: "Flagship Multimodal",
          domain: "openai.com",
          badges: ["top"],
          desc: {
            zh: "适合高难度推理、跨模态分析、复杂编程和高价值任务。",
            en: "Best for frontier reasoning, multimodal analysis, and high-value tasks."
          },
          fit: {
            zh: "复杂研究、Agent、企业主力模型",
            en: "Deep research, agents, and enterprise defaults"
          },
          why: {
            zh: "GPT-5.4 · Claude Opus 4.6 · Gemini 3.1 Pro",
            en: "GPT-5.4 · Claude Opus 4.6 · Gemini 3.1 Pro"
          }
        },
        {
          name: "Fast Workhorse Models",
          domain: "anthropic.com",
          badges: [],
          desc: {
            zh: "速度、成本、质量更平衡，适合团队日常使用。",
            en: "A better balance of speed, cost, and quality for everyday use."
          },
          fit: {
            zh: "写作、分析、批量任务",
            en: "Writing, analysis, and scaled workflows"
          },
          why: {
            zh: "Claude Sonnet 4.6 · Gemini 3 Flash · Gemini 3.1 Flash-Lite",
            en: "Claude Sonnet 4.6 · Gemini 3 Flash · Gemini 3.1 Flash-Lite"
          }
        },
        {
          name: "Open Models",
          domain: "ai.google.dev",
          badges: ["open"],
          desc: {
            zh: "适合自建、微调、本地部署和开发者生态。",
            en: "Best for self-hosting, fine-tuning, local deployment, and developer ecosystems."
          },
          fit: {
            zh: "开发者平台、本地推理",
            en: "Developer platforms and local inference"
          },
          why: {
            zh: "Gemma 4 · Llama 4",
            en: "Gemma 4 · Llama 4"
          }
        },
        {
          name: "Chinese Frontier Models",
          domain: "minimax.io",
          badges: ["cn"],
          desc: {
            zh: "适合中文语境、国内产品生态和企业落地。",
            en: "Designed for Chinese-language use, local ecosystems, and enterprise rollout."
          },
          fit: {
            zh: "中文助手、国内企业应用",
            en: "Chinese assistants and local enterprise stacks"
          },
          why: {
            zh: "Doubao Seed · MiniMax · Hunyuan · ERNIE · GLM",
            en: "Doubao Seed · MiniMax · Hunyuan · ERNIE · GLM"
          }
        }
      ]
    },
    {
      key: "assistants",
      color: "var(--blue)",
      icon: "💬",
      title: { zh: "通用 AI 助手", en: "Everyday AI Assistants" },
      summary: { zh: "日常问答、写作、翻译、思考辅助。", en: "Daily Q&A, writing, translation, and thinking support." },
      description: { zh: "日常问答、写作、翻译、头脑风暴、信息解释，适合大多数人每天打开就用。", en: "Daily Q&A, writing, translation, brainstorming, and general-purpose help for most users." },
      chips: {
        zh: ["日常问答", "写作润色", "翻译", "框架搭建"],
        en: ["Everyday Q&A", "Writing", "Translation", "Framework thinking"]
      },
      decisions: {
        zh: [
          ["想要最通用、生态最全", "选 ChatGPT。"],
          ["想要文字质感和推理感更强", "选 Claude。"],
          ["想吃 Google 生态和多模态", "选 Gemini。"],
          ["想要中文性价比与长文处理", "选 Kimi 或 DeepSeek。"]
        ],
        en: [
          ["Want the broadest general-purpose tool", "Pick ChatGPT."],
          ["Want stronger writing texture", "Pick Claude."],
          ["Want Google ecosystem and multimodality", "Pick Gemini."],
          ["Want strong Chinese value and long-context use", "Pick Kimi or DeepSeek."]
        ]
      },
      tools: [
        { name: "ChatGPT", domain: "chatgpt.com", badges: ["top"], desc: { zh: "通用能力最均衡的入口。", en: "The broadest general-purpose entry point." }, fit: { zh: "大多数人的默认主力 AI", en: "The default AI for most people" }, why: { zh: "生态完整，能力面最广。", en: "Broad capabilities and mature product surface." } },
        { name: "Claude", domain: "claude.ai", badges: ["top"], desc: { zh: "长文理解和写作质感很强。", en: "Known for strong long-form reasoning and polished writing." }, fit: { zh: "高质量写作、分析、归纳", en: "High-quality writing, analysis, and synthesis" }, why: { zh: "文字输出稳定，适合深度内容工作。", en: "Reliable writing quality for deep content work." } },
        { name: "Gemini", domain: "gemini.google.com", badges: [], desc: { zh: "适合大材料处理和多模态输入。", en: "Strong for multimodal input and large-context work." }, fit: { zh: "Google 生态用户、大文档场景", en: "Google ecosystem users and large-context work" }, why: { zh: "大上下文、多模态、文档结合强。", en: "Large context, multimodality, and strong doc handling." } },
        { name: "DeepSeek", domain: "deepseek.com", badges: ["cn"], desc: { zh: "中文表现强、性价比高。", en: "High-value Chinese-first assistant." }, fit: { zh: "中文推理、代码、长文问答", en: "Chinese reasoning, coding, and long-form Q&A" }, why: { zh: "开发者圈口碑强。", en: "Very strong reputation among developers." } },
        { name: "Kimi", domain: "kimi.com", badges: ["cn"], desc: { zh: "适合中文长文档阅读和快速总结。", en: "Popular for Chinese long-document reading and synthesis." }, fit: { zh: "竞品研究、长报告", en: "Competitive research and long reports" }, why: { zh: "长文本体验好，上手快。", en: "Strong long-context experience and easy onboarding." } },
        { name: "豆包", domain: "doubao.com", badges: ["cn"], desc: { zh: "字节系主流 AI 助手。", en: "A mainstream ByteDance assistant." }, fit: { zh: "国内用户、内容和办公场景", en: "Chinese users, content, and productivity workflows" }, why: { zh: "国内覆盖广，使用门槛低。", en: "Broad consumer reach and easy access in China." } },
        { name: "通义千问", domain: "tongyi.aliyun.com", badges: ["cn"], desc: { zh: "阿里系主力 AI 助手。", en: "Alibaba’s mainstream assistant." }, fit: { zh: "阿里云用户、中文办公", en: "Alibaba Cloud users and Chinese office workflows" }, why: { zh: "Qwen 模型家族带动产品与开发两端。", en: "Strong bridge between product use and the Qwen ecosystem." } },
        { name: "智谱清言", domain: "zhipuai.cn", badges: ["cn"], desc: { zh: "智谱面向大众的 AI 助手入口。", en: "Zhipu’s consumer-facing assistant." }, fit: { zh: "中文通用使用、企业试用", en: "General Chinese use and enterprise trials" }, why: { zh: "连接 GLM 模型能力与产品层。", en: "Connects the GLM family to a usable product layer." } }
      ]
    },
    {
      key: "search",
      color: "var(--teal)",
      icon: "🔎",
      title: { zh: "搜索 / 深度研究 / 监测", en: "Search / Deep Research / Monitoring" },
      summary: { zh: "找最新信息、带来源研究、盯行业动态。", en: "Live search, cited research, and market tracking." },
      description: { zh: "适合查找最新信息、做带引用研究、监测行业变化与竞品动态。", en: "Use these for live information discovery, cited research, and market or brand monitoring." },
      chips: { zh: ["实时联网", "带来源", "行业追踪", "竞品监测"], en: ["Live web", "Citations", "Industry tracking", "Competitor monitoring"] },
      decisions: {
        zh: [
          ["想最快拿到带来源回答", "用 Perplexity。"],
          ["想做更完整的研究包", "用 Genspark。"],
          ["想持续盯新闻和竞品", "用 Google Alerts、Brandwatch、清博。"],
          ["想走中文搜索入口", "用秘塔 AI 搜索。"]
        ],
        en: [
          ["Need a fast answer with sources", "Use Perplexity."],
          ["Need a fuller research packet", "Use Genspark."],
          ["Need ongoing monitoring", "Use Google Alerts, Brandwatch, or Qingbo."],
          ["Need a Chinese-first research search tool", "Use Metaso."]
        ]
      },
      tools: [
        { name: "Perplexity", domain: "perplexity.ai", badges: ["top"], desc: { zh: "AI 搜索代表产品。", en: "A leading AI search product." }, fit: { zh: "行业研究、竞品扫描", en: "Industry research and competitor scans" }, why: { zh: "搜索快、引用清晰。", en: "Fast search with clear citations." } },
        { name: "Genspark", domain: "genspark.ai", badges: ["new"], desc: { zh: "更偏 agent 化研究。", en: "A more agentic research product." }, fit: { zh: "专题梳理、研究包", en: "Topic synthesis and research packets" }, why: { zh: "适合从问题走向成品。", en: "Good when research needs to become a deliverable." } },
        { name: "秘塔 AI 搜索", domain: "metaso.cn", badges: ["cn"], desc: { zh: "中文语境下很实用的 AI 搜索。", en: "A practical Chinese-first AI search tool." }, fit: { zh: "中文资料、国内研究", en: "Chinese search and local research" }, why: { zh: "中文体验友好，国内资料可达性好。", en: "Better reach into Chinese-language sources." } },
        { name: "Google Alerts", domain: "google.com", badges: [], desc: { zh: "免费、轻量的关键词订阅工具。", en: "A free lightweight alerting tool." }, fit: { zh: "低成本监测、关键词提醒", en: "Low-cost monitoring and keyword alerts" }, why: { zh: "简单稳定，适合基础监控。", en: "Simple and reliable for baseline monitoring." } },
        { name: "Brandwatch", domain: "brandwatch.com", badges: ["enterprise"], desc: { zh: "企业级社媒与品牌舆情平台。", en: "An enterprise social listening platform." }, fit: { zh: "国际市场、品牌监测", en: "Global markets and brand monitoring" }, why: { zh: "适合专业舆情工作。", en: "Rich datasets for professional listening work." } },
        { name: "清博", domain: "gsdata.cn", badges: ["cn"], desc: { zh: "国内常用的新媒体和舆情监测平台。", en: "A common Chinese media-monitoring platform." }, fit: { zh: "微信、微博等中文生态追踪", en: "Chinese public opinion and new media tracking" }, why: { zh: "更贴近国内平台和语境。", en: "Closer to Chinese channels and local contexts." } }
      ]
    },
    {
      key: "scraping",
      color: "var(--slate)",
      icon: "🕸️",
      title: { zh: "网页数据采集", en: "Web Data Collection / AI Scraping" },
      summary: { zh: "把网页变成可分析、可喂模型的数据。", en: "Turn websites into model-ready and structured data." },
      description: { zh: "把网站内容转成结构化数据、Markdown 或 API 结果，用于后续分析、知识库和 Agent。", en: "Convert websites into structured data, markdown, or API-ready inputs for analysis, RAG, and agents." },
      chips: { zh: ["网页转 Markdown", "结构化抓取", "Agent 数据源"], en: ["Web to markdown", "Structured extraction", "Agent data sources"] },
      decisions: {
        zh: [
          ["想快速把网页喂给 LLM", "用 Firecrawl。"],
          ["想按语义批量搜网页", "用 Exa。"],
          ["想要成熟抓取基础设施", "用 Apify 或 Bright Data。"],
          ["想给 Agent 增加搜索能力", "用 Tavily。"]
        ],
        en: [
          ["Need LLM-ready website content fast", "Use Firecrawl."],
          ["Need semantic web search at scale", "Use Exa."],
          ["Need mature scraping infrastructure", "Use Apify or Bright Data."],
          ["Need search APIs for agents", "Use Tavily."]
        ]
      },
      tools: [
        { name: "Firecrawl", domain: "firecrawl.dev", badges: ["top"], desc: { zh: "把网页抓成 Markdown 或结构化内容。", en: "Turn websites into markdown and structured data." }, fit: { zh: "知识库、RAG、网页分析", en: "Knowledge bases, RAG, and web analysis" }, why: { zh: "对 AI 工作流友好，输入干净。", en: "Very AI-workflow-friendly with clean outputs." } },
        { name: "Exa", domain: "exa.ai", badges: ["top", "open"], desc: { zh: "偏语义搜索 API。", en: "A semantic search API." }, fit: { zh: "批量网页探索、研究 API", en: "Large-scale web exploration and research APIs" }, why: { zh: "比关键词搜索更偏语义。", en: "More semantic than keyword-only search." } },
        { name: "Apify", domain: "apify.com", badges: [], desc: { zh: "成熟的网页抓取与自动化平台。", en: "A mature scraping and automation platform." }, fit: { zh: "大规模采集、数据运营", en: "Large-scale extraction and data operations" }, why: { zh: "基础设施成熟，生态丰富。", en: "Mature infrastructure with a strong ecosystem." } },
        { name: "Tavily", domain: "tavily.com", badges: ["open"], desc: { zh: "专为 AI Agent 设计的搜索 API。", en: "A search API built specifically for AI agents." }, fit: { zh: "Agent、自动研究", en: "Agents and automated research" }, why: { zh: "适合让模型自己去查。", en: "Great for letting models search programmatically." } }
      ]
    },
    {
      key: "docs",
      color: "var(--amber)",
      icon: "📚",
      title: { zh: "文档型研究 / 私有资料问答", en: "Document-Grounded Research" },
      summary: { zh: "只基于你的资料做问答和研究。", en: "Grounded Q&A and research on your own files." },
      description: { zh: "上传你自己的访谈、报告、论文、PDF 和笔记，只基于这些材料回答问题和提炼洞察。", en: "Upload your own interviews, reports, papers, PDFs, and notes, then ask grounded questions against those sources." },
      chips: { zh: ["上传资料", "减少幻觉", "研究问答"], en: ["Uploaded sources", "Lower hallucination risk", "Research Q&A"] },
      decisions: {
        zh: [
          ["想做最稳的资料问答", "用 NotebookLM。"],
          ["想做学术证据整理", "看 Elicit 和 Consensus。"],
          ["想给团队做研究工作台", "看 Hebbia。"]
        ],
        en: [
          ["Need the cleanest grounded Q&A", "Use NotebookLM."],
          ["Need evidence-first literature help", "Look at Elicit and Consensus."],
          ["Need a team research workspace", "Look at Hebbia."]
        ]
      },
      tools: [
        { name: "NotebookLM", domain: "notebooklm.google.com", badges: ["top"], desc: { zh: "最适合“只基于我上传的资料回答”。", en: "One of the best tools for answering strictly from your uploaded sources." }, fit: { zh: "研究资料、访谈文稿", en: "Research materials and interview transcripts" }, why: { zh: "来源可控，信任感强。", en: "Grounded answers with strong source control." } },
        { name: "Elicit", domain: "elicit.com", badges: [], desc: { zh: "偏文献研究和证据梳理。", en: "Focused on literature discovery and evidence synthesis." }, fit: { zh: "学术研究、证据综述", en: "Academic research and evidence reviews" }, why: { zh: "更像研究方法工具。", en: "More research-method oriented than generic Q&A." } },
        { name: "Consensus", domain: "consensus.app", badges: [], desc: { zh: "面向论文和研究证据的问答工具。", en: "A research-focused question-answering tool." }, fit: { zh: "论文问题、证据查找", en: "Paper-driven questions and evidence lookup" }, why: { zh: "更像“研究证据搜索引擎”。", en: "Feels closer to an evidence search engine." } },
        { name: "Hebbia", domain: "hebbia.com", badges: ["enterprise"], desc: { zh: "更偏专业团队研究工作台。", en: "A research workspace for professional teams." }, fit: { zh: "复杂文档任务、法务金融咨询", en: "Complex document analysis in finance, legal, and consulting" }, why: { zh: "适合高强度文档操作。", en: "Built for intensive document work." } }
      ]
    },
    {
      key: "content",
      color: "var(--teal)",
      icon: "✍️",
      title: { zh: "写作 / 文档 / 幻灯片", en: "Writing / Docs / Slides" },
      summary: { zh: "把想法做成报告、PRD、PPT 和对外材料。", en: "Turn ideas into reports, PRDs, decks, and polished docs." },
      description: { zh: "把分析结果变成看得见的交付物：报告、PRD、PPT、周报、提案和内容稿件。", en: "Turn thinking into deliverables: reports, PRDs, presentations, weekly updates, proposals, and content drafts." },
      chips: { zh: ["报告", "PRD", "PPT", "商务表达"], en: ["Reports", "PRDs", "Decks", "Business communication"] },
      decisions: {
        zh: [
          ["想一句话出 deck", "用 Gamma。"],
          ["想继续做设计排版", "用 Canva AI。"],
          ["文档本来就在团队知识库里", "用 Notion AI 或 Writer。"]
        ],
        en: [
          ["Need a deck from a prompt", "Use Gamma."],
          ["Need better visual polish after drafting", "Use Canva AI."],
          ["Already live inside docs and knowledge tools", "Use Notion AI or Writer."]
        ]
      },
      tools: [
        { name: "Gamma", domain: "gamma.app", badges: ["top"], desc: { zh: "一句话生成演示文稿和文档。", en: "Turn ideas into slides and documents from a prompt." }, fit: { zh: "PPT、提案、研究总结", en: "Presentations, proposals, and research summaries" }, why: { zh: "成稿快，适合先出结构版本。", en: "Very fast first-draft generation." } },
        { name: "Canva AI", domain: "canva.com", badges: ["top"], desc: { zh: "适合把文档进一步做成更漂亮的可视化表达。", en: "Great for turning drafts into polished visual communication." }, fit: { zh: "视觉化报告、营销图文", en: "Visual reports and marketing content" }, why: { zh: "设计友好，适合非设计师。", en: "Design-friendly for non-designers." } },
        { name: "Notion AI", domain: "notion.so", badges: [], desc: { zh: "直接在文档和知识库里写总结、改写、翻译。", en: "Work directly inside docs and knowledge spaces." }, fit: { zh: "团队文档、项目记录", en: "Team docs and project notes" }, why: { zh: "文档即工作流，切换成本低。", en: "Low-friction because it lives inside the doc workflow." } },
        { name: "Writer", domain: "writer.com", badges: ["enterprise"], desc: { zh: "企业级写作和内容治理平台。", en: "An enterprise writing platform focused on governance and consistency." }, fit: { zh: "品牌规范、合规写作", en: "Brand governance and compliant writing" }, why: { zh: "适合组织级内容管理。", en: "Strong fit for organization-scale content control." } }
      ]
    },
    {
      key: "meetings",
      color: "var(--coral)",
      icon: "🎙️",
      title: { zh: "会议 / 转录 / 协作", en: "Meetings / Transcription / Collaboration" },
      summary: { zh: "记录会议、访谈、纪要和行动项。", en: "Capture meetings, interviews, summaries, and action items." },
      description: { zh: "用来记录会议、访谈、复盘和 action items，把音频变成可检索内容。", en: "Capture meetings, interviews, and action items by turning audio into searchable text and summaries." },
      chips: { zh: ["会议纪要", "访谈转录", "行动项"], en: ["Meeting notes", "Interview transcription", "Action items"] },
      decisions: {
        zh: [
          ["你在飞书生态里", "用飞书妙记。"],
          ["想要英文会议和跨平台", "用 Otter 或 Fireflies.ai。"],
          ["想要自动摘要和 follow-up", "用 Fathom 或 Read AI。"]
        ],
        en: [
          ["Inside the Feishu/Lark ecosystem", "Use Feishu Miaoji."],
          ["Need English meetings and broad integrations", "Use Otter or Fireflies.ai."],
          ["Need summaries and follow-up automation", "Use Fathom or Read AI."]
        ]
      },
      tools: [
        { name: "飞书妙记", domain: "feishu.cn", badges: ["top", "cn"], desc: { zh: "飞书生态里的录音转写与摘要工具。", en: "Feishu’s meeting transcription and summarization tool." }, fit: { zh: "访谈、评审、团队复盘", en: "Interviews, reviews, and debriefs" }, why: { zh: "与国内协作环境连接自然。", en: "A natural fit for Chinese collaboration workflows." } },
        { name: "Otter", domain: "otter.ai", badges: [], desc: { zh: "老牌会议转录工具。", en: "A long-standing transcription product." }, fit: { zh: "英文会议、跨平台纪要", en: "English meetings and cross-platform notes" }, why: { zh: "稳定好用，认知成本低。", en: "Reliable and easy to adopt." } },
        { name: "Fireflies.ai", domain: "fireflies.ai", badges: [], desc: { zh: "自动进会、录音、总结和同步协作工具。", en: "Auto-joins meetings, records, summarizes, and syncs downstream." }, fit: { zh: "销售、跨团队同步", en: "Sales and cross-team sync" }, why: { zh: "后续动作衔接强。", en: "Strong downstream workflow integration." } },
        { name: "Fathom", domain: "fathom.video", badges: ["new"], desc: { zh: "适合快速拿到清晰会议摘要和重点片段。", en: "A strong tool for fast meeting summaries and highlight clips." }, fit: { zh: "会后快速回顾", en: "Post-meeting recap" }, why: { zh: "摘要清楚，节省回看时间。", en: "Clear summaries that reduce replay time." } }
      ]
    },
    {
      key: "images",
      color: "var(--pink)",
      icon: "🖼️",
      title: { zh: "图片 / 设计生成", en: "Image / Design Generation" },
      summary: { zh: "做海报、概念图、品牌视觉和配图。", en: "Create posters, concept art, and branded visuals." },
      description: { zh: "适合做海报、概念图、用户画像配图、广告视觉、UI 参考和品牌创意素材。", en: "Use these for posters, concept art, persona imagery, ads, visual references, and branded creative assets." },
      chips: { zh: ["海报", "品牌视觉", "概念图", "设计素材"], en: ["Posters", "Brand visuals", "Concept art", "Design assets"] },
      decisions: {
        zh: [
          ["想要最强审美和质感", "用 Midjourney。"],
          ["想要更贴近中文创作场景", "用即梦。"],
          ["想要设计流程和商业素材协同", "用 Adobe Firefly。"]
        ],
        en: [
          ["Need the strongest visual taste", "Use Midjourney."],
          ["Need a Chinese-first creative workflow", "Use Jimeng."],
          ["Need design-suite integration", "Use Adobe Firefly."]
        ]
      },
      tools: [
        { name: "Midjourney", domain: "midjourney.com", badges: ["top"], desc: { zh: "高质感图片生成代表。", en: "A leading image model for premium aesthetic output." }, fit: { zh: "品牌图、概念图、海报", en: "Brand images, concept art, and posters" }, why: { zh: "审美强，成图“像成品”。", en: "Very strong aesthetic quality out of the box." } },
        { name: "即梦", domain: "jimeng.jianying.com", badges: ["cn", "top"], desc: { zh: "字节系主流生图产品。", en: "A mainstream ByteDance image tool." }, fit: { zh: "中文创作、社媒视觉", en: "Chinese creative work and social visuals" }, why: { zh: "国内好用，门槛低。", en: "Easy to use in China with strong local fit." } },
        { name: "Adobe Firefly", domain: "firefly.adobe.com", badges: [], desc: { zh: "设计师友好的商业图像工具。", en: "A design-friendly commercial image tool." }, fit: { zh: "商业设计、品牌素材", en: "Commercial design and brand assets" }, why: { zh: "与 Adobe 套件配合自然。", en: "Fits naturally with Adobe workflows." } },
        { name: "Ideogram", domain: "ideogram.ai", badges: ["new"], desc: { zh: "在海报、排版和带字视觉上很有特色。", en: "Especially strong for posters, typography, and text-heavy visuals." }, fit: { zh: "封面图、营销图", en: "Cover images and marketing graphics" }, why: { zh: "字效表现好。", en: "Notably good text rendering and typography feel." } }
      ]
    },
    {
      key: "video",
      color: "var(--coral)",
      icon: "🎬",
      title: { zh: "视频 / 语音 / 数字人 / 音乐", en: "Video / Voice / Avatar / Music" },
      summary: { zh: "做视频、配音、数字人和音乐草稿。", en: "Generate video, voice, avatars, and music drafts." },
      description: { zh: "适合做短视频、角色动画、配音、数字人演示和音乐草稿。", en: "Use these for short video generation, motion, avatars, voice, narration, and music drafts." },
      chips: { zh: ["短视频", "数字人", "配音", "音乐"], en: ["Short video", "Avatars", "Voice", "Music"] },
      decisions: {
        zh: [
          ["想做高质量视频生成", "看 Runway、可灵、海螺。"],
          ["想做会说话的人像视频", "用 HeyGen。"],
          ["想要专业级声音", "用 ElevenLabs。"]
        ],
        en: [
          ["Need strong AI video generation", "Look at Runway, Kling, and Hailuo."],
          ["Need talking avatars", "Use HeyGen."],
          ["Need top voice generation", "Use ElevenLabs."]
        ]
      },
      tools: [
        { name: "Runway", domain: "runwayml.com", badges: ["top"], desc: { zh: "国际常见的视频生成与编辑平台。", en: "One of the best-known AI video platforms." }, fit: { zh: "营销视频、概念短片", en: "Marketing videos and concept clips" }, why: { zh: "视频工作流成熟。", en: "Mature workflows with broad creator adoption." } },
        { name: "Kling 可灵", domain: "klingai.com", badges: ["cn", "top"], desc: { zh: "中国主流视频生成产品。", en: "A leading Chinese video generation product." }, fit: { zh: "中文视频创作、角色镜头", en: "Chinese video creation and character motion" }, why: { zh: "国内声量高，效果受关注。", en: "High visibility in China with strong output." } },
        { name: "MiniMax Hailuo", domain: "hailuoai.video", badges: ["cn"], desc: { zh: "MiniMax 的视频方向产品。", en: "MiniMax’s video-focused product." }, fit: { zh: "国内视频创作、多模态内容", en: "Chinese-market video creation and multimodal content" }, why: { zh: "MiniMax 是重要的中国模型公司。", en: "Important because MiniMax is now a major Chinese AI company." } },
        { name: "ElevenLabs", domain: "elevenlabs.io", badges: [], desc: { zh: "主流 AI 语音生成工具。", en: "A leading AI voice tool." }, fit: { zh: "配音、播客、视频旁白", en: "Voiceovers, podcasts, and narration" }, why: { zh: "声音质量高，应用面广。", en: "High-quality voice output with broad use cases." } }
      ]
    },
    {
      key: "coding",
      color: "var(--green)",
      icon: "⌘",
      title: { zh: "编程 / 搭产品", en: "Coding / App Building" },
      summary: { zh: "写代码、改项目、搭原型和小工具。", en: "Code, modify projects, prototype apps, and build tools." },
      description: { zh: "适合写代码、改项目、搭原型、做内部工具和快速生成可运行应用。", en: "Use these to write code, modify projects, prototype apps, and build internal tools quickly." },
      chips: { zh: ["IDE 辅助", "Agent 编程", "原型产品", "低代码建站"], en: ["IDE copilots", "Coding agents", "Product prototyping", "App generation"] },
      decisions: {
        zh: [
          ["想在 IDE 里边写边改", "用 Cursor。"],
          ["想让 AI 像工程师一样动项目", "用 Claude Code 或 Codex。"],
          ["想最快做一个能跑的 App", "用 Lovable、Bolt 或 v0。"]
        ],
        en: [
          ["Need AI inside an IDE", "Use Cursor."],
          ["Need an agent that can operate on a project", "Use Claude Code or Codex."],
          ["Need a running app fast", "Use Lovable, Bolt, or v0."]
        ]
      },
      tools: [
        { name: "Cursor", domain: "cursor.com", badges: ["top"], desc: { zh: "AI 原生 IDE。", en: "An AI-native IDE built for coding against a real codebase." }, fit: { zh: "工程项目、脚本、开发日常", en: "Engineering projects, scripts, and daily coding" }, why: { zh: "对“在 IDE 里工作”的人非常顺手。", en: "Excellent fit for people who already live inside an IDE." } },
        { name: "Claude Code", domain: "anthropic.com", badges: ["top"], desc: { zh: "终端级 AI 编程工具。", en: "A terminal-native coding agent." }, fit: { zh: "改项目、自动修复、脚本", en: "Project editing, automatic fixes, and scripts" }, why: { zh: "Agent 感最强，适合复杂工程任务。", en: "Very agentic and strong for multi-step engineering work." } },
        { name: "Codex", domain: "openai.com", badges: ["top"], desc: { zh: "OpenAI 的 coding agent 产品。", en: "OpenAI’s coding agent product." }, fit: { zh: "复杂编程任务、云端执行", en: "Complex coding tasks and cloud execution" }, why: { zh: "适合“交任务给 AI”的工作方式。", en: "Well-suited to delegated engineering work." } },
        { name: "GitHub Copilot", domain: "github.com", badges: [], desc: { zh: "最主流的 IDE 辅助编程产品之一。", en: "One of the most mainstream coding copilots." }, fit: { zh: "补全、重构、小步开发", en: "Autocomplete, refactors, and incremental coding" }, why: { zh: "集成深、迁移成本低。", en: "Deep integration with low switching cost." } },
        { name: "Lovable", domain: "lovable.dev", badges: ["new"], desc: { zh: "用自然语言生成完整 Web 应用。", en: "Build complete web apps from prompts." }, fit: { zh: "零到一原型、内部工具", en: "0-to-1 prototypes and internal tools" }, why: { zh: "离“产品可用”很近。", en: "Gets surprisingly close to a usable product quickly." } },
        { name: "v0", domain: "v0.dev", badges: ["new"], desc: { zh: "更偏前端 UI 和组件生成。", en: "More front-end focused for UI and React generation." }, fit: { zh: "界面原型、设计转代码", en: "UI prototypes and design-to-code work" }, why: { zh: "适合先把界面搭起来。", en: "Excellent for getting the UI scaffold in place." } }
      ]
    },
    {
      key: "agents",
      color: "var(--coral)",
      icon: "⚙️",
      title: { zh: "工作流 / Agent 平台", en: "Workflow / Agent Platforms" },
      summary: { zh: "把多个步骤串成自动化和 AI 应用。", en: "Connect steps into automations, bots, and AI apps." },
      description: { zh: "把多个工具和模型串起来，做自动化流程、企业 Bot、内部 AI 应用和多步 Agent。", en: "Connect multiple tools and models into automations, AI apps, internal bots, and multi-step agents." },
      chips: { zh: ["多步流程", "自动化", "AI Bot", "企业 AI 应用"], en: ["Multi-step flows", "Automation", "AI bots", "Internal AI apps"] },
      decisions: {
        zh: [
          ["只想简单串几个 SaaS", "用 Zapier。"],
          ["想做复杂流程、可自托管", "用 n8n。"],
          ["想做国内 Bot 和飞书链路", "用 Coze。"],
          ["想做企业知识库助手或 AI 应用", "用 Dify。"]
        ],
        en: [
          ["Need simple SaaS automations", "Use Zapier."],
          ["Need flexible, self-hostable workflows", "Use n8n."],
          ["Need Chinese bot workflows", "Use Coze."],
          ["Need internal AI apps or RAG assistants", "Use Dify."]
        ]
      },
      tools: [
        { name: "n8n", domain: "n8n.io", badges: ["top", "open"], desc: { zh: "灵活的工作流自动化平台。", en: "A very flexible workflow automation tool." }, fit: { zh: "复杂流程、技术团队、自托管", en: "Complex workflows, technical teams, and self-hosting" }, why: { zh: "适合认真做自动化。", en: "Very flexible for serious workflow design." } },
        { name: "Zapier", domain: "zapier.com", badges: ["top"], desc: { zh: "最好上手的 SaaS 自动化工具。", en: "The easiest SaaS automation tool." }, fit: { zh: "非技术用户、轻量自动化", en: "Non-technical users and light automations" }, why: { zh: "最快跑通业务。", en: "Fastest way to get a workflow working." } },
        { name: "Coze 扣子", domain: "coze.cn", badges: ["cn"], desc: { zh: "国内常见的 AI Bot 与 Agent 平台。", en: "A mainstream Chinese bot and agent platform." }, fit: { zh: "国内 Bot、飞书链路", en: "Chinese bots and Feishu-linked workflows" }, why: { zh: "国内生态适配强。", en: "Strong fit for Chinese ecosystems." } },
        { name: "Dify", domain: "dify.ai", badges: ["open"], desc: { zh: "主流开源 AI 应用平台。", en: "A popular open AI app platform." }, fit: { zh: "企业 AI 应用、RAG、私有化", en: "Enterprise AI apps, RAG, and private deployment" }, why: { zh: "把产品化和技术栈连接起来。", en: "Bridges product teams and engineering stacks." } },
        { name: "LangGraph", domain: "langchain.com", badges: ["open"], desc: { zh: "偏开发框架，适合复杂多 Agent 系统。", en: "A developer framework for complex multi-agent systems." }, fit: { zh: "复杂 Agent、生产系统", en: "Complex agents and production systems" }, why: { zh: "更像基础设施，不是即开即用产品。", en: "More infrastructure than end-user product." } },
        { name: "Hermes Agent", domain: "hermesagent.ai", badges: ["new"], desc: { zh: "值得纳入版图的新型 Agent 平台。", en: "A newer agent platform worth tracking." }, fit: { zh: "任务自动化、前沿观察", en: "Task automation and frontier tracking" }, why: { zh: "适合作为新一代 Agent 类产品参考点。", en: "Useful as a reference point for emerging agent platforms." } }
      ]
    },
    {
      key: "knowledge",
      color: "var(--amber)",
      icon: "🗂️",
      title: { zh: "知识库 / 第二大脑 / 企业搜索", en: "Knowledge Base / Second Brain / Enterprise Search" },
      summary: { zh: "沉淀个人和团队知识，方便长期复用。", en: "Store personal and team knowledge for long-term reuse." },
      description: { zh: "用来长期沉淀、组织和检索研究、笔记、文档与内部知识。", en: "Use these to store, organize, and retrieve long-term knowledge across notes, docs, and internal information." },
      chips: { zh: ["知识沉淀", "个人笔记", "团队知识库", "企业搜索"], en: ["Knowledge capture", "Personal notes", "Team repositories", "Enterprise search"] },
      decisions: {
        zh: [
          ["想做个人本地知识库", "用 Obsidian。"],
          ["想做团队共享知识入口", "用飞书知识库或 Glean。"],
          ["想做自动关联的第二大脑", "看 Mem.ai、Tana、Capacities。"]
        ],
        en: [
          ["Need a personal local knowledge system", "Use Obsidian."],
          ["Need a team knowledge layer", "Use Feishu Wiki or Glean."],
          ["Need a connected second-brain tool", "Look at Mem.ai, Tana, and Capacities."]
        ]
      },
      tools: [
        { name: "Obsidian", domain: "obsidian.md", badges: ["top", "local"], desc: { zh: "本地化知识管理代表。", en: "A flagship local knowledge tool." }, fit: { zh: "个人知识库、方法论沉淀", en: "Personal knowledge systems and methods" }, why: { zh: "可控性强，适合认真整理知识的人。", en: "Very flexible for serious personal knowledge work." } },
        { name: "飞书知识库", domain: "feishu.cn", badges: ["cn"], desc: { zh: "飞书团队共享知识的主入口。", en: "Feishu’s team knowledge layer." }, fit: { zh: "研究仓库、项目归档、组织协作", en: "Research repositories, project archives, and collaboration" }, why: { zh: "在国内团队协作环境里很实用。", en: "A practical fit for Chinese teamwork environments." } },
        { name: "Glean", domain: "glean.com", badges: ["enterprise"], desc: { zh: "企业级内部搜索和知识入口。", en: "An enterprise search layer." }, fit: { zh: "跨工具内部知识、企业搜索", en: "Cross-tool internal knowledge and enterprise search" }, why: { zh: "适合公司知识分散在很多系统里的情况。", en: "Excellent when knowledge is fragmented across many tools." } },
        { name: "Mem.ai", domain: "mem.ai", badges: [], desc: { zh: "自动关联笔记和上下文。", en: "An AI note system focused on connected context." }, fit: { zh: "轻量 second brain", en: "Lightweight second-brain workflows" }, why: { zh: "强调“帮你连起来”。", en: "Emphasizes connection over manual organization." } }
      ]
    }
  ],
  homepage: {
    selector: {
      zh: {
        title: "先用选择器缩小范围",
        sub: "先回答几个问题，首页只给你更值得先看的工具。",
        hint: "选好以后再看推荐，首页会更清楚一些。",
        apply: "查看推荐",
        clear: "重置",
        resultsTitle: "推荐工具",
        idle: "先选几个条件，再点“查看推荐”。",
        count: "根据你的选择，这里是更值得先看的 {count} 个工具。",
        empty: "这组条件下暂时没有特别强的匹配，可以放宽一个条件，或者直接浏览分类。"
      },
      en: {
        title: "Use the selector to narrow the market first",
        sub: "Answer a few quick questions and the homepage will surface the tools most worth checking first.",
        hint: "Choose your filters first, then reveal recommendations.",
        apply: "Show recommendations",
        clear: "Reset",
        resultsTitle: "Recommended Tools",
        idle: "Pick a few filters, then click “Show recommendations”.",
        count: "Based on your choices, these are the {count} tools most worth looking at first.",
        empty: "There is no especially strong match for this exact combination yet. Loosen a filter or browse the categories."
      },
      groups: {
        task: {
          zh: "我现在要做什么？",
          en: "What are you trying to do?",
          options: [
            ["all", "不限", "Any"],
            ["live_info", "看最新信息", "Live information"],
            ["own_docs", "看我的材料", "My documents"],
            ["write_report", "写报告 / PPT", "Report / slides"],
            ["make_visuals", "做图 / 视频", "Images / video"],
            ["code_tool", "写代码 / 搭工具", "Code / build tools"],
            ["automate", "跑自动化", "Automation"]
          ]
        },
        source: {
          zh: "信息从哪里来",
          en: "Where should the answer come from?",
          options: [
            ["all", "不限", "Any"],
            ["live_web", "实时网络", "Live web"],
            ["uploaded_files", "我的文档 / PDF", "My files / PDFs"],
            ["model_knowledge", "模型本身", "Model knowledge"],
            ["team_knowledge", "团队知识", "Team knowledge"]
          ]
        },
        output: {
          zh: "我需要什么产出",
          en: "What do you want as output?",
          options: [
            ["all", "不限", "Any"],
            ["answer", "问答 / 总结", "Answer / summary"],
            ["report", "报告 / 幻灯片", "Report / deck"],
            ["visuals", "图片 / 视频", "Images / video"],
            ["code", "代码 / App", "Code / app"],
            ["workflow", "流程 / Bot", "Workflow / bot"]
          ]
        },
        language: {
          zh: "语言 / 场景",
          en: "Language / context",
          options: [
            ["all", "不限", "Any"],
            ["chinese", "中文优先", "Chinese-first"],
            ["global", "全球主流", "Global mainstream"],
            ["enterprise", "团队 / 企业", "Team / enterprise"]
          ]
        }
      }
    },
    hero: {
      zh: {
        eyebrow: "AI Tool Selector Guide",
        title: "先决定你在解决什么问题，再决定用哪个 AI。",
        sub: "这不是一个把工具全堆在一起的榜单，而是一张帮助你更快做选择的地图：先按任务选入口，再按分类深入看产品。",
        metaTitle: "版本信息",
        noteTitle: "怎么用这个网站",
        noteBody: "如果你还不确定从哪类工具开始，就先用首页选择器；如果你已经知道方向，直接从上方导航进入对应类别页面。"
      },
      en: {
        eyebrow: "AI Tool Selector Guide",
        title: "Choose the problem first, then choose the AI.",
        sub: "This is not a flat list of tools. It is a map built to help people decide faster: start with the job, then go deeper by category.",
        metaTitle: "Version",
        noteTitle: "How To Use This Site",
        noteBody: "If you are not sure where to start, begin with the homepage selector. If you already know the lane, jump into a category from the top navigation."
      }
    }
  },
  featured: [
    {
      category: "search",
      label: { zh: "找最新信息", en: "Find live information" },
      title: { zh: "带来源的搜索与深度研究", en: "Source-backed search and deep research" },
      desc: { zh: "适合行业动态、竞品监测和“外面现在发生了什么”。", en: "For industry tracking, competitor scans, and current events." }
    },
    {
      category: "docs",
      label: { zh: "看自己的材料", en: "Use your own material" },
      title: { zh: "只基于你的文档做问答", en: "Ask grounded questions on your own files" },
      desc: { zh: "适合访谈稿、PDF、研究材料和项目知识包。", en: "For interview transcripts, PDFs, research packs, and project material." }
    },
    {
      category: "content",
      label: { zh: "做交付物", en: "Make deliverables" },
      title: { zh: "把分析变成报告、文档和 PPT", en: "Turn analysis into reports, docs, and decks" },
      desc: { zh: "适合周报、提案、PRD、研究总结和视觉表达。", en: "For weekly updates, proposals, PRDs, summaries, and visual communication." }
    },
    {
      category: "coding",
      label: { zh: "写代码 / 搭工具", en: "Code / build tools" },
      title: { zh: "从 IDE 到 agent 编程", en: "From IDE copilots to agentic coding" },
      desc: { zh: "适合脚本、原型、内部工具和复杂工程任务。", en: "For scripts, prototypes, internal tools, and complex engineering work." }
    }
  ],
  navGroups: {
    start: {
      zh: "开始使用",
      en: "Start Here",
      columns: [
        {
          title: { zh: "常见起点", en: "Common Routes" },
          links: [
            { href: "ai_tools_guide.html", title: { zh: "首页选择器", en: "Homepage Selector" }, sub: { zh: "如果你还不确定要看哪类工具，先用选择器缩小范围。", en: "Use the selector first if you are still figuring out the right tool lane." } },
            { href: "ai_category.html?key=search", title: { zh: "看最新行业信息", en: "Find live information" }, sub: { zh: "查实时信息、带引用研究、盯行业动态。", en: "Search the live web, get cited answers, and track current changes." } },
            { href: "ai_category.html?key=docs", title: { zh: "只看我的材料", en: "Ask your own materials" }, sub: { zh: "上传访谈稿、PDF、研究材料和内部资料。", en: "Upload transcripts, PDFs, research packs, and internal docs." } },
            { href: "ai_category.html?key=content", title: { zh: "把工作变成交付物", en: "Turn work into deliverables" }, sub: { zh: "做报告、PPT、PRD 和对外材料。", en: "Make reports, decks, PRDs, and polished outputs." } }
          ]
        },
        {
          title: { zh: "最常见第一站", en: "Most Common First Picks" },
          links: [
            { href: "ai_category.html?key=assistants", title: { zh: "通用 AI 助手", en: "General AI assistants" }, sub: { zh: "从 ChatGPT、Claude、Gemini、Kimi、DeepSeek 开始。", en: "Start with ChatGPT, Claude, Gemini, Kimi, and DeepSeek." } },
            { href: "ai_category.html?key=images", title: { zh: "图片与视觉工具", en: "Image and visual tools" }, sub: { zh: "探索 Midjourney、即梦、Firefly 和设计类工具。", en: "Explore Midjourney, Jimeng, Firefly, and design-first visual tools." } },
            { href: "ai_category.html?key=coding", title: { zh: "编程与搭产品", en: "Coding and app building" }, sub: { zh: "看 IDE copilots、agent 编程和原型产品工具。", en: "Find IDE copilots, coding agents, and fast prototyping products." } },
            { href: "ai_category.html?key=agents", title: { zh: "自动化与 Agent", en: "Automation and agents" }, sub: { zh: "连接流程、Bot 和内部 AI 应用。", en: "Connect workflows, bots, and internal AI apps." } }
          ]
        }
      ]
    },
    browse: {
      zh: "浏览分类",
      en: "Browse Categories",
      columns: [
        {
          title: { zh: "产品层", en: "Product Layers" },
          links: [
            { href: "ai_category.html?key=assistants", title: { zh: "通用 AI 助手", en: "Everyday AI Assistants" }, sub: { zh: "日常问答、写作、翻译和思考辅助。", en: "General-purpose tools for asking, writing, translating, and thinking." } },
            { href: "ai_category.html?key=search", title: { zh: "搜索 / 深度研究", en: "Search / Deep Research" }, sub: { zh: "看实时网页、带引用回答和市场监测。", en: "Live web search, source-backed answers, and monitoring." } },
            { href: "ai_category.html?key=docs", title: { zh: "文档型研究", en: "Document-grounded Research" }, sub: { zh: "从你的资料里做问答和提炼洞察。", en: "AI that answers from your own materials." } },
            { href: "ai_category.html?key=content", title: { zh: "写作 / 文档 / 幻灯片", en: "Writing / Docs / Slides" }, sub: { zh: "把想法变成可发出去的交付物。", en: "Turn ideas into deliverables people can actually use." } },
            { href: "ai_category.html?key=meetings", title: { zh: "会议 / 转录", en: "Meetings / Transcription" }, sub: { zh: "记录访谈、纪要和行动项。", en: "Capture interviews, notes, and action items." } },
            { href: "ai_category.html?key=knowledge", title: { zh: "知识库 / 第二大脑", en: "Knowledge Base / Second Brain" }, sub: { zh: "长期沉淀、组织和检索知识。", en: "Store, organize, and retrieve long-term knowledge." } }
          ]
        },
        {
          title: { zh: "创作与搭建", en: "Creation + Build" },
          links: [
            { href: "ai_category.html?key=images", title: { zh: "图片 / 设计生成", en: "Image / Design Generation" }, sub: { zh: "海报、概念图、品牌视觉和设计素材。", en: "Posters, concept art, brand visuals, and design assets." } },
            { href: "ai_category.html?key=video", title: { zh: "视频 / 语音 / 音乐", en: "Video / Voice / Music" }, sub: { zh: "短视频、数字人、配音和音乐草稿。", en: "Short videos, avatars, voiceovers, and music drafts." } },
            { href: "ai_category.html?key=coding", title: { zh: "编程 / 搭产品", en: "Coding / App Building" }, sub: { zh: "写代码、改项目、搭原型和内部工具。", en: "Write code, modify projects, and build tools or prototypes." } },
            { href: "ai_category.html?key=agents", title: { zh: "工作流 / Agent 平台", en: "Workflow / Agent Platforms" }, sub: { zh: "自动化流程、Bot、内部 AI 应用。", en: "Automations, bots, and internal AI apps." } },
            { href: "ai_category.html?key=scraping", title: { zh: "网页数据采集", en: "Web Data Collection" }, sub: { zh: "把网页变成结构化数据或模型可读上下文。", en: "Turn websites into structured data or LLM-ready context." } },
            { href: "ai_category.html?key=models", title: { zh: "模型图谱", en: "Model Taxonomy" }, sub: { zh: "理解产品背后的旗舰、开源和中国模型。", en: "Understand the engines under the products." } }
          ]
        }
      ]
    }
  },
  recommendations: [
    { name: "ChatGPT", domain: "chatgpt.com", category: "assistants", task: ["live_info", "write_report"], source: ["model_knowledge", "live_web"], output: ["answer", "report"], language: ["global"], desc: { zh: "最通用的默认入口，适合日常问答、写作和研究打底。", en: "The broadest default entry point for everyday Q&A, writing, and general research." }, why: { zh: "如果你不确定从哪一个开始，它很少会错。", en: "A very safe first stop when you are not sure where to begin." } },
    { name: "Claude", domain: "claude.ai", category: "assistants", task: ["write_report", "own_docs"], source: ["model_knowledge", "uploaded_files"], output: ["answer", "report"], language: ["global"], desc: { zh: "长文写作和归纳提炼特别强，适合把材料变成清楚表达。", en: "Especially strong for long-form writing, synthesis, and turning messy material into clear expression." }, why: { zh: "适合报告、邮件、框架表达。", en: "A strong choice for reports, memos, and structured reasoning." } },
    { name: "Perplexity", domain: "perplexity.ai", category: "search", task: ["live_info"], source: ["live_web"], output: ["answer", "report"], language: ["global"], desc: { zh: "看最新信息最快的入口，搜索和引用都很直接。", en: "One of the fastest ways to get live information with sources and citations." }, why: { zh: "特别适合“外面现在发生了什么”。", en: "Especially good for “what is happening right now?” questions." } },
    { name: "Genspark", domain: "genspark.ai", category: "search", task: ["live_info", "write_report"], source: ["live_web"], output: ["answer", "report"], language: ["global"], desc: { zh: "更像把搜索做成研究包，适合专题整理。", en: "More like turning search into a research packet or topic brief." }, why: { zh: "想把研究直接做成成品时很合适。", en: "A good fit when you want research to become a deliverable quickly." } },
    { name: "NotebookLM", domain: "notebooklm.google.com", category: "docs", task: ["own_docs"], source: ["uploaded_files"], output: ["answer", "report"], language: ["global"], desc: { zh: "最适合“只基于我的文档回答”的入口。", en: "One of the clearest tools for answering only from your own uploaded files." }, why: { zh: "访谈稿、PDF、研究材料在这类场景里很顺。", en: "Excellent for interviews, PDFs, and research packs." } },
    { name: "Gamma", domain: "gamma.app", category: "content", task: ["write_report"], source: ["model_knowledge", "uploaded_files"], output: ["report"], language: ["global"], desc: { zh: "把想法和材料快速变成 PPT 或文档。", en: "Turns ideas and material into a deck or document very quickly." }, why: { zh: "如果你要的是可发出去的版本，它很快。", en: "Great when the output needs to look presentable fast." } },
    { name: "Canva AI", domain: "canva.com", category: "content", task: ["write_report", "make_visuals"], source: ["model_knowledge"], output: ["report", "visuals"], language: ["global"], desc: { zh: "适合把报告、演示和视觉表达一起做清楚。", en: "Good for combining reports, presentations, and visual polish in one place." }, why: { zh: "非设计师也可以做出比较稳的视觉效果。", en: "A practical way to make polished visuals without being a designer." } },
    { name: "Midjourney", domain: "midjourney.com", category: "images", task: ["make_visuals"], source: ["model_knowledge"], output: ["visuals"], language: ["global"], desc: { zh: "更偏高质感图片和品牌视觉。", en: "Best known for premium-looking imagery and aesthetic visual generation." }, why: { zh: "想要图片有“成品感”时，常常先看它。", en: "A strong first stop when you need images that already feel polished." } },
    { name: "即梦", domain: "jimeng.jianying.com", category: "images", task: ["make_visuals"], source: ["model_knowledge"], output: ["visuals"], language: ["chinese"], desc: { zh: "中文生图场景里很主流，适合国内内容和社媒画面。", en: "A mainstream Chinese image tool for social, content, and domestic creative workflows." }, why: { zh: "中文提示词和国内内容语境更贴合。", en: "A better fit for Chinese prompts and local creative contexts." } },
    { name: "Runway", domain: "runwayml.com", category: "video", task: ["make_visuals"], source: ["model_knowledge"], output: ["visuals"], language: ["global"], desc: { zh: "做短视频和创意画面比较常见的主流选择。", en: "A mainstream choice for creative AI video and short-form visual generation." }, why: { zh: "如果你想做动的内容，它是很好的入口。", en: "A solid entry point when you need moving visuals rather than still images." } },
    { name: "Cursor", domain: "cursor.com", category: "coding", task: ["code_tool"], source: ["model_knowledge"], output: ["code"], language: ["global"], desc: { zh: "如果你是在 IDE 里边写边改，它是最主流的入口之一。", en: "One of the main default choices if you want AI inside an IDE." }, why: { zh: "适合用代码库上下文来写、改、查。", en: "Strong when you want codebase-aware editing and iteration." } },
    { name: "Claude Code", domain: "anthropic.com", category: "coding", task: ["code_tool", "automate"], source: ["model_knowledge"], output: ["code", "workflow"], language: ["global"], desc: { zh: "更像一个会动项目的 AI 编程助手。", en: "Feels more like a coding agent that can operate on a project." }, why: { zh: "如果你想让 AI 自己去读文件、改代码、跑命令，它很合适。", en: "Good when you want the AI to read files, edit code, and run commands." } },
    { name: "n8n", domain: "n8n.io", category: "agents", task: ["automate"], source: ["live_web", "uploaded_files", "team_knowledge"], output: ["workflow"], language: ["enterprise", "global"], desc: { zh: "把多个步骤串成流程的主流工具，适合认真做自动化。", en: "A mainstream way to connect many steps into a real workflow or automation." }, why: { zh: "适合把抓取、分析、推送、审批都串起来。", en: "Great for connecting scrape, analyze, publish, and follow-up steps." } },
    { name: "Zapier", domain: "zapier.com", category: "agents", task: ["automate"], source: ["live_web", "team_knowledge"], output: ["workflow"], language: ["global"], desc: { zh: "最好上手的轻量自动化工具，适合非技术用户。", en: "The easiest lightweight automation tool for non-technical users." }, why: { zh: "如果你只是想把两三个工具串起来，它很快。", en: "Ideal when you just want to connect a few tools quickly." } },
    { name: "Dify", domain: "dify.ai", category: "agents", task: ["automate", "own_docs"], source: ["uploaded_files", "team_knowledge"], output: ["workflow", "answer"], language: ["enterprise", "global"], desc: { zh: "偏做内部 AI 应用和知识库助手，适合团队使用。", en: "More focused on internal AI apps and knowledge assistants for teams." }, why: { zh: "如果你想搭团队用的 AI 助手，它很值得先看。", en: "Worth checking first when the end goal is a team-facing AI assistant." } }
  ]
};
