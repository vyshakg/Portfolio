const darkTheme = {
  primary1: "white",
  paragraph: "#8595ae",
  header: "#e9edf3",
  background: "#182538",
  tabs: "#304057",
  behindScreen: "#202d3f",
  techStack: "aliceblue",
  helperText: "#cccccc"
};

const lightTheme = {
  primary1: "black",
  behindScreen: "#E9EDF3",
  paragraph: "#384e71",
  background: "#f5f5f5",
  tabs: "#E9EDF3",
  helperText: "#2d2c2c",
  header: "#4e4b4b"
};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;

// #6B7A90 light paragraph
