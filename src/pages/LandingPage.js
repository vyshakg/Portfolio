import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { Layout } from "../ui";

function LandingPage() {
  return (
    <div style={{ height: "100%", background: "#202d3f" }}>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}

export default LandingPage;
