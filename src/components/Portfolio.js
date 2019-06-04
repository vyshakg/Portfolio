import React from "react";
import { Container, PortfolioWrapper } from "../ui";
import Projects from "./Projects";

function Portfolio({ projectRef }) {
  return (
    <section style={{ marginTop: "6rem" }}>
      <Container>
        <PortfolioWrapper>
          <div style={{ textAlign: "center" }}>
            <h1 className="portfolio-title">Projects</h1>
            <p className="hero-para portfolio-para">
              Self-driven and Motivational side projects on various stack and Framework.
            </p>
          </div>
          <div ref={projectRef}>
            <Projects />
          </div>
        </PortfolioWrapper>
      </Container>
    </section>
  );
}

export default Portfolio;
