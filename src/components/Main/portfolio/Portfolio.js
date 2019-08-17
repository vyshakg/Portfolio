import React from "react";
import { Container, PortfolioWrapper } from "../../../ui";
import { HeroPara, PortfolioTitle } from "../../../ui/fontColor";
import Projects from "./Projects";

function Portfolio({ projectRef }) {
  return (
    <section style={{ marginTop: "3rem" }}>
      <Container>
        <PortfolioWrapper>
          <div style={{ textAlign: "center" }}>
            <PortfolioTitle>Personal Projects</PortfolioTitle>
            <HeroPara className="portfolio-para">
              Self-driven and Motivational side projects on various stack and
              Framework.
            </HeroPara>
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
