import React from "react";
import { Container } from "../ui";

function AskQuestion() {
  return (
    <section style={{ marginTop: "12rem" }} className="cta section">
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1 className="portfolio-title">Ask A Question?</h1>
          <p className="project-para">Do you Have Quries? Or just a Random Question? Feel free to Ask</p>
          <div class="cta-cta">
            <a class="button button-primary" href="/">
              Ask a Question
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AskQuestion;
