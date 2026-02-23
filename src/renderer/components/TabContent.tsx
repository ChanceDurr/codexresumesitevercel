import {
  embeddedConceptProjects,
  embeddedLearningLog,
  embeddedLearningPreview,
  embeddedProjectIdeas,
  embeddedRoadmap,
  featuredByTab,
  highlightsByTab,
  programmingWorkflowPreview,
  TAB_THEME_CLASSES,
  timelineEntries
} from "../content/siteContent";
import { photoAssets } from "../lib/photoAssets";
import type { EmbeddedLearningLogEntry, FeaturedProject, NavTab, TimelineEntry } from "../types";
import { PhotoTile } from "./PhotoTile";

type TabContentProps = {
  activeTab: NavTab;
  onOpenPhoto: (index: number) => void;
};

function HighlightsStrip({ activeTab }: { activeTab: NavTab }): JSX.Element | null {
  if (activeTab === "photography") {
    return null;
  }

  return (
    <section className="highlights-strip">
      {highlightsByTab[activeTab].map((item) => (
        <article className="highlight-card" key={`${item.label}-${item.value}`}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}

function ProgrammingPanels(): JSX.Element {
  return (
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
          Primary coding language is Python. I also build with other languages when needed using strong AI-assisted
          workflows for rapid prototyping and delivery.
        </p>
        <div className="mock-terminal" aria-label="Programming workflow preview">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <code>chance@portfolio:~/projects</code>
          </div>
          <pre>{programmingWorkflowPreview}</pre>
        </div>
      </article>

      <article className="panel code-panel">
        <h2>Education + Workflow</h2>
        <div className="entry">
          <h3>BloomTech Institute (formerly Lambda School)</h3>
          <p>
            Completed online training in Data Science and Machine Learning, including Python, SQL/databases,
            statistics, data visualization, and machine learning workflows.
          </p>
        </div>
        <div className="entry">
          <h3>AI-Native Development</h3>
          <p>
            Proficient vibe coder across multiple languages with AI-assisted development. This website was created
            using ChatGPT Codex.
          </p>
        </div>
        <div className="code-tag-list">
          <code>python scripts/automation.py</code>
          <code>npm run build</code>
          <code>git commit -m "ship feature"</code>
        </div>
      </article>
    </section>
  );
}

function BasPanels(): JSX.Element {
  return (
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
          Delivered BAS work from project kickoff through startup and turnover, including engineering coordination,
          controls programming, graphics, and field execution.
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
            Owned full-scope BAS responsibilities: project management, project engineering, material acquisition,
            programming, graphics development, startup, and commissioning.
          </p>
        </div>
        <div className="entry">
          <h3>Project Scale + Systems</h3>
          <p>Executed both small jobs and large million-dollar projects using Alerton and Delta Controls platforms.</p>
        </div>
        <div className="entry">
          <h3>Apprentice Electrician | Pre-Engineering Specialist</h3>
          <p>
            Built field fundamentals through installation support, troubleshooting assistance, device/panel
            terminations, and code-driven safety execution on active job sites.
          </p>
        </div>
      </article>
    </section>
  );
}

function CadPanels(): JSX.Element {
  return (
    <section className="panel-grid">
      <article className="panel cad-panel">
        <h2>CAD Capabilities</h2>
        <div className="chip-row">
          <span className="chip">Drafting Standards</span>
          <span className="chip">As-Builts</span>
          <span className="chip">Revision Control</span>
          <span className="chip">Sheet Production</span>
        </div>
        <p>Develop clean, accurate drawing packages with strict attention to quality and constructability.</p>
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
            <span className="dim-tag one">24&apos;-0&quot;</span>
            <span className="dim-tag two">12&apos;-6&quot;</span>
          </div>
        </section>
      </article>

      <article className="panel cad-panel">
        <h2>Professional Timeline</h2>
        <div className="entry">
          <h3>CAD Technician | Dec 2025 - Current</h3>
          <p>
            Produce and revise CAD drawings, maintain standards, and coordinate with engineers so issued drawings are
            complete and field-ready.
          </p>
        </div>
        <div className="entry">
          <h3>Engineering Specialist | Oct 2022 - Dec 2025</h3>
          <p>Supported technical documentation and cross-team execution, improving quality and delivery consistency.</p>
        </div>
      </article>
    </section>
  );
}

function formatConfidence(confidence?: number): string | null {
  if (!confidence) {
    return null;
  }
  return `${confidence}/5 confidence`;
}

function EmbeddedLogMeta({ entry }: { entry: EmbeddedLearningLogEntry }): JSX.Element {
  const confidenceLabel = formatConfidence(entry.confidence);

  return (
    <div className="learning-log-meta">
      <span className={`log-status status-${entry.status.toLowerCase().replace(/\s+/g, "-")}`}>{entry.status}</span>
      {entry.board && <span className="log-pill">{entry.board}</span>}
      {confidenceLabel && <span className="log-pill">{confidenceLabel}</span>}
      {entry.tags?.map((tag) => (
        <span className="log-pill" key={`${entry.id}-${tag}`}>
          #{tag}
        </span>
      ))}
    </div>
  );
}

function EmbeddedProjectMap(): JSX.Element {
  return (
    <section className="panel embedded-panel">
      <h2>Concept Projects (STM32IDE_Workspace)</h2>
      <p>
        One project per learning concept keeps each lab easy to revisit, debug, and show. This map mirrors the
        `AGENTS.md` learning plan so each project ties to a phase and checklist items.
      </p>
      <div className="embedded-project-map">
        {embeddedConceptProjects.map((project) => (
          <article className="embedded-project-card" key={project.id}>
            <div className="embedded-project-head">
              <div>
                <span className="entry-time">{project.phase}</span>
                <h3>{project.concept}</h3>
              </div>
              <span className={`log-status status-${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
                {project.status}
              </span>
            </div>

            <p>
              <strong>Workspace project:</strong> <code>{project.workspaceProject}</code>
            </p>
            {project.board && (
              <p>
                <strong>Board:</strong> {project.board}
              </p>
            )}
            <p>
              <strong>Summary:</strong> {project.summary}
            </p>
            <p>
              <strong>Proof:</strong> {project.proof}
            </p>

            <div className="embedded-project-subsection">
              <strong>Learning plan correlation</strong>
              <ul className="embedded-project-list">
                {project.learningPlanItems.map((item) => (
                  <li key={`${project.id}-${item}`}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="embedded-project-subsection">
              <strong>Source paths</strong>
              <div className="code-tag-list embedded-path-list">
                {project.sourcePaths.map((path) => (
                  <code key={`${project.id}-${path}`}>{path}</code>
                ))}
              </div>
            </div>

            {project.codeSample && (
              <details className="embedded-code-details">
                <summary>{project.codeSample.title}</summary>
                <p className="embedded-code-path">
                  <strong>File:</strong> <code>{project.codeSample.filePath}</code>
                </p>
                <pre className="embedded-code-block">
                  <code>{project.codeSample.code}</code>
                </pre>
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function EmbeddedPanels(): JSX.Element {
  return (
    <>
      <section className="panel-grid embedded-grid">
        <article className="panel embedded-panel">
          <h2>Learning Focus</h2>
          <div className="chip-row">
            <span className="chip">STM32</span>
            <span className="chip">Embedded C</span>
            <span className="chip">C++</span>
            <span className="chip">UART</span>
            <span className="chip">Timers</span>
            <span className="chip">Interrupts</span>
            <span className="chip">Debugging</span>
            <span className="chip">Documentation</span>
          </div>
          <p>
            This page is the working hub for documenting my embedded engineering learning process. I want to track what
            I study, what breaks, and what I fix while learning STM32 and embedded C/C++.
          </p>
          <div className="mock-terminal embedded-terminal" aria-label="Embedded learning session preview">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
              <code>stm32-lab/session-log.txt</code>
            </div>
            <pre>{embeddedLearningPreview}</pre>
          </div>
        </article>

        <article className="panel embedded-panel">
          <h2>Roadmap</h2>
          <div className="roadmap-list">
            {embeddedRoadmap.map((stage) => (
              <article className="roadmap-step" key={stage.stage}>
                <header>
                  <h3>{stage.stage}</h3>
                  <span className={`roadmap-status ${stage.status === "In Progress" ? "is-active" : ""}`}>
                    {stage.status}
                  </span>
                </header>
                <p>{stage.items}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="panel embedded-panel">
        <h2>Learning System</h2>
        <p>
          The workflow is now organized around a project-per-concept approach in `STM32IDE_Workspace`, with each lab
          mapped back to the learning plan and documented here with code snapshots.
        </p>
      </section>

      <EmbeddedProjectMap />

      <section className="panel embedded-panel">
        <h2>Learning Log</h2>
        <p>
          Quick session entries keep progress visible even before I write polished project posts. Each entry is
          structured so it can later become a full project write-up or reference note.
        </p>
        <div className="learning-log-list">
          {embeddedLearningLog.map((entry) => (
            <article className="learning-log-item" key={entry.id}>
              <div className="learning-log-head">
                <span className="entry-time">{entry.date}</span>
                <h3>{entry.topic}</h3>
              </div>
              <EmbeddedLogMeta entry={entry} />
              <p>
                <strong>Learned:</strong> {entry.learned}
              </p>
              <p>
                <strong>Blocker:</strong> {entry.blocker}
              </p>
              <p>
                <strong>Next step:</strong> {entry.nextStep}
              </p>
              {entry.tools && entry.tools.length > 0 && (
                <p>
                  <strong>Tools:</strong> {entry.tools.join(", ")}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="panel embedded-panel">
        <h2>Planned Embedded Projects</h2>
        <div className="featured-grid">
          {embeddedProjectIdeas.map((item) => (
            <article className="featured-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>
                <strong>Focus:</strong> {item.role}
              </p>
              <p>
                <strong>Goal:</strong> {item.outcome}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PhotographyPanel({ onOpenPhoto }: { onOpenPhoto: (index: number) => void }): JSX.Element {
  return (
    <section className="panel photo-gallery">
      <h2>Photography Portfolio</h2>
      {photoAssets.length > 0 ? (
        <div className="photo-grid">
          {photoAssets.map((asset, index) => (
            <PhotoTile key={asset.key} asset={asset} onOpen={() => onOpenPhoto(index)} />
          ))}
        </div>
      ) : (
        <p>
          Add photos to <code>src/renderer/photos</code>, run <code>npm run optimize:photos</code>, then restart
          dev/build to load them here.
        </p>
      )}
    </section>
  );
}

function FeaturedWorkPanel({ items }: { items: FeaturedProject[] }): JSX.Element {
  return (
    <section className="panel">
      <h2>Featured Work</h2>
      <div className="featured-grid">
        {items.map((item) => (
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
  );
}

function TimelinePanel({ items }: { items: TimelineEntry[] }): JSX.Element {
  return (
    <section className="panel timeline-panel">
      <h2>Career Timeline</h2>
      <div className="timeline-list">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.date}-${item.title}`}>
            <span className="timeline-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CoreResumeTabSections({ activeTab }: { activeTab: Exclude<NavTab, "embedded" | "photography"> }): JSX.Element {
  return (
    <>
      <FeaturedWorkPanel items={featuredByTab[activeTab]} />
      <TimelinePanel items={timelineEntries} />
    </>
  );
}

export function TabContent({ activeTab, onOpenPhoto }: TabContentProps): JSX.Element {
  const themeClass = TAB_THEME_CLASSES[activeTab] ?? "";
  const coreResumeTab =
    activeTab === "programming" || activeTab === "bas" || activeTab === "cad" ? activeTab : null;

  return (
    <div className={`tab-stage ${themeClass}`} key={activeTab}>
      <HighlightsStrip activeTab={activeTab} />

      {activeTab === "programming" && <ProgrammingPanels />}
      {activeTab === "embedded" && <EmbeddedPanels />}
      {activeTab === "bas" && <BasPanels />}
      {activeTab === "cad" && <CadPanels />}
      {activeTab === "photography" && <PhotographyPanel onOpenPhoto={onOpenPhoto} />}

      {coreResumeTab && <CoreResumeTabSections activeTab={coreResumeTab} />}
    </div>
  );
}
