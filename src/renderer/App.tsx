import { useEffect, useRef, useState } from "react";

type NavTab = "programming" | "bas" | "cad" | "photography";

type Highlight = {
  label: string;
  value: string;
};

type FeaturedProject = {
  title: string;
  role: string;
  outcome: string;
};

type PhotoVariant = {
  width: number;
  load: () => Promise<string>;
};

type PhotoAsset = {
  key: string;
  variants: PhotoVariant[];
};

const pageMeta: Record<NavTab, { title: string; subtitle: string }> = {
  programming: {
    title: "Programming Background",
    subtitle: "Python-first background with formal data science and ML training."
  },
  bas: {
    title: "BAS Controls Background",
    subtitle: "End-to-end BAS delivery across field execution, engineering, and commissioning."
  },
  cad: {
    title: "CAD Background",
    subtitle: "Production-ready drafting, standards, and engineering package quality."
  },
  photography: {
    title: "Photography",
    subtitle: "Portfolio gallery."
  }
};

const highlightsByTab: Record<NavTab, Highlight[]> = {
  programming: [
    { label: "Primary Language", value: "Python" },
    { label: "Training", value: "BloomTech Data Science + ML" },
    { label: "Approach", value: "AI-assisted rapid delivery" }
  ],
  bas: [
    { label: "Role Scope", value: "PM + Engineering + Commissioning" },
    { label: "Systems", value: "Alerton + Delta Controls" },
    { label: "Project Size", value: "Small jobs to $1M+" }
  ],
  cad: [
    { label: "Current Role", value: "CAD Technician" },
    { label: "Strength", value: "Standards + revisions + quality" },
    { label: "Timeline", value: "Dec 2025 - Current" }
  ],
  photography: [
    { label: "Focus", value: "Portfolio growth" },
    { label: "Layout", value: "Responsive image grid" },
    { label: "Viewer", value: "Full-screen lightbox" }
  ]
};

const featuredByTab: Record<NavTab, FeaturedProject[]> = {
  programming: [
    {
      title: "Portfolio + Resume Web App",
      role: "Built a modern multi-tab React interface with AI-assisted workflows.",
      outcome: "Shipped quickly with strong UX polish and maintainable structure."
    },
    {
      title: "Automation-First Coding Workflow",
      role: "Use Python and cross-language AI support for rapid prototyping.",
      outcome: "Faster iteration while preserving practical, production-ready output."
    }
  ],
  bas: [
    {
      title: "Full-Scope BAS Delivery",
      role: "Owned PM, engineering, material procurement, programming, graphics, startup, commissioning.",
      outcome: "Delivered complete BAS projects from kickoff through turnover."
    },
    {
      title: "Multi-Scale BAS Execution",
      role: "Executed both smaller jobs and large million-dollar initiatives.",
      outcome: "Consistent quality and execution across varying project complexity."
    }
  ],
  cad: [
    {
      title: "CAD Package Production",
      role: "Create and revise drawings with strict drafting standards.",
      outcome: "Issued packages that are accurate, coordinated, and field-ready."
    },
    {
      title: "Cross-Team Drawing Coordination",
      role: "Work directly with engineering teams on revisions and as-builts.",
      outcome: "Reduced rework and improved clarity across deliverables."
    }
  ],
  photography: [
    {
      title: "Photography Portfolio Buildout",
      role: "Structured a clean gallery-first presentation for visual work.",
      outcome: "Easy to expand with new shoots and client-ready image browsing."
    },
    {
      title: "Lightbox Viewing Experience",
      role: "Added full-screen image viewing with keyboard navigation.",
      outcome: "More polished presentation and better image focus for visitors."
    }
  ]
};

