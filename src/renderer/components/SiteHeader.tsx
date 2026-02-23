import { CONTACT_EMAIL, NAV_TABS, RESUME_PDF_PATH } from "../content/siteContent";
import type { NavTab } from "../types";

type SiteHeaderProps = {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
};

export function SiteHeader({ activeTab, onSelectTab }: SiteHeaderProps): JSX.Element {
  return (
    <header className="top-nav">
      <div className="brand">Chance Dare</div>
      <nav aria-label="Primary sections">
        {NAV_TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
            type="button"
            aria-pressed={activeTab === tab.id}
            onClick={() => onSelectTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="nav-actions">
        <a className="nav-resume" href={RESUME_PDF_PATH} target="_blank" rel="noreferrer">
          Resume PDF
        </a>
        <a className="status-pill" href={`mailto:${CONTACT_EMAIL}`} aria-label="Email Chance Dare">
          Contact
        </a>
      </div>
    </header>
  );
}
