import nameLogo from "../assets/images/nameLogo.png";
import logo from "../assets/images/logo.png";
import "../assets/css/header.css";
import resume from "../assets/Anna_Brisland_Resume.pdf";

export default function Header({ isMobile, handleScroll }) {
  let currentPage = "home";
  if (window.document.URL.includes("about")) {
    currentPage = "about";
  } else if (window.document.URL.includes("contact")) {
    currentPage = "contact";
  }

  const activeLink = currentPage;

  if (isMobile) {
    <nav className="floating">
      <ul className="header-menu-list">
        <li className="header-menu-item">
          <a
            className={`header-menu-link ${
              activeLink === "home" ? "header-menu-current" : ""
            }`}
            href="/"
          >
            Home
          </a>
        </li>
        <li className="header-menu-item">
          <a
            className={`header-menu-link ${
              activeLink === "contact" ? "header-menu-current" : ""
            }`}
            href="/contact"
          >
            Contact
          </a>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link" href={resume} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>;
  }

  return (
    <header>
      <div className="header-items">
        <a href="/">
          <img className="name-logo" src={nameLogo} alt=""></img>
        </a>
        <nav className="floating">
          <ul className="header-menu-list">
            <li className="header-menu-item">
              <a
                className={`header-menu-link ${
                  activeLink === "home" ? "header-menu-current" : ""
                }`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="header-menu-item">
              <a
                className={`header-menu-link ${
                  activeLink === "contact" ? "header-menu-current" : ""
                }`}
                onClick={handleScroll}
              >
                Contact
              </a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href={resume} target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <img className="header-logo" alt="" src={logo}></img>
        </div>
      </div>
    </header>
  );
}
