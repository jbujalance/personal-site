import { MouseEvent } from 'react';

const Navbar = () => {
  const toggleBurguer = (event: MouseEvent) => {
    document.querySelector('#burger')?.classList.toggle('is-active');
    document.querySelector('#navbarmenu')?.classList.toggle('is-active');
  };
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          id="burger"
          onClick={toggleBurguer}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarmenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarmenu" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="#about">
            <span className="icon">
              <i className="fas fa-info"></i>
            </span>
            <span>About</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;