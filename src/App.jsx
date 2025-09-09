import GlobalStyled from "./styles/GlobalStyled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content";
import useThemes from "./hooks/useThemes";

function App() {
  const [darkState, setDarkState] = useThemes();

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
