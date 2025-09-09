import GlobalStyled from "./styles/GlobalStyled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content";
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
