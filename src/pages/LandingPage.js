import React, { useRef } from "react";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import { Layout } from "../ui";
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
          <div style={{ height: "20rem" }} />
        </main>
      </Layout>
    </div>
  );
}

export default LandingPage;
