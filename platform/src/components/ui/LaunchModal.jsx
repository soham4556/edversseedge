import { useEffect, useState } from "react";

function LaunchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const shown = sessionStorage.getItem("launchModalShown");
      if (!shown) {
        // show on first page load this session
        setTimeout(() => setOpen(true), 280);
        sessionStorage.setItem("launchModalShown", "1");
      }
    } catch (e) {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="launch-overlay" role="dialog" aria-modal="true">
      <div className="launch-card">
        <button
          className="launch-close"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
        <div className="launch-top">
          <img
            src="/src/assets/icons/android.svg"
            alt="App"
            className="launch-icon"
          />
          <div>
            <h3>Get EdversseEDGE on your phone</h3>
            <p className="muted">
              Learn on-the-go: live classes, tests, mentor chat and progress
              tracking.
            </p>
          </div>
        </div>

        <p className="launch-message">
          Give your child the edge — immediate access to daily practice,
          personalised feedback, and mentor support. Download the app and start
          a free trial today.
        </p>

        <div className="launch-actions">
          <a className="btn btn-primary" href="/download">
            Download App
          </a>
          <button className="btn btn-ghost" onClick={() => setOpen(false)}>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaunchModal;
