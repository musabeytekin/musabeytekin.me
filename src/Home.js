import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
    
      <Header />
      <HamburgerMenu />
      <Hero />

      <About />
      <div className="section-bg">
        <Skills />
      </div>
      <Resume />
      <div className="section-bg">
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
