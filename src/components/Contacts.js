import React from "react";
import featuresBoxDark from "../images/features-box-dark.svg";
import featuresIllustrationDark from "../images/features-illustration-dark.svg";
import featuresIllustrationTopDark from "../images/features-illustration-top-dark.svg";
import { Container } from "../ui";
function Contacts({ contactsRef }) {
  return (
    <section style={{ marginTop: "6rem" }}>
      <Container>
        <div ref={contactsRef}>
          <div style={{ textAlign: "center" }} className="">
            <h1 className="portfolio-title">Contact Me</h1>
            <div className="features-image divider-class">
              <img className="features-illustration" src={featuresIllustrationDark} alt="Feature illustration" />
              <img className="features-box" src={featuresBoxDark} alt="Feature box" />
              <img className="features-illustration" src={featuresIllustrationTopDark} alt="Feature illustration top" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
