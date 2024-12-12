import GlobalStyled from "./components/GlobalStyled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <Header />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
