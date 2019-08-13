const darkTheme = {
  white: "white",
  paragarph: "#8595ae",
  header: "#e9edf3",
  background: "#182538",
  tabs: "#304057",
  behindScreen: "#202d3f",
  techStack: "aliceblue",
  helperText: "#cccccc"
};

const lightTheme = {
  black: "black",
  behindScreen: "#E9EDF3",
  paragarph: "#6B7A90",
  background: "white",
  tabs: "#E9EDF3"
};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
