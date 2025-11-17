import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/navbar";
import Home from "./sections/home";
import Aboutme from "./sections/aboutme";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/contact";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
        <Aboutme />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
