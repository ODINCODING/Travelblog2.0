import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io" />
        <img src="./images/Heart.png" width="70" height="10" />
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <i class="fa-solid fa-house"></i> Home
          </a>
          <a className="navbar-item">
            <i class="fa-solid fa-location-dot"></i> Locations
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <i class="fa-solid fa-user-secret"></i> About
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                <i class="fa-regular fa-user-bounty-hunter"></i>Me
              </a>
              <a className="navbar-item">
                {" "}
                <i class="fa-solid fa-message-middle"></i>Contact Me
              </a>
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
