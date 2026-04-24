import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="section page-container">
      <div className="detail-card">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <NavLink to="/" className="text-link">
          Go back to Home
        </NavLink>
      </div>
    </section>
  );
}

export default NotFoundPage;
