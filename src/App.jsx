import About from "./sections/About";
import Clients from "./sections/Clients";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
    </div>
  );
};

export default App;
