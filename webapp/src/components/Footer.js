import "../assets/css/footer.css";
import { forwardRef } from "react";

function Footer(props, ref) {
  return (
    <footer>
      <div ref={ref} className="footer-container">
        <h2 className="footer-heading">Have a good day!</h2>
        <ul className="contact-list">
          <li className="contact-list-item">
            <a
              className="footer-item"
              target="_blank"
              href="https://github.com/annabrisland"
            >
              Github
            </a>
          </li>
          <li className="contact-list-item">
            <a
              className="footer-item"
              target="_blank"
              href="https://www.linkedin.com/in/anna-brisland/"
            >
              LinkedIn
            </a>
          </li>
          <li className="contact-list-item">
            <a className="footer-item" href="mailto:annabrisland@gmail.com">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default forwardRef(Footer);