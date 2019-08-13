import React from "react";
import logo from "../../images/logo.png";
import { Container } from "../../ui";

export default function Footer() {
  return (
    <footer style={{ height: "9rem" }} className="has-top-divider">
      <Container>
        <div className="site-footer-inner">
          <div className="footer-brand">
            <a href="/">
              <img src={logo} alt="Logo" className="logo-img-footer" />
            </a>

            <p className="project-para">
              © 2019 Portfolio - Build using React JS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
