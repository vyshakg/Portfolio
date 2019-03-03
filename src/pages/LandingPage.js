import React from "react";
import Hero from "../components/Hero";
import { Layout } from "../ui";
function LandingPage() {
  return (
    <div style={{ height: "100%", background: "#202d3f" }}>
      <Layout>
        <header className="site-header">
          <h1 style={{ fontSize: "1rem" }}>THIS WEBSITE IS STILL IN CONSTRUCTION</h1>
        </header>
        <main>
          <Hero />
        </main>
      </Layout>
    </div>
  );
}

export default LandingPage;
