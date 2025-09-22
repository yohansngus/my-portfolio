"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbarr() {
  const navclass =
    "flex flex-1 justify-center font-bold hover:border-b-5 hover:border-b-[orange] active:border-b-5 active:border-b-[white] transition-all";
  const [openn, setopen] = useState(false);
  type hamburger = () => void;
  const hamburgermenu: hamburger = () => {
    setopen(!openn);
  };
  return (
    <div>
      <nav className="sticky z-50 bg-black top-0 flex p-10">
        <div className="max-h-14 w-1/3 font-bold text-3xl pl-5 flex justify-center">
          <b className="text-yellow-600 border-5 p-2 border-orange rounded-3xl">
            J
          </b>
          <h1 className="flex items-center">Yohannes</h1>
        </div>
        <div className="xl:w-2/3 hidden xl:flex">
          <Link className={navclass} href="/">
            Home
          </Link>
          <Link className={navclass} href="/about">
            About
          </Link>
          <Link className={navclass} href="/project">
            Project
          </Link>
          <Link className={navclass} href="/contact">
            Contact
          </Link>
        </div>
        <div
          onClick={hamburgermenu}
          className="p-3 absolute top-7 right-7 xl:hidden cursor-pointer"
        >
          <div className="w-12 h-1 bg-white"></div>
          <div className="w-12 h-1 bg-white my-2"></div>
          <div className="w-12 h-1 bg-white"></div>
        </div>
        {openn && (
          <div className="relative top-25 right-0 bg-black flex flex-col w-full p-5 xl:hidden mb-15">
            <Link className={navclass} href="/">
              Home
            </Link>
            <Link className={navclass} href="/about">
              About
            </Link>
            <Link className={navclass} href="/project">
              Project
            </Link>
            <Link className={navclass} href="/contact">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
