import React from "react";
import headerIllustration from "../images/header-illustration-dark.svg";
import heroMediaDark from "../images/hero-media-dark.svg";
import heroMediaIllustration from "../images/hero-media-illustration-dark.svg";
import { Container, Layout } from "../ui";
function LandingPage() {
  return (
    <div style={{ height: "100vh", background: "#202d3f" }}>
      <Layout>
        <header>app header</header>
        <main>
          <section className="hero">
            <Container>
              <div className="inner-hero">
                <div className="hero-left">a</div>
                <div className="hero-media">
                  <div className="header-illustration">
                    <img
                      className="header-illustration-image asset-dark"
                      src={headerIllustration}
                      alt="Header illustration"
                    />
                  </div>
                  <div className="hero-media-illustration">
                    <img
                      className="hero-media-illustration-image asset-dark"
                      src={heroMediaIllustration}
                      alt="Hero media illustration"
                    />
                  </div>
                  <div className="hero-media-container">
                    <img className="hero-media-image asset-dark" src={heroMediaDark} alt="Hero media" />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default LandingPage;
