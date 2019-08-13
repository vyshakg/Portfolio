import React, { Component } from "react";
import LandingPage from "./pages/LandingPage";
import { CustomThemeProvider } from "./themes/themeContext";

class App extends Component {
  render() {
    return (
      <CustomThemeProvider>
        <LandingPage />
      </CustomThemeProvider>
    );
  }
}

export default App;
