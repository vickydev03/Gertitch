
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MobileNav() {
  const navItems = ["Home", "pages", "Contact us", "Blog", "Landing"];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="text-white hover:cursor-pointer "
          //   onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent
        className=" text-white bg-transparent    z-50 backdrop-blur-sm "
        side="left"
      >
        <SheetHeader>
          <SheetTitle className="text-white">Navigation Menu</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col  items-center justify-center w-full bg-reds-200 gap-y-10   h-full">
          {navItems.map((e, i) => (
            <li key={i} className="nav-hover-btn text-lg cursor-pointer ">
              {e}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;