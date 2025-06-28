import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { TextPlugin } from "gsap/TextPlugin";
import MobileNav from "./MobileNav";

gsap.registerPlugin(useGSAP, TextPlugin);

function NavBar() {
  const navItems = ["Home", "pages", "Contact us", "Blog", "Landing"];
  return (
    <>
      <nav className="bg-black flex items-center  justify-between border-b  border-stone-400">
        <div className="logo flex items-center px-2 md:px-4 py-0.5 md:pys-1">
          <img
            src="/gericht.png"
            alt="a"
            className="size-5 text-red-400 w-18 md:w-24 h-8 md:h-10"
          />
        </div>
        <div className="nav-tems hidden md:block ">
          <ul className="flex items-center gap-x-4 text-xs font-sans">
            {navItems.map((e, i) => (
              <li className="text-white" key={i}>
                <p className="text-md tr"> {e}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className=" items-center text-[#ffff] gap-x-4 pr-4 text-sm relative hidden md:flex">
          <div className="r">
            <button>Login / Registration</button>
          </div>
          <div>
            <button>Book Table</button>
          </div>
        </div>
        <div className="flex  px-5 md:hidden">
          <MobileNav />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
