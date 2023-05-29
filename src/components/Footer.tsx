import { RiCopyrightLine, RiArrowUpLine } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="relative bg-black  border-solid text-theme-orange border-theme-orange border-t-2">
      <div className="flex items-center justify-center absolute w-24 h-14 right-1/2 bottom-full translate-x-2/4 bg-black border-solid border-theme-orange border-x-2 rounded-t-full duration-300 ease-in-out hover:scale-110 hover:-translate-y-0.5">
        <a href="#">
          <RiArrowUpLine className="text-4xl drop-shadow-2xl" />
        </a>
      </div>
      <div className="flex items-center max-w-7xl w-full mx-auto py-4 text-sm font-light">
        <RiCopyrightLine className="mr-1" /> 2023 Igor Lima Garcia
      </div>
    </footer>
  );
}