const timelineEntries = [
  {
    date: "Dec 2025 - Current",
    title: "CAD Technician",
    detail: "Produce and revise CAD drawings, maintain standards, and coordinate engineering updates."
  },
  {
    date: "Oct 2022 - Dec 2025",
    title: "Engineering Specialist (BAS)",
    detail: "Handled BAS project management, engineering, controls programming, graphics, startup, and commissioning."
  },
  {
    date: "Before Oct 2022",
    title: "Apprentice Electrician",
    detail:
      "Supported field installation and troubleshooting, pulled wire, assisted with panel and device terminations, and followed code/safety requirements while learning practical electrical workflows."
  },
  {
    date: "Earlier",
    title: "Programming + Data Science Training",
    detail: "Completed BloomTech Institute (formerly Lambda School) training in Data Science and Machine Learning."
  },
  {
    date: "Straight Out of High School",
    title: "AVTEC Industrial Electricity",
    detail:
      "Completed AVTEC's 1080-hour Industrial Electricity program covering AC/DC power distribution, wiring methods, motor controls, electronics, and NEC-based hands-on practice."
  }
];

const optimizedPhotoModules = import.meta.glob("./photos/optimized/*.webp", {
  import: "default"
}) as Record<string, () => Promise<string>>;

const RESUME_PDF_PATH = "/Chance-Dare-Resume.pdf";
const photoCaptions: Record<string, string> = {
  DSC00344: "Morning Light Over the Landscape",
  DSC00345: "Quiet Horizon With Soft Contrast",
  DSC00352: "Golden Hour Texture and Depth",
  DSC00356: "Open Sky and Natural Geometry",
  DSC00360: "Moody Frame With Balanced Light",
  DSC00375: "Layered Distance and Clean Composition",
  DSC00384: "Ambient Tones and Atmospheric Detail",
  DSC00404: "Strong Lines and Natural Framing",
  DSC00409: "Subtle Color Story in Motion",
  DSC00412: "Foreground Contrast, Background Calm",
  DSC00417: "High-Detail Scene With Depth",
  DSC00419: "Cinematic Balance of Light and Shadow",
  DSC00420: "Wide Composition With Bold Presence",
  DSC01432: "Signature Shot: Texture, Tone, and Scale"
};

function getPhotoKey(path: string): string {
  const file = path.split("/").pop() ?? "Photo";
  const noExt = file.replace(/\.[^/.]+$/, "");
  return noExt.replace(/_(\d+)$/, "");
}

function getPhotoLabel(key: string): string {
  const mappedCaption = photoCaptions[key];
  if (mappedCaption) {
    return mappedCaption;
  }
  const cleaned = key.replace(/[_-]+/g, " ").trim();
  const dscMatch = cleaned.match(/^DSC\s*0*(\d+)$/i);
  if (dscMatch) {
    return `Photo ${dscMatch[1]}`;
  }
  return cleaned.replace(/\b\w/g, (c) => c.toUpperCase());
}

function getVariantWidth(path: string): number | null {
  const match = path.match(/_(\d+)\.webp$/i);
  return match ? Number(match[1]) : null;
}

const photoAssets: PhotoAsset[] = (() => {
  const grouped = new Map<string, PhotoAsset>();

  for (const [path, load] of Object.entries(optimizedPhotoModules)) {
    const key = getPhotoKey(path);
    const width = getVariantWidth(path);
    if (!width) {
      continue;
    }
    const current = grouped.get(key) ?? { key, variants: [] };
    current.variants.push({ width, load });
    grouped.set(key, current);
  }

  return Array.from(grouped.values())
    .map((asset) => ({
      ...asset,
      variants: asset.variants.sort((a, b) => a.width - b.width)
    }))
    .sort((a, b) => a.key.localeCompare(b.key));
})();

function pickVariant(asset: PhotoAsset, targetWidth: number): PhotoVariant | null {
  if (asset.variants.length === 0) {
    return null;
  }
  return asset.variants.find((v) => v.width >= targetWidth) ?? asset.variants[asset.variants.length - 1];
}

