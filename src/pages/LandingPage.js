import React, { useRef } from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import { Layout } from "../ui";
function LandingPage() {
  const projectRef = useRef(null);
  return (
    <div style={{ height: "100%", background: "#202d3f" }}>
      <Layout>
        <header className="site-header">
          <h1 style={{ fontSize: "1rem" }}>THIS WEBSITE IS STILL IN CONSTRUCTION</h1>
        </header>
        <main>
          <Hero projectRef={projectRef} />
          <Portfolio projectRef={projectRef} />
          <div style={{ height: "20rem" }} />
        </main>
      </Layout>
    </div>
  );
}

export default LandingPage;
