import React from "react";
import Hero from "../components/Hero";
import { Layout } from "../ui";
function LandingPage() {
  return (
    <div style={{ height: "100vh", background: "#202d3f" }}>
      <Layout>
        <header>app header</header>
        <main>
          <Hero />
        </main>
      </Layout>
    </div>
  );
}

export default LandingPage;