function PhotoTile({
  asset,
  onOpen
}: {
  asset: PhotoAsset;
  onOpen: () => void;
}): JSX.Element {
  const tileRef = useRef<HTMLElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const node = tileRef.current;
    if (!node || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || src) {
      return;
    }

    const preview = pickVariant(asset, 640);
    if (preview) {
      void preview.load().then((resolvedSrc) => setSrc(resolvedSrc));
    }
  }, [asset, shouldLoad, src]);

  return (
    <figure
      className="photo-tile"
      ref={tileRef}
      role="button"
      tabIndex={0}
      aria-label={`Open ${getPhotoLabel(asset.key)}`}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      {src ? (
        <img src={src} alt={getPhotoLabel(asset.key)} loading="lazy" decoding="async" />
      ) : (
        <div className="photo-placeholder" aria-hidden="true" />
      )}
    </figure>
  );
}

function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<NavTab>("programming");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (index: number): void => {
    const asset = photoAssets[index];
    if (!asset) {
      return;
    }

    setLightboxIndex(index);
    const best = pickVariant(asset, 1600);
    if (best) {
      void best.load().then((src) => setLightboxSrc(src));
    }
  };

  const moveLightbox = (delta: number): void => {
    if (lightboxIndex === null || photoAssets.length === 0) {
      return;
    }

    const nextIndex = (lightboxIndex + delta + photoAssets.length) % photoAssets.length;
    openLightbox(nextIndex);
  };

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
        setLightboxSrc(null);
      }
      if (event.key === "ArrowRight") {
        moveLightbox(1);
      }
      if (event.key === "ArrowLeft") {
        moveLightbox(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="bg-glow bg-glow-one" />
      <div className="bg-glow bg-glow-two" />

      <header className="top-nav">
        <div className="brand">Chance Dare</div>
        <nav aria-label="Primary">
          <a
            className={activeTab === "programming" ? "active" : ""}
            href="#"
            aria-current={activeTab === "programming" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("programming");
            }}
          >
            Programming
          </a>
          <a
            className={activeTab === "bas" ? "active" : ""}
            href="#"
            aria-current={activeTab === "bas" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("bas");
            }}
          >
            BAS Controls
          </a>
          <a
            className={activeTab === "cad" ? "active" : ""}
            href="#"
            aria-current={activeTab === "cad" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("cad");
            }}
          >
            CAD
          </a>
          <a
            className={activeTab === "photography" ? "active" : ""}
            href="#"
            aria-current={activeTab === "photography" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("photography");
            }}
          >
            Photography
          </a>
        </nav>
        <div className="nav-actions">
          <a className="nav-resume" href={RESUME_PDF_PATH} target="_blank" rel="noreferrer">
            Resume PDF
          </a>
          <a className="status-pill" href="mailto:chancedurr@gmail.com" aria-label="Email Chance Dare">
            Contact
          </a>
        </div>
      </header>

      <main className="content-wrap" id="main-content" tabIndex={-1}>
        <section className="hero-card">
          <p className="eyebrow">Multi-Disciplinary Resume</p>
          <h1>{pageMeta[activeTab].title}</h1>
          <p className="hero-copy">{pageMeta[activeTab].subtitle}</p>
          <div className="action-row">
            <a className="primary-btn" href="mailto:chancedurr@gmail.com">
              Email: chancedurr@gmail.com
            </a>
            {activeTab === "programming" && (
              <a className="secondary-btn" href="https://github.com/chancedurr" target="_blank" rel="noreferrer">
                github.com/chancedurr
              </a>
            )}
          </div>
        </section>
        <div
          className={`tab-stage ${activeTab === "programming" ? "programming-theme" : ""} ${activeTab === "bas" ? "bas-theme" : ""} ${activeTab === "cad" ? "cad-theme" : ""}`}
          key={activeTab}
        >
          {activeTab !== "photography" && (
            <section className="highlights-strip">
              {highlightsByTab[activeTab].map((item) => (
                <article className="highlight-card" key={`${item.label}-${item.value}`}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </section>
          )}

          {activeTab === "programming" && (
            <section className="panel-grid">
              <article className="panel terminal-panel">
                <h2>Core Stack</h2>
                <div className="chip-row">
                  <span className="chip">Python</span>
                  <span className="chip">Pandas</span>
                  <span className="chip">SQL</span>
                  <span className="chip">Data Science</span>
                  <span className="chip">Machine Learning</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">Automation</span>
                  <span className="chip">AI-Assisted Development</span>
                </div>
                <p>
                  Primary coding language is Python. I also build with other
                  languages when needed using strong AI-assisted workflows for
                  rapid prototyping and delivery.
                </p>
                <div className="mock-terminal" aria-label="Programming workflow preview">
                  <div className="terminal-bar">
                    <span />
                    <span />
                    <span />
                    <code>chance@portfolio:~/projects</code>
                  </div>
                  <pre>
{`$ python -m pipeline.train
loaded_dataset=customer_events
features=48 model=xgboost
validation_auc=0.92
status=deploy-ready`}
                  </pre>
                </div>
              </article>
              <article className="panel code-panel">
                <h2>Education + Workflow</h2>
                <div className="entry">
                  <h3>BloomTech Institute (formerly Lambda School)</h3>
                  <p>
                    Completed online training in Data Science and Machine
                    Learning, including Python, SQL/databases, statistics, data
                    visualization, and machine learning workflows.
                  </p>
                </div>
                <div className="entry">
                  <h3>AI-Native Development</h3>
                  <p>
                    Proficient vibe coder across multiple languages with
                    AI-assisted development. This website was created using
                    ChatGPT Codex.
                  </p>
                </div>
                <div className="code-tag-list">
                  <code>python scripts/automation.py</code>
                  <code>npm run build</code>
                  <code>git commit -m \"ship feature\"</code>
                </div>
              </article>
            </section>
          )}

          {activeTab === "bas" && (
            <section className="panel-grid">
              <article className="panel bas-panel">
                <h2>Core BAS Skills</h2>
                <div className="chip-row">
                  <span className="chip">Controls Logic</span>
                  <span className="chip">Project Management</span>
                  <span className="chip">Project Engineering</span>
                  <span className="chip">Material Procurement</span>
                  <span className="chip">Graphics</span>
                  <span className="chip">Commissioning</span>
                  <span className="chip">Point Mapping</span>
                  <span className="chip">Troubleshooting</span>
                  <span className="chip">Alerton</span>
                  <span className="chip">Delta Controls</span>
                </div>
                <p>
                  Delivered BAS work from project kickoff through startup and
                  turnover, including engineering coordination, controls
                  programming, graphics, and field execution.
                </p>
                <section className="bas-console" aria-label="BAS system overview">
                  <header className="bas-console-head">
                    <span className="bas-dot online" />
                    <strong>Building Automation Overview</strong>
                  </header>
                  <div className="bas-grid">
                    <article className="bas-node">
                      <span>AHU-1</span>
                      <strong>Online</strong>
                    </article>
                    <article className="bas-node">
                      <span>CHW Loop</span>
                      <strong>Stable</strong>
                    </article>
                    <article className="bas-node">
                      <span>VAV Network</span>
                      <strong>Connected</strong>
                    </article>
                  </div>
                  <div className="bas-trend">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </section>
              </article>
              <article className="panel bas-panel">
                <h2>Practical Experience</h2>
                <div className="entry">
                  <h3>Engineering Specialist | Oct 2022 - Dec 2025</h3>
                  <p>
                    Owned full-scope BAS responsibilities: project management,
                    project engineering, material acquisition, programming,
                    graphics development, startup, and commissioning.
                  </p>
                </div>
                <div className="entry">
                  <h3>Project Scale + Systems</h3>
                  <p>
                    Executed both small jobs and large million-dollar projects
                    using Alerton and Delta Controls platforms.
                  </p>
                </div>
                <div className="entry">
                  <h3>Apprentice Electrician | Pre-Engineering Specialist</h3>
                  <p>
                    Built field fundamentals through installation support,
                    troubleshooting assistance, device/panel terminations, and
                    code-driven safety execution on active job sites.
                  </p>
                </div>
              </article>
            </section>
          )}

          {activeTab === "cad" && (
            <section className="panel-grid">
              <article className="panel cad-panel">
                <h2>CAD Capabilities</h2>
                <div className="chip-row">
                  <span className="chip">Drafting Standards</span>
                  <span className="chip">As-Builts</span>
                  <span className="chip">Revision Control</span>
                  <span className="chip">Sheet Production</span>
                </div>
                <p>
                  Develop clean, accurate drawing packages with strict attention
                  to quality and constructability.
                </p>
                <section className="blueprint-card" aria-label="CAD sheet preview">
                  <header>
                    <strong>Sheet A2.14</strong>
                    <span>Rev C</span>
                  </header>
                  <div className="blueprint-grid">
                    <span className="line h one" />
                    <span className="line h two" />
                    <span className="line v one" />
                    <span className="line v two" />
                    <span className="dim-tag one">24'-0"</span>
                    <span className="dim-tag two">12'-6"</span>
                  </div>
                </section>
              </article>
              <article className="panel cad-panel">
                <h2>Professional Timeline</h2>
                <div className="entry">
                  <h3>CAD Technician | Dec 2025 - Current</h3>
                  <p>
                    Produce and revise CAD drawings, maintain standards, and
                    coordinate with engineers so issued drawings are complete and
                    field-ready.
                  </p>
                </div>
                <div className="entry">
                  <h3>Engineering Specialist | Oct 2022 - Dec 2025</h3>
                  <p>
                    Supported technical documentation and cross-team execution,
                    improving quality and delivery consistency.
                  </p>
                </div>
              </article>
            </section>
          )}

          {activeTab === "photography" && (
            <section className="panel photo-gallery">
              <h2>Photography Portfolio</h2>
              {photoAssets.length > 0 ? (
                <div className="photo-grid">
                  {photoAssets.map((asset, index) => (
                    <PhotoTile key={asset.key} asset={asset} onOpen={() => openLightbox(index)} />
                  ))}
                </div>
              ) : (
                <p>
                  Add photos to <code>src/renderer/photos</code>, run <code>npm run optimize:photos</code>, then restart
                  dev/build to load them here.
                </p>
              )}
            </section>
          )}

          {activeTab !== "photography" && (
            <section className="panel">
              <h2>Featured Work</h2>
              <div className="featured-grid">
                {featuredByTab[activeTab].map((item) => (
                  <article className="featured-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>
                      <strong>Role:</strong> {item.role}
                    </p>
                    <p>
                      <strong>Outcome:</strong> {item.outcome}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {activeTab !== "photography" && (
            <section className="panel timeline-panel">
              <h2>Career Timeline</h2>
              <div className="timeline-list">
                {timelineEntries.map((item) => (
                  <article className="timeline-item" key={`${item.date}-${item.title}`}>
                    <span className="timeline-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setLightboxIndex(null);
            setLightboxSrc(null);
          }}
        >
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close image viewer"
              onClick={() => setLightboxIndex(null)}
            >
              Close
            </button>
            <button className="lightbox-nav left" type="button" aria-label="Previous photo" onClick={() => moveLightbox(-1)}>
              Prev
            </button>
            <div className="lightbox-media">
              {lightboxSrc ? (
                <>
                  <img
                    src={lightboxSrc}
                    alt={getPhotoLabel(photoAssets[lightboxIndex]?.key ?? "Photo")}
                    decoding="async"
                  />
                  <p className="lightbox-caption">{getPhotoLabel(photoAssets[lightboxIndex]?.key ?? "Photo")}</p>
                </>
              ) : (
                <div className="photo-placeholder" />
              )}
            </div>
            <button className="lightbox-nav right" type="button" aria-label="Next photo" onClick={() => moveLightbox(1)}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
