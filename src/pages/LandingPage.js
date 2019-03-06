import React, { useRef } from "react";
import AskQuestion from "../components/AskQuestion";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import logo from "../images/logo.png";
import { Container, Layout } from "../ui";
function LandingPage() {
  const projectRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <div style={{ height: "100%", background: "#202d3f" }}>
      <Layout>
        <header className="site-header" />

        <main>
          <Hero projectRef={projectRef} contactsRef={contactsRef} />
          <Portfolio projectRef={projectRef} />
          <Contacts contactsRef={contactsRef} />
          <AskQuestion />
        </main>
        <footer style={{ height: "9rem" }} className="has-top-divider">
          <Container>
            <div className="site-footer-inner">
              <div class="footer-brand">
                <a href="/">
                  <img class="asset-dark" src={logo} alt="Logo" className="logo-img-footer" />
                </a>
                <p className="project-para">© 2019 Portfolio</p>
              </div>
            </div>
          </Container>
        </footer>
      </Layout>
    </div>
  );
}

export default LandingPage;
