(function () {
  const DATA = window.AI_TOOL_SITE_DATA;
  if (!DATA) return;

  const SITE_LANG_KEY = "ai-tool-site-lang";
  let currentLang = localStorage.getItem(SITE_LANG_KEY) || "zh";
  let currentFilters = { task: "all", source: "all", output: "all", language: "all" };
  let hasApplied = false;

  function t(obj) {
    if (!obj) return "";
    return typeof obj === "string" ? obj : obj[currentLang];
  }

  function favicon(domain) {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  }

  function getCategory(key) {
    return DATA.categories.find((category) => category.key === key) || DATA.categories[0];
  }

    function hrefCategoryKey(href) {
    try {
      return new URL(href, location.href).searchParams.get("key");
    } catch (error) {
      return null;
    }
  }

  function linkIcon(link) {
    const categoryKey = hrefCategoryKey(link.href);
    const category = categoryKey ? getCategory(categoryKey) : null;
    return category?.icon || "AI";
  }

  function queryPageType() {
    return document.body.dataset.page || "home";
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(SITE_LANG_KEY, lang);
    render();
  }

  function bindLangSwitch() {
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.langBtn === currentLang);
      btn.onclick = () => setLang(btn.dataset.langBtn);
    });
  }

  function renderTopbar() {
    const navRoot = document.getElementById("topbar-root");
    if (!navRoot) return;

    const start = DATA.navGroups.start;
    const browse = DATA.navGroups.browse;

    navRoot.innerHTML = `
      <div class="topbar-wrap">
        <div class="topbar">
          <a class="brand" href="./">
            <div class="brand-mark">AI</div>
            <div>
              <div class="brand-title">AI Tool Selector</div>
              <div class="brand-sub">${currentLang === "zh" ? "Choose faster. Browse deeper." : "Choose faster. Browse deeper."}</div>
            </div>
          </a>
          <div class="mega-nav">
            ${renderMegaGroup(start, "start")}
            ${renderMegaGroup(browse, "browse")}
            <div class="mega-item">
              <a class="mega-trigger" href="ai_category.html?key=models">${currentLang === "zh" ? "模型" : "Models"}</a>
            </div>
          </div>
          <div class="topbar-actions">
            <div class="lang-switch">
              <button class="lang-btn" data-lang-btn="zh">中文</button>
              <button class="lang-btn" data-lang-btn="en">English</button>
            </div>
          </div>
        </div>
      </div>
    `;

    bindMegaMenus();
    bindLangSwitch();
  }

  function renderMegaGroup(group, key) {
    return `
      <div class="mega-item" data-mega="${key}">
        <button class="mega-trigger" type="button">${t(group)}</button>
        <div class="mega-panel">
          <div class="mega-grid">
            ${group.columns.map((column) => `
              <div>
                <div class="mega-col-title">${t(column.title)}</div>
                <div class="mega-links">
                  ${column.links.map((link) => `
                    <a class="mega-link" href="${link.href}">
                      <div class="mega-link-head">
                        <span class="inline-icon">${linkIcon(link)}</span>
                        <div class="mega-link-title">${t(link.title)}</div>
                      </div>
                      <div class="mega-link-sub">${t(link.sub)}</div>
                    </a>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function bindMegaMenus() {
    const items = document.querySelectorAll(".mega-item[data-mega]");
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        if (window.innerWidth > 700) item.classList.add("active");
      });
      item.addEventListener("mouseleave", () => {
        if (window.innerWidth > 700) item.classList.remove("active");
      });
      const trigger = item.querySelector(".mega-trigger");
      trigger?.addEventListener("click", (event) => {
        if (window.innerWidth <= 700) {
          event.preventDefault();
          items.forEach((other) => { if (other !== item) other.classList.remove("active"); });
          item.classList.toggle("active");
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".mega-item")) {
        items.forEach((item) => item.classList.remove("active"));
      }
    });
  }

  function renderFooter() {
    const footer = document.getElementById("footer-root");
    if (!footer) return;
    footer.innerHTML = `
      <div class="footer">
        <span>${currentLang === "zh" ? `AI 工具选型指南 · ${DATA.version}` : `AI Tool Selector Guide · ${DATA.version}`}</span>
        <span>${currentLang === "zh" ? `更新于 ${DATA.updated} · 12 个分类` : `Updated ${DATA.updated} · 12 categories`}</span>
        <span>${currentLang === "zh" ? "静态站点 · 多页面结构" : "Static site · Multi-page structure"}</span>
      </div>
    `;
  }

  function renderHome() {
    const hero = DATA.homepage.hero[currentLang];
    document.getElementById("home-root").innerHTML = `
      <section class="hero">
        <div class="hero-grid">
          <div>
            <div class="eyebrow">${hero.eyebrow}</div>
            <h1>${hero.title}</h1>
            <p class="hero-sub">${hero.sub}</p>
          </div>
          <div class="hero-meta">
            <div class="hero-meta-title">${hero.metaTitle}</div>
            <div class="hero-meta-copy">${currentLang === "zh" ? `版本 ${DATA.version}\n更新时间 ${DATA.updated}\n12 个分类 · 多页面结构` : `Version ${DATA.version}\nUpdated ${DATA.updated}\n12 categories · multi-page structure`}</div>
          </div>
        </div>
        <div class="hero-note">
          <div class="hero-note-title">${hero.noteTitle}</div>
          <p>${hero.noteBody}</p>
        </div>
      </section>
      ${renderSelector()}
      <section class="section-space panel">
        <div class="section-heading">
          <div>
            <div class="section-title">${currentLang === "zh" ? "先看这些高频入口" : "Start with these common routes"}</div>
            <div class="section-sub">${currentLang === "zh" ? "如果你只是想知道“先从哪看起”，先看这四类。" : "If you only want to know where to start first, begin with these four routes."}</div>
          </div>
        </div>
        <div class="card-grid">
          ${DATA.featured.map((item) => {
            const category = getCategory(item.category);
            return `
              <div class="feature-card">
                <div class="feature-icon" style="color:${category.color}">${category.icon}</div>
                <div class="feature-topline">${t(item.label)}</div>
                <div class="feature-title">${t(item.title)}</div>
                <div class="feature-desc">${t(item.desc)}</div>
                <a class="feature-link" href="ai_category.html?key=${item.category}">
                  ${currentLang === "zh" ? `进入 ${t(category.title)}` : `Open ${t(category.title)}`}
                </a>
              </div>
            `;
          }).join("")}
        </div>
      </section>
      <section class="section-space panel">
        <div class="section-heading">
          <div>
            <div class="section-title">${currentLang === "zh" ? "完整分类表" : "Full Taxonomy"}</div>
            <div class="section-sub">${currentLang === "zh" ? "当你已经知道任务方向，再用这张表快速定位更细的工具带。" : "Once you know the task direction, use this table to zoom into the right tool lane."}</div>
          </div>
        </div>
        <table class="overview-table">
          <thead>
            <tr>
              <th>${currentLang === "zh" ? "分类" : "Category"}</th>
              <th>${currentLang === "zh" ? "这类工具是干什么的" : "What It Covers"}</th>
              <th>${currentLang === "zh" ? "优先认识" : "Start With"}</th>
            </tr>
          </thead>
          <tbody>
            ${DATA.categories.map((category) => `
              <tr>
                <td><a class="overview-row-name category-title-row" href="ai_category.html?key=${category.key}"><span class="inline-icon" style="color:${category.color}">${category.icon}</span><span>${t(category.title)}</span></a></td>
                <td class="overview-row-desc">${t(category.summary)}</td>
                <td class="overview-row-picks">${category.tools.slice(0, 3).map((tool) => tool.name).join(" / ")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
    `;

    bindFilterButtons();
  }

  function renderSelector() {
    const copy = DATA.homepage.selector[currentLang];
    const groups = DATA.homepage.selector.groups;
    return `
      <section class="selector-panel">
        <div class="section-heading">
          <div>
            <div class="section-title">${copy.title}</div>
            <div class="section-sub">${copy.sub}</div>
          </div>
          <button class="ghost-btn" id="clear-filters">${copy.clear}</button>
        </div>
        <div class="filter-stack">
          ${Object.entries(groups).map(([groupKey, group]) => `
            <div class="filter-group">
              <div class="filter-label">${group[currentLang]}</div>
              <div class="filter-pills">
                ${group.options.map(([value, zh, en]) => `
                  <button class="filter-pill ${currentFilters[groupKey] === value ? "active" : ""}" data-filter-group="${groupKey}" data-filter-value="${value}">
                    ${currentLang === "zh" ? zh : en}
                  </button>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <div class="selector-actions">
          <div class="selector-hint">${copy.hint}</div>
          <button class="primary-btn" id="apply-filters">${copy.apply}</button>
        </div>
        <div class="section-space">
          <div class="section-title" style="font-size:0.92rem; margin-bottom:6px;">${copy.resultsTitle}</div>
          <div class="result-summary" id="selector-result-summary">${copy.idle}</div>
          <div class="result-grid" id="selector-results"></div>
        </div>
      </section>
    `;
  }

  function bindFilterButtons() {
    document.querySelectorAll("[data-filter-group]").forEach((button) => {
      button.onclick = () => {
        currentFilters[button.dataset.filterGroup] = button.dataset.filterValue;
        renderHome();
      };
    });

    document.getElementById("clear-filters")?.addEventListener("click", () => {
      currentFilters = { task: "all", source: "all", output: "all", language: "all" };
      hasApplied = false;
      renderHome();
    });

    document.getElementById("apply-filters")?.addEventListener("click", () => {
      hasApplied = true;
      renderRecommendationResults();
    });

    renderRecommendationResults();
  }

  function renderRecommendationResults() {
    const summaryEl = document.getElementById("selector-result-summary");
    const resultsEl = document.getElementById("selector-results");
    if (!summaryEl || !resultsEl) return;

    const copy = DATA.homepage.selector[currentLang];
    if (!hasApplied) {
      summaryEl.textContent = copy.idle;
      resultsEl.innerHTML = "";
      return;
    }

    let results = DATA.recommendations.filter((rec) => {
      return Object.entries(currentFilters).every(([group, value]) => value === "all" || (rec[group] || []).includes(value));
    });

    results = results.map((rec) => ({
      ...rec,
      score: Object.entries(currentFilters).reduce((acc, [group, value]) => {
        return value !== "all" && (rec[group] || []).includes(value) ? acc + 1 : acc;
      }, 0)
    })).sort((a, b) => b.score - a.score);

    if (!results.length) {
      summaryEl.textContent = copy.empty;
      resultsEl.innerHTML = "";
      return;
    }

    const topResults = results.slice(0, 6);
    summaryEl.textContent = copy.count.replace("{count}", topResults.length);
    resultsEl.innerHTML = topResults.map((rec) => `
      <div class="result-card">
        <div class="result-top">
          <div class="result-id">
            <img class="result-logo" src="${favicon(rec.domain)}" alt="${rec.name}">
            <div class="result-name">${rec.name}</div>
          </div>
          <div class="result-category">${t(getCategory(rec.category).title)}</div>
        </div>
        <div class="result-desc">${t(rec.desc)}</div>
        <div class="result-why">${t(rec.why)}</div>
      </div>
    `).join("");
  }

  function renderCategoryPage() {
    const key = new URLSearchParams(location.search).get("key") || "assistants";
    const category = getCategory(key);
    const root = document.getElementById("category-root");
    if (!root) return;

    root.innerHTML = `
      <section class="page-header">
        <a class="page-back" href="./">${currentLang === "zh" ? "← 返回首页选择器" : "← Back to homepage selector"}</a>
        <div class="page-hero">
          <div class="eyebrow">${currentLang === "zh" ? "Category Page" : "Category Page"}</div>
          <div class="page-hero-icon" style="color:${category.color}">${category.icon}</div>
          <h1>${t(category.title)}</h1>
          <p class="page-hero-sub">${t(category.description)}</p>
          <div class="chip-row">
            ${category.chips[currentLang].map((chip) => `<span class="chip">${chip}</span>`).join("")}
          </div>
        </div>
      </section>
      <section class="panel">
        <div class="section-heading">
          <div>
            <div class="section-title">${currentLang === "zh" ? "这一类里先看这些工具" : "Start with these tools in this category"}</div>
            <div class="section-sub">${t(category.summary)}</div>
          </div>
        </div>
        <div class="tool-grid">
          ${category.tools.map((tool) => renderToolCard(tool)).join("")}
        </div>
      </section>
      <section class="section-space panel">
        <div class="section-heading">
          <div>
            <div class="section-title">${currentLang === "zh" ? "怎么选" : "How to choose"}</div>
            <div class="section-sub">${currentLang === "zh" ? "如果你已经知道自己在这类工具里找答案，先看这些判断规则。" : "If you already know this is the right lane, use these rules to narrow your choice."}</div>
          </div>
        </div>
        <div class="decision-grid">
          ${category.decisions[currentLang].map(([q, a]) => `
            <div class="decision-card">
              <div class="decision-q">${q}</div>
              <div class="decision-a">${a}</div>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="section-space panel">
        <div class="section-heading">
          <div>
            <div class="section-title">${currentLang === "zh" ? "继续浏览相邻分类" : "Keep browsing adjacent categories"}</div>
            <div class="section-sub">${currentLang === "zh" ? "如果这一页不是你最终想要的答案，从这些相邻页面继续看。" : "If this page is close but not quite right, continue from these adjacent pages."}</div>
          </div>
        </div>
        <div class="card-grid">
          ${DATA.categories.filter((item) => item.key !== category.key).slice(0, 4).map((item) => `
            <div class="feature-card">
              <div class="feature-icon" style="color:${item.color}">${item.icon}</div>
              <div class="feature-title">${t(item.title)}</div>
              <div class="feature-desc">${t(item.summary)}</div>
              <a class="feature-link" href="ai_category.html?key=${item.key}">
                ${currentLang === "zh" ? "打开这个分类" : "Open this category"}
              </a>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderToolCard(tool) {
    return `
      <div class="tool-card">
        <div class="tool-top">
          <div class="tool-id">
            <img class="tool-logo" src="${favicon(tool.domain)}" alt="${tool.name}">
            <div class="tool-name">${tool.name}</div>
          </div>
          <div class="badges">
            ${(tool.badges || []).map((badge) => `<span class="badge badge-${badge}">${renderBadgeLabel(badge)}</span>`).join("")}
          </div>
        </div>
        <div class="tool-desc">${t(tool.desc)}</div>
        <div class="tool-detail">
          <div class="detail-row">
            <div class="detail-label">${currentLang === "zh" ? "适合" : "Best For"}</div>
            <div>${t(tool.fit)}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">${currentLang === "zh" ? "看点" : "Why"}</div>
            <div>${t(tool.why)}</div>
          </div>
        </div>
      </div>
    `;
  }

  function renderBadgeLabel(badge) {
    const labels = {
      zh: { top: "推荐", cn: "中文", open: "开放", enterprise: "企业", new: "新兴", local: "本地" },
      en: { top: "Top Pick", cn: "China", open: "Open", enterprise: "Enterprise", new: "New", local: "Local" }
    };
    return labels[currentLang][badge] || badge;
  }

  function render() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
    renderTopbar();
    renderFooter();
    if (queryPageType() === "home") {
      renderHome();
    } else {
      renderCategoryPage();
    }
  }

  render();
})();
