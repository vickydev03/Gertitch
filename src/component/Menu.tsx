import  { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function Menu() {
  const menuImg1 = useRef<HTMLImageElement | null>(null);
  const menuImg2 = useRef<HTMLDivElement | null>(null);
  const menuImg3 = useRef<HTMLDivElement | null>(null);
  const heading = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const split = new SplitText(heading.current, { type: "words,chars,lines" });

    tl.from(split.chars, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power2.out",
    });

    tl.fromTo(
      menuImg1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        transition: "all",
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: menuImg1.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
    tl.fromTo(
      menuImg2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        transition: "all",
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: menuImg2.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    tl.fromTo(
      menuImg3.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        transition: "all",
        y: 0,
        duration: 1.5,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: menuImg3.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // return split.revert()
  }, []);
  return (
    <div className="bg-[#0D0D0D]  text-white w-full h-full py-10 md:px-10 lg:px-0">
      <div className="header flex flex-col items-center justify-center pt-18 gap-y-2 md:gap-y-4">
        <h3 className="text-2xl font-medium">Menu that fits you palette</h3>
        <img src="/spoon.png" alt="s" />
        <h2 className="text-6xl text-[#DCCA87]" ref={heading}>
          Todays special
        </h2>
        <div className=" relative flex items-center justify-between bg-resd-300 w-full h-full flex-col md:flex-row gap-y-10 ">
          <div className=" md:absolute md:right-[50%]  md:translate-x-[50%] p-10 ">
            <img
              ref={menuImg1}
              src="/menu.png"
              alt="menu"
              className="z-0 h-[450px] aspect-auto md:opacity-0 lg:opacity-100"
            />
          </div>

          <div className=" bg-resd-300 md:w-[50%]  " ref={menuImg2}>
            <h3 className="text-center text-2xl pb-5 tracking-widest">
              Wine & Bear
            </h3>
            <div className="flex items-center flex-col  gap-y-10 w-full">
              {Array.from({ length: 5 }).map((_, index) => {
                return <Items key={index} />;
              })}
            </div>
          </div>

          <div className=" bg-yellows-200 md:w-[50%]" ref={menuImg3}>
            <h3 className="text-center text-2xl pb-5 tracking-widest">
              Cocktails
            </h3>
            <div className="flex items-center flex-col  gap-y-10">
              {Array.from({ length: 5 }).map((_, index) => {
                return <Items key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

export const Items = () => {
  return (
    <div className="flex  items-center gap-x-10 p-2">
      <div className="flex flex-col gap-y-2 w-full  ">
        <h3 className="text-sm md:text-xl lg:text-2xl leading-widest tracking-widest text-[#DCCA87]  bg-red-400x">
          Chapel Hill Shiraz
        </h3>
        <span className="text-stone-400 text-">Au | Bottle</span>
      </div>
      <div className="p-2 pb-3 border-t  w-18" />
      <p className="pb-5">$56</p>
    </div>
  );
};
