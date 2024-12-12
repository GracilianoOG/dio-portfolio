import GlobalStyled from "./components/styles/GlobalStyled";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content";

function App() {
  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <Header />
        <Content />
        {/* <Footer /> */}
      </Wrapper>
    </>
  );
}

export default App;
