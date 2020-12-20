import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import {
  PrimaryButton,
  SecondaryButton,
  SignUpModal,
  TertiaryButton
} from "./components";

const App = () => {
  const [useDarkTheme, setUseDarktheme] = React.useState(false);
  console.log("usedarktheme:", useDarkTheme);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarktheme(!useDarkTheme)}
      >
        Toggle theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexdirection: "column",
          justifyContent: "space-around"
        }}
      >
        <SignUpModal />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
