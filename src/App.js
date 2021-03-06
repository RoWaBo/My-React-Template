import { Router } from "@reach/router";
// VIEWS
import Home from './views/Home';
import Contact from './views/Contact';
// COMPONENTS
import NavBar from "./components/NavBar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
// CONTEXT
import ThemeProvider from "./contexts/ThemeProvider";
import ThemeContextProvider from "./contexts/ThemeContext";
// STYLE
import GlobalStyle from "./style/Global";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <GlobalStyle />
          <NavBar shadow />
          <Wrapper maxWidth="600px">
            <Router>
              <Home path="/" />
              <Contact path="contact" />
            </Router>
            <ToggleThemeBtn>change theme</ToggleThemeBtn>
          </Wrapper>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
