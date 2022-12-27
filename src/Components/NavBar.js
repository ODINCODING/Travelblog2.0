import "./NavBar.css";
import MobileDropDown from "./MobileMenu";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io" />
        <img src="./images/Heart.png" width="70" height="10" />

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">🏠Home</a>

          <a className="navbar-item">📍Locations</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">🙋🏻‍♂️About</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">🙋🏻‍♂️Me</a>
              <a className="navbar-item">📬Contact Me</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">⚡️Report an issue⚡️</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark">
                <strong>Sign up</strong>
              </a>
              <a className="button is-dark">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
