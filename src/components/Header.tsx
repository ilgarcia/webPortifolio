"use client";

import { useState, useEffect, useContext, useRef } from "react";
import { usePathname } from "next/navigation";

import { ToggleContext } from "../context/ToggleContext";

import { NavItemMotion, NavMotion } from "./Motion";
import SplashScreen from "./SplashScreen";

export function Header() {
  const { modal } = useContext(ToggleContext);

  const ref = useRef<any>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const items = ["about", "projects", "skills", "experience", "contact"];

  const [above, setAbove] = useState(false);
  const [visible, setVisible] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 5000);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  useEffect(() => {
    setVisible(!modal);
  }, [modal]);

  function handleScroll() {
    const currentYOffset = window.scrollY;
    // const currentYOffset = window.pageYOffset;
    const above = currentYOffset > 0;

    setAbove(above);
  }

  useEffect(() => {
    if (!enabled) return;
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleNavBar();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [enabled]);

  function handleNavBar() {
    setEnabled(!enabled);
    document.body.classList.toggle("toggleBlur");
  }

  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen />
      ) : (
        <header
          className={`fixed top-0 left-0 w-full h-16 z-40 transition-all duration-700 ease-in-out shadow shadow-black bg-black bg-opacity-30 backdrop-blur-sm ${
            !visible && "-translate-y-16"
          } ${
            above
              ? "border-b border-solid border-theme-orange "
              : "border-black"
          }`}
        >
          <NavMotion>
            <NavItemMotion className="font-bold text-2xl lg:text-3xl">
              <a href="/#">
                l<span className="text-theme-orange mx-0.5">.</span>garcia
                <span className="text-theme-purple ml-1">_</span>
              </a>
            </NavItemMotion>

            {!String(pathname).startsWith("/blog") ? (
              <section>
                <button
                  className="flex justify-center items-center relative z-50 p-15 border-0 bg-transparent text-inherit ease-linear duration-150 transition lg:hidden "
                  onClick={handleNavBar}
                >
                  <div className="inline-block relative w-8 h-6">
                    <div
                      className={`absolute top-1/2 right-0 w-8 h-0.5 rounded bg-theme-orange before:content-[''] before:block before:absolute before:left-auto before:right-0 before:w-8 before:h-0.5 before:rounded before:bg-theme-orange before:ease-linear before:duration-150 before:transition-transform after:content-[''] after:block after:absolute after:left-auto after:right-0 after:w-8 after:h-0.5 after:rounded after:bg-theme-orange after:ease-linear after:duration-150 after:transition-transform ${
                        enabled
                          ? "transition-transform ease-in-out duration-300 -rotate-45 before:transition-all before:duration-200 before:ease-out before:w-full before:top-0 before:opacity-0 after:w-full after:bottom-0 after:-rotate-90"
                          : "transition-transform ease-in-out duration-300 rotate-0 before:transition-all before:duration-200 before:ease-in before:w-[120%] before:-top-3 after:rotate-0 after:w-[80%] after:-bottom-3"
                      }`}
                    ></div>
                  </div>
                </button>
                <div
                  id="navList"
                  className={`flex justify-center items-center fixed lg:static top-0 bottom-0 right-0 [width:min(70vw,350px)] lg:min-w-max h-screen lg:h-auto outline-0 bg-theme-dark lg:bg-inherit shadow-lg lg:shadow-none lg z-40 duration-500 transition-all ease-in ${
                    enabled
                      ? "translate-x-0"
                      : "invisible translate-x-full lg:visible lg:translate-x-0"
                  }`}
                >
                  <div className="lg:flex">
                    <ol className="mb-6 text-lg lg:mb-0 lg:flex lg:items-center lg:text-sm gap-8 [counter-reset:list-number]">
                      {items.map((item) => {
                        return (
                          <li
                            key={item}
                            className="duration-300 ease-in-out hover:text-theme-orange hover:scale-110"
                          >
                            <NavItemMotion className="mt-1.5 lg:mt-0 [counter-increment:list-number] before:[content:'0'counter(list-number)'.'] before:text-theme-orange before:font-display before:mr-2 before:text-right ">
                              <a href={`#${item}`}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                              </a>
                            </NavItemMotion>
                          </li>
                        );
                      })}
                    </ol>
                    <NavItemMotion>
                      <a href="/blog" className="button-one">
                        Blog
                      </a>
                    </NavItemMotion>
                  </div>
                </div>
              </section>
            ) : (
              <NavItemMotion>
                <a href="/" className="button-one">
                  Portfolio
                </a>
              </NavItemMotion>
            )}
          </NavMotion>
        </header>
      )}
    </>
  );
}
