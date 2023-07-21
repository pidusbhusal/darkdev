import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const navItems = ["Home", "About", "Projects", "Contact"];

// Define the animation variants for the menu
const navbarVariants = {
  open: {
    x: "0%",
    transition: {
      type: "Ease",
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "Ease",
    },
  },
};
const bgVariants = {
  open: {
    x: "0%",
    opacity: 100,
  },
  closed: {
    x: "100%",

    opacity: 0,
  },
};

function Navbar() {
  //navbar interactions :

  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolled = currentScrollPos > 0;

      setScrolled(isScrolled);
      setPrevScrollPos(currentScrollPos);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  //test

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  function toggleMenu() {
    setIsActive(!isActive);
  }

  //close navbar when item in navbar is clicked

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="navbar">
      {/* desktop version */}
      <motion.div
        initial={{ backgroundColor: "transparent", boxShadow: "none" }}
        animate={{
          backgroundColor: scrolled ? "rgb(5, 6, 10 , 0.85)" : "transparent",
          boxShadow: scrolled ? "0 1px 2px rgba(0, 0, 0, 0.1)" : "none",
          backdropFilter: scrolled ? "blur(146.909px)" : "",
        }}
        className=" sticky top-0 py-6 w-full   hidden md:block"
      >
        <nav className={`flex container  justify-between `}>
          <div className=" flex items-center">
            <Link href={"/"}>
              <Image
                src={"Pidus_logo.svg"}
                alt="Pidus Logo"
                width={125}
                height={500}
              />
            </Link>
          </div>

          <div className="flex  items-center ">
            <Link
              href="/"
              className={`${
                router.pathname === "/" ? "border-b-2" : "border-b-transparent"
              } mr-8 `}
            >
              <button className="navbtn">Home</button>
            </Link>
            <Link
              href="/work"
              className={`${
                router.pathname === "/work"
                  ? "border-b-2"
                  : "border-b-transparent"
              } mx-8`}
            >
              <button className="navbtn">Work</button>
            </Link>
            <Link
              href="/profile"
              className={`${
                router.pathname === "/profile"
                  ? "border-b-2"
                  : "border-b-transparent"
              } mx-8`}
            >
              <button className="navbtn">Profile</button>
            </Link>
            <Link href="/contact">
              <button className="pbtn ml-8">Let’s work together</button>
            </Link>
          </div>
        </nav>
      </motion.div>

      {/* mobile version */}
      <div className="md:hidden  z-50  py-14">
        <div className="flex justify-between">
          <nav
            className={`${
              isActive ? "" : "h-fit bg-black backdrop-blur-sm"
            } fixed inset-0 z-50`}
          >
            <motion.div
              className="flex w-full justify-between px-4 pt-6 pb-2 absolute "
              initial={{ backgroundColor: "transparent" }}
              animate={{
                backgroundColor: scrolled ? "rgb(5, 6, 10 , 1)" : "transparent",
                boxShadow: scrolled ? "0 1px 2px rgba(0, 0, 0, 0.5)" : "none",
                backdropFilter: scrolled ? "blur(146.909px)" : "",
              }}
            >
              <div className=" z-100 ">
                <Link href={"/"}>
                  <Image
                    src={"Pidus_logo.svg"}
                    alt="Pidus Logo"
                    width={125}
                    height={100}
                  />
                </Link>
              </div>

              <div className="z-50">
                <button
                  onClick={toggleMenu}
                  className="z-50 p-4 bg-blue-700 rounded "
                >
                  {isActive ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>

            {isActive ? (
              <motion.div
                initial="closed"
                animate={isActive ? "open" : "closed"}
                variants={bgVariants}
                className="w-full h-full bg-black bg-opacity-70"
                onClick={toggleMenu}
              ></motion.div>
            ) : (
              ""
            )}

            <motion.div
              initial="closed"
              animate={isActive ? "open" : "closed"}
              variants={navbarVariants}
              className="fixed top-0 right-0 w-64 h-full bg-[#0E0F14] text-gray-100 overflow-y-auto"
            >
              <div className="pt-12 flex-col flex justify-end">
                <button
                  className=" top-6 right-4 flex pr-4 justify-end text-gray-100 focus:outline-none"
                  onClick={toggleMenu}
                ></button>

                <div className="mt-10 flex justify-center flex-col">
                  <Link
                    href="/"
                    onClick={handleClick}
                    className={`${
                      router.pathname === "/" ? "bg-gray-900 " : ""
                    } reponsiveNavBtn`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/work"
                    onClick={handleClick}
                    className={`${
                      router.pathname === "/work" ? "bg-gray-900" : ""
                    } reponsiveNavBtn`}
                  >
                    Work
                  </Link>
                  <Link
                    href="/profile"
                    onClick={handleClick}
                    className={`${
                      router.pathname === "/profile" ? "bg-gray-900" : ""
                    } reponsiveNavBtn`}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/contact"
                    onClick={handleClick}
                    className={`${
                      router.pathname === "/contact" ? "bg-gray-900" : ""
                    } reponsiveNavBtn`}
                  >
                    <button className="pbtn">Let's work together</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
