import { Router } from "@reach/router";
// VIEWS
import Home from './views/Home';
import Contact from './views/Contact';
// COMPONENTS
import NavBar from "./components/NavBar";
// CONTEXT
import ThemeProvider from "./contexts/ThemeProvider";
import ThemeContextProvider from "./contexts/ThemeContext";
// STYLE
import GlobalStyle from "./style/Global";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <GlobalStyle />
          <NavBar />
          <Router>
            <Home path="/" />
            <Contact path="contact" />
          </Router>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
