import GlobalStyled from "./components/styles/GlobalStyled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [darkState, setDarkState] = useState(false);

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
