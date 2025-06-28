import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Chef() {
  const chiefImg = useRef<HTMLImageElement | null>(null);
  const box1 = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    
    tl.fromTo(
      chiefImg.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: chiefImg.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    tl.fromTo(
      box1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        transition: "all",
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: box1.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // return split.revert()
  }, []);

  return (
    <div className="bg-black h-full w-full flex flex-col md:flex-row items-center pt-28 lg:py-52 gap-y-10">
      <div className=" place-content-center items-center flex bg-reds-300 md:w-[50%] h-full">
        <img
          ref={chiefImg}
          src="/chef.png"
          alt="chef"
          className=" object-contain aspect-auto max-w-[300px] lg:max-w-[450px]"
        />
      </div>
      <div
        className="bg-yellsow-200 w-full p-5 md:w-[50%] h-full text-white flex items-center"
        ref={box1}
      >
        <div className="flex flex-col items-start gap-y-2 ">
          <h3 className="text-md font-medium  tracking-widest">Chef's word</h3>
          <img src="/spoon.png" alt="" />
          <div className="space-y-12">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-[#DCCA87] ">
              <b>W</b>hat we believe in
            </h2>
            <p className="lg:w-[70%] text-stone-400 flex items-start leading-6 tracking-widest gap-x-2">
              <img src="/quote.png" alt="" className="w-8" />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                aliquid nobis sit assumenda tenetur in aperiam esse animi!
                Inventore sed aperiam provident repellat accusantium atque?
              </span>
            </p>
            <p className=" font-medium tracking-widest flex flex-col gap-y-2 ">
              <span className="text-[#DCCA87] text-xl sm:text-2xl md:text-4xl lg:text-4xl ">
                Kevin Luo
              </span>
              <span className="text-sm font-light text-stone-400">
                Chief & Founder
              </span>
            </p>
            <img src="/sign.png" alt="sign" className="w-28" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chef;
