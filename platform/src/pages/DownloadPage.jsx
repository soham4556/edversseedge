function DownloadPage() {
  return (
    <section className="section page-container">
      <div className="section-heading">
        <h2>Download the EdversseEDGE App</h2>
        <p>
          Get live classes, tests, progress tracking and mentor support on your
          phone.
        </p>
      </div>

      <div className="download-hero">
        <div className="download-left">
          <h3>Study smarter — anywhere</h3>
          <p className="muted">
            Our app brings classroom learning, tests and mentor support together
            in one place. Perfect for busy students and parents who want
            measurable progress.
          </p>

          <a
            className="app-badge large"
            href="https://play.google.com/store/apps/details?id=co.jones.ytnzp&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/android.svg" alt="Android" />
            <div>
              <div style={{ fontWeight: 800 }}>Get it on Google Play</div>
              <div className="muted">Tap to download the EdversseEDGE app</div>
            </div>
          </a>

          <ul className="download-features">
            <li>Live + recorded classes</li>
            <li>Daily practice and mock tests</li>
            <li>Personalised mentor tracking</li>
            <li>Progress dashboard and analytics</li>
          </ul>
        </div>

        <div className="download-right">
          <div className="phone-mock">
            <img
              src="/icons/unnamed.webp"
              alt="App preview"
              className="phone-screen-img"
            />
          </div>
          <p className="muted small">
            Available on Android. Install and sign in using your admission code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DownloadPage;
