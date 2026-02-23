import { CONTACT_EMAIL, GITHUB_URL, pageMeta } from "../content/siteContent";
import type { NavTab } from "../types";

type HeroCardProps = {
  activeTab: NavTab;
};

export function HeroCard({ activeTab }: HeroCardProps): JSX.Element {
  return (
    <section className="hero-card">
      <p className="eyebrow">{activeTab === "embedded" ? "Learning In Public" : "Multi-Disciplinary Resume"}</p>
      <h1>{pageMeta[activeTab].title}</h1>
      <p className="hero-copy">{pageMeta[activeTab].subtitle}</p>
      <div className="action-row">
        <a className="primary-btn" href={`mailto:${CONTACT_EMAIL}`}>
          Email: {CONTACT_EMAIL}
        </a>
        {activeTab === "programming" && (
          <a className="secondary-btn" href={GITHUB_URL} target="_blank" rel="noreferrer">
            github.com/chancedurr
          </a>
        )}
      </div>
    </section>
  );
}
