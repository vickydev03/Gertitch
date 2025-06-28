import  { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function Laurels() {
   
  const heading = useRef<HTMLHeadingElement | null>(null);
  const box1 = useRef<HTMLDivElement | null>(null);


  useLayoutEffect(() => {
    const split = new SplitText(heading.current, { type: "words,chars,lines" });
    const tl = gsap.timeline();
    tl.from(split.words, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power2.out",
    });

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
  }, []);
  const data: Props[] = [
    {
      imagePath: "award03.png",
      name: "AA Hospitality",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imagePath: "award02.png",
      name: "Blib Gourmond",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imagePath: "award01.png",
      name: "Rising star",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      imagePath: "award05.png",
      name: "Outsanding chef",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <div className="bg-black h-full grid md:grid-rows-[500px_1fr] text-white pt-10 gap-18 px-5 ">
      <div className="bg-bluse-200 h-full overflow-hidden">
        <div className="relative  ">
          <video
            src="/meal.mp4 "
            className=" object-contain h-full w-full"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 " ref={box1}>
        <div className=" md:h-screen flex items-center justify-center flex-col">
          <div className="flex flex-col gap-y-4 ">
            <h4 className="text-md font-semibold tracking-widest">
              Awards & Recongnition
            </h4>
            <img src="/spoon.png" alt="" className="w-6" />
            <h2
              className="text-4xl tracking-widest text-[#DCCA87]"
              ref={heading}
            >
              Our Laurels
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-10">
              {data.map((e) => (
                <Item
                key={e.name}
                  imagePath={e.imagePath}
                  name={e.name}
                  description={e.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className=" md:place-content-center items-center flex w-full justify-center">
          <img
            src="/laurels.png"
            alt=""
            className="md:w-[1200px] lg:w-full w-72 md:h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Laurels;
interface Props {
  imagePath: string;
  name: string;
  description: string;
}

export const Item = ({ imagePath, name, description }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <img src={imagePath} alt={name} className="w-12 md:w-18  object-cover" />
      <div className="flex flex-col gap-2">
        <h3 className="text-[#DCCA87] tracking-widest text-sm md:text-base">
          {name}
        </h3>
        <p className="text-base text-stone-400">{description}</p>
      </div>
    </div>
  );
};
