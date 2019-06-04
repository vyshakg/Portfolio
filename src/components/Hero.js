import React from "react";
import headerIllustration from "../images/header-illustration-dark.svg";
import heroMediaDark from "../images/hero-media-dark-me.svg";
import heroMediaIllustration from "../images/hero-media-illustration-dark.svg";
import { Container } from "../ui";

function Hero({ projectRef, contactsRef }) {
  return (
    <section className="hero">
      <Container>
        <div className="inner-hero">
          <div className="hero-left">
            <h1 className="hero-tag">Hey, I'm</h1>
            <h1 className="hero-name">Vyshak G</h1>
            <span className="hero-dash" />
            <p className="hero-para">
              Software Engineer | Full Stack Web Developer | Nodejs | React.js and GraphQL Enthusiast
            </p>
            <div className="hero-links">
              <span className="hero-link-helper">Find Me on</span>
              <a href="https://github.com/vyshakg" target="_blank" rel="noopener noreferrer" alt="github">
                <i className="fab fa-github" style={{ color: "white", marginRight: "20px", fontSize: "28px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/vyshak-g-gowda/"
                target="_blank"
                rel="noopener noreferrer"
                alt="linkedin"
              >
                <i className="fab fa-linkedin" style={{ color: "white", fontSize: "28px" }} />
              </a>
            </div>

            <div className="hero-cta">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="button button-primary"
                onClick={() => {
                  if (contactsRef && contactsRef.current) {
                    contactsRef.current.scrollIntoView({ behavior: "smooth", inline: "center" });
                  }
                }}
              >
                Contact Me
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="button"
                onClick={() => {
                  if (projectRef && projectRef.current) {
                    projectRef.current.scrollIntoView({ behavior: "smooth", inline: "center" });
                  }
                }}
              >
                Portfolio
              </a>
            </div>
          </div>
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
  );
}

export default Hero;
