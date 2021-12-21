import Link from "next/link";
import React, { useEffect } from "react";
import { HeaderData } from "../data/HeaderData";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-9/12 mx-auto my-5  bebas-font sticky">
      <h1>{HeaderData.name}</h1>
      <div className="flex items-center space-x-8 text-[#4F4F4F]">
        <Link href="">
          <a href="">About</a>
        </Link>
        <Link href="">
          <a href="">Work</a>
        </Link>
        <Link href="">
          <a href="">Contact</a>
        </Link>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
