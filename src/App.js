import React from "react";

import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/global";
import themes from "./styles/themes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: props.theme ?? "light",
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={() => {
            this.setState(prevState => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

export default App;
