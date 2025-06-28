import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
function About() {
  const paragraph1 = useRef<HTMLParagraphElement | null>(null);
  const paragraph2 = useRef<HTMLParagraphElement | null>(null);
  const containers = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split1 = new SplitText(paragraph1.current, {
        type: "words,chars,lines",
      });
      const split2 = new SplitText(paragraph2.current, { type: "lines" });

      gsap.set(split1.lines, { opacity: 0, yPercent: 20 });
      gsap.set(split2.lines, { opacity: 0, yPercent: 20 });
      gsap.set(containers.current, { opacity: 0, y: 50 });

      // Scroll trigger animation
      ScrollTrigger.create({
        trigger: containers.current,
        start: "top 90%",
        toggleActions: "play none none none",
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(containers.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });

          // Then animate split text
          tl.to(split1.lines, {
            yPercent: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
          });

          tl.to(split2.lines, {
            yPercent: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }, containers);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-black h-full  ">
      <div
        ref={containers}
        className="bg-black  relative  about_main flex items-center justify-center about gsap-28 flex-col md:flex-row  "
      >
        <div className=" absolute right-[50%] opacity-[0.8] translate-x-[50%]">
          <img
            src="/knife.png"
            alt=""
            className=" aspect-auto h-[400px] md:h-[480px] lg:h-[700px]  opacity-[0.7]   "
          />
        </div>
        <div className="about_header   bg-amber-5s0 flex flex-col flex-1 bg-rx ed-300  ">
          <div className="  flex md:w-[60%] flex-col items-end bg-rxed-700 mr-auto md:ml-auto  gap-y-1  p-10 ">
            <h3 className="lg:text-6xl text-4xl text-[#DCCA87] bg-s-50 px-10  italic bg-ambesr-300  ">
              About us
            </h3>
            <img
              src="/spoon.png"
              alt=""
              className=" aspect-auto transform  rotate-180 -translate-x-10"
            />

            <p
              className="text-[16px] text-stone-400 text-wrap clear-right "
              ref={paragraph1}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className=" md:w-[50%] w-full bg-rexd-300 bg-rxed-400  flex  flex-col ml-auto   items-start bg-rxed-700 md:mr-auto  gap-y-1 md:ml-28  p-10 ">
            <h3 className="lg:text-6xl text-4xl   text-[#DCCA87] bg-s-50   italic  ">
              Our History
            </h3>
            <img
              src="/spoon.png"
              alt=""
              className=" aspect-auto transform -translate-x-10 ml-10"
            />

            <p
              className="text-[16px] text-stone-400 text-wrap "
              ref={paragraph2}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
