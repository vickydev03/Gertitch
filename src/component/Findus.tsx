import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Findus() {
  const box = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(
      box.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: box.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className="bg-black h-full w-full">
      <div
        className=" flex flex-col sm:flex-row text-white gap-y-8 py-10  md:py-28  "
        ref={box}
      >
        <div className="md:w-[50%] flex items-center justify-center px-12 md:px-8 py-4 bg-rxed-300  ">
          <div className="space-y-2 bg-gresen-200 pr-5 lg:mr-48   ">
            <h4 className="text-xl">Contact</h4>
            <img src="/spoon.png" alt="ajay" className="w-5" />
            <h2 className="text-4xl font-medium tracking-widest text-[#DCCA87]">
              Find us
            </h2>
            <p className="text-stone-400 mt-8 text-md pb-4 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. ?
            </p>
            <div className="flex  flex-col space-y-4">
              <h3 className="text-2xl  text-[#DCCA87] tracking-widest">
                Opening Hours
              </h3>
              <p className="">Mon-Fri 10:00 am - 02:00</p>
              <p>Sat-Sun 10:00 am - 02:00</p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex items-center bg-red-20s0 px-4 md:px-8 py-4 justify-center  ">
          <img
            src="/findus.png"
            alt="find-us"
            className=" max-w-96 w-64 md:w-72 lg:w-[700px] "
          />
        </div>
      </div>
    </div>
  );
}

export default Findus;
