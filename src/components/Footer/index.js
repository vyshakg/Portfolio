import React from "react";
import logo from "../../images/logo.png";
import { Container } from "../../ui";
import { ProjectPara } from "../../ui/fontColor";

export default function Footer() {
  return (
    <footer style={{ height: "9rem" }} className="has-top-divider">
      <Container>
        <div className="site-footer-inner">
          <div className="footer-brand">
            <a href="/">
              <img src={logo} alt="Logo" className="logo-img-footer" />
            </a>

            <ProjectPara>© 2019 Portfolio - Build using React JS</ProjectPara>
          </div>
        </div>
      </Container>
    </footer>
  );
}
