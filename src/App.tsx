import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Menu from "./component/Menu";
import Chef from "./component/Chef";
import Laurels from "./component/Laurels";
import Findus from "./component/Findus";
import NewsLetter from "./component/NewsLetter";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
// import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Laurels />
      <Gallery />
      <Findus />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
