/** @format */

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import WhatIdo from "./components/WhatIdo";
import WhyMe from "./components/WhyMe"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WhatIdo />
      <WhyMe />
      <Footer />
    </>
  );
}

export default App;
