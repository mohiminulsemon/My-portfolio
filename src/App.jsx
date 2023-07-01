import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app-container"
    style={{
      backgroundImage: "url('./Hexagon.svg')",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
