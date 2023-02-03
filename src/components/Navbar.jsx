import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Navbar = ({ title }) => {
  const { isLogged, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    signout();
    navigate("/");
  };

  return (
    <header>
      <nav className="container">
        <ul>
          <li>
            <a href="/">
              <strong>{title}</strong>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            {isLogged ? (
              <details role="list" dir="rtl">
                <summary aria-haspopup="listbox" role="link">
                  <svg width="24" height="24" fill="none" stroke="currentColor">
                    <use href="./node_modules/feather-icons/dist/feather-sprite.svg#user" />
                  </svg>
                </summary>
                <ul role="listbox">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/account">Account</Link>
                  </li>
                  <hr />
                  <li>
                    <button onClick={handleClick}>Log out</button>
                  </li>
                </ul>
              </details>
            ) : (
              <Link to="/login" role="button">
                Log in
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
