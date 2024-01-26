import Navbar from "./components/navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
