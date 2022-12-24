import "./NavBar.css";

function NavBar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io" />
        <img src="./images/Heart.png" width="80" height="14" />

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Locations</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">About</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Me</a>
              <a class="navbar-item">Contact Me</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">
                <strong>Sign up</strong>
              </a>
              <a class="button is-dark">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
