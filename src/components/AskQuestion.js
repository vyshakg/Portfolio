import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { Container } from "../ui";
import Form from "./Form";

function AskQuestion() {
  const [open, setOpen] = useState(false);
  function onOpenModal() {
    setOpen(true);
  }

  function onCloseModal() {
    setOpen(false);
  }

  return (
    <section style={{ marginTop: "12rem" }} className="cta section">
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1 className="portfolio-title">Ask A Question?</h1>
          <p className="project-para">Do you Have Quries? Or just a Random Question? Feel free to Ask</p>
          <div className="cta-cta">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <button className="button button-primary" onClick={onOpenModal}>
              Ask a Question
            </button>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                overlay: "customOverlay",
                modal: "customModal"
              }}
            >
              <Form />
            </Modal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AskQuestion;
