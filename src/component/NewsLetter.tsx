import  { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function NewsLetter() {
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
    <div className="bg-black text-white py-18  h-full p-10 ">
      <div
        className=" relative flex items-center justify-center flex-col gap-y-5"
        ref={box}
      >
        <div className="flex items-center flex-col gap-y-5">
          <h4 className="text-md  font-semibold  ">NewsLetter</h4>
          <img src="/spoon.png" alt="spoon" />

          <h2 className="md:text-3xl text-xl tracking-widest text-[#DCCA87]">
            Subscribe To Our Newsletter
          </h2>

          <p className=" tracking-tight text-stone-300">
            And neverr miss latest updates
          </p>
        </div>
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className=" border-stone-400 border p-2 w-52   lg:w-84 h-10 placeholder:p-5"
            placeholder="Enter Address "
          />
          <button className="bg-[#DCCA87] px-4 py-2 rounded-sm hover:bg-[#DCCA70] text-black ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
