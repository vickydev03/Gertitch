import  { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function Hero() {
  const heading = useRef<HTMLHeadingElement | null>(null);
  const paragraph = useRef<HTMLParagraphElement | null>(null);
  const heroImg = useRef<HTMLImageElement | null>(null);
  useLayoutEffect(() => {
    const split = new SplitText(heading.current, { type: "words,chars,lines" });
    const Parasplit = new SplitText(paragraph.current, { type: "lines" });

    const tl = gsap.timeline();

    tl.from(split.chars, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power2.out",
    });

    tl.from(Parasplit.lines, {
      yPercent: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });

    // Image animation on scroll trigger
    gsap.fromTo(
      heroImg.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroImg.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      split.revert();
      Parasplit.revert();
      // ScrollTrigger.kill(); // optional: reset all triggers
    };
  }, []);

  return (
    <div className="bg-black w-full h-full pb-36 md:pb-10    ">
      <div className=" lg:max-w-[1100px] max-w-md sm:max-w-lg md:max-w-6xl  mx-auto h-full grid grid-cols-1  md:grid-cols-2 ">
        <div className=" w-full h-screen md:h-full  p-4  place-content-start pt-20 flex flex-col gap-y-6 md:pl-10   ">
          <div className="text-white space-y-5">
            <h5 className="uppercase text-md font-medium ">
              chase the new Flavour
            </h5>
            <img src="/spoon.png" alt="build" />
          </div>
          <div className="text-[#DCCA87] bg-rsed-200 max-w-xl ">
            <h1
              ref={heading}
              className="uppercase text-6xl md:text-4xl lg:text-6xl   flex flex-wrap tracking-widest leading-snug"
            >
              The key to fine dining
            </h1>
          </div>
          <div className="flex ">
            <p
              ref={paragraph}
              className="text-stone-400  text-base  leading-6 pr-5 sm:pr-7  md:pr-10 tracking  "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates dolores qui eveniet eius dolorem error vel voluptatem
              excepturi sit maiores.
            </p>
          </div>
          <div className=" ">
            <button className="bg-[#DCCA87] px-2 py-1 rounded-lg hover:bg-[#DCCA70] ">
              Explore Menu
            </button>
          </div>
        </div>
        <div className=" bg-ambser-300  items-center relative place-content-center  flex bg-sred-400   ">
          <img
            ref={heroImg} 
            src="/welcome.png"
            alt="8"
            className=" object-contain w-64 md:w-72 lg:w-92 max-w-92"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
