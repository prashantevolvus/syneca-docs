import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">Syneca Master Documentation</h1>
        <p className="hero__subtitle">
          A centralized entry point for every Syneca audience—functional leaders, developers, and channel partners.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary" to="/functional/intro">
            Functional Docs
          </Link>
          <Link className="button button--secondary button--outline" to="/developer/intro">
            Developer Docs
          </Link>
          <Link className="button button--secondary button--outline" to="/channel-partner/intro">
            Channel Partner Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Syneca Documentation" description="Master documentation site for Syneca">
      <HomepageHeader />
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--4">
            <h2>Functional Enablement</h2>
            <p>
              Explore end-user journeys, release notes, and governance checklists to drive adoption across business teams.
            </p>
          </div>
          <div className="col col--4">
            <h2>Developer Resources</h2>
            <p>
              Access API documentation, architecture guidance, and environment setup instructions to ship confidently.
            </p>
          </div>
          <div className="col col--4">
            <h2>Channel Partner Success</h2>
            <p>
              Unlock enablement assets, program requirements, and sales playbooks designed for partner growth.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
