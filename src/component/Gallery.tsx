import  { useRef } from "react";
import Swipper_com from "./Swipper_com";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Gallery() {
  const box = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(
      box.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        transition: "all",
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: box.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className="pt-10  bg-black text-white ">
      <div
        className="grid grid-cols-1 lg:grid-cols-[500px_1fr]  gap-y-10"
        ref={box}
      >
        <div className=" flex items-center ">
          <div className="flex flex-col items-center md:items-center justify-center bg-green-100a px-10  md:px-8  gap-x-10 gap-y-7  lg:gap-y-5">
            <h3 className="font-normal text-md">Instagrm</h3>
            <img src="/spoon.png" alt="s" className="w-10" />
            <h2 className="text-xl md:text-2xl lg:text-4xl text-[#DCCA70]  tracking-widest">
              Photo Gallery
            </h2>
            <p className="text-stone-400 md:w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              distinctio facilis, quidem debitis laboriosam eligendi , iste!
            </p>
            <button className="bg-[#DCCA87] px-4 py-2 text-black rounded-lg hover:bg-[#DCCA70] ">
              View More
            </button>
          </div>
        </div>
        <div className="bg-red-2x00">
          <Swipper_com />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
