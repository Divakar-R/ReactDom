import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/" className="lin">
              AI
            </Link>
          </li>
          <li>
            <Link to="/cyber-security" className="lin">
              Cyber Security
            </Link>
          </li>
          <li>
            <Link to="/full-stack" className="lin">
              Full Stack
            </Link>
          </li>
          <li>
            <Link to="/data-science" className="lin">
              Data Science
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
