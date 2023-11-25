import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <>
      <header
        className={`py-8 px-16 flex items-center fixed top-0 w-full justify-between z-40 text-white ${
          scrolling ? "bg-[#91B7DC]" : ""
        }`}
      >
        <div className="mx-auto flex items-center justify-between w-full">
          <div className="flex items-center">
            <NavLink to="/">
              <img
                src="./imgs/logo_blanco.png"
                alt="Logo"
                className="w-36 h-auto mr-2"
              />
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return `text-base hover:text-gray-800 font-bold ${
                  isActive ? "text-gray-800 font-bold" : ""
                }`;
              }}
            >
              About Us
            </NavLink>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}
