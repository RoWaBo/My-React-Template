import { Router } from "@reach/router";
import Home from './views/Home';
import Contact from './views/Contact';
import NavBar from "./components/NavBar";
import GlobalStyle from "./style/Global";
import ThemeProvider from "./contexts/ThemeProvider";
import ThemeContextProvider from "./contexts/ThemeContext";


function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeContextProvider>
        <ThemeProvider>
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
