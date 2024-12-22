import GlobalStyled from "./components/styles/GlobalStyled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  const [darkState, setDarkState] = useState(false);

  useEffect(() => {
    const isDarkEnabled =
      JSON.parse(localStorage.getItem("dark-theme")) ??
      matchMedia("(prefers-color-scheme: dark)").matches;

    setDarkState(isDarkEnabled);
  }, []);

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
