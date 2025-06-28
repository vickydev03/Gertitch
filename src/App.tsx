import  { useEffect, useRef } from "react";
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
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
function App() {
  const lenisRef = useRef<any|null>(null);

  useEffect(() => {
    function update(time:number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <div>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
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
