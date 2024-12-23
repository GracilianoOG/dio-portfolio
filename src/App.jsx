import GlobalStyled from "./components/styles/GlobalStyled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content";
import useThemePreference from "./hooks/useThemePreference";

function App() {
  const [darkState, setDarkState] = useThemePreference();

  return (
    <>
      <GlobalStyled $isDarkMode={darkState} />
      <Wrapper>
        <Header darkState={darkState} setDarkState={setDarkState} />
        <Content />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
