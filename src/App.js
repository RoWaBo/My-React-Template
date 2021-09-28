import { Router } from "@reach/router";
import Home from './views/Home';
import Contact from './views/Contact';
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Home path="/" />
        <Contact path="contact" />
      </Router>
    </>
  );
}

export default App;
