import GlobalStyled from "./styles/GlobalStyled";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Wrapper from "./layouts/Wrapper";
import Content from "./layouts/Content";
import useThemes from "./hooks/useThemes";
import { ThemeProvider } from "styled-components";

function App() {
  const [isDark, toggleTheme] = useThemes();

  return (
    <>
      <ThemeProvider theme={{ isDark, toggleTheme }}>
        <GlobalStyled />
        <Wrapper>
          <Header />
          <Content />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
