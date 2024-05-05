"use client";
import seal from "@/public/website/seal.png";
import Image from "next/image";
import dropdown from "@/public/website/yellowed-paper.png";
import { useState } from "react";
interface p {
  user?: any;
}

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="z-5 w-[11rem] h-[11rem] hover:cursor-pointer"
      >
        <Image src={seal} alt="Navbar Seal" fill className="object-fit" />
      </div>
      <div className="fixed w-[11rem] h-[11rem] top-20 z-2">
        {showDropdown && (
          <Image src={dropdown} alt="Navbar Seal" className="object-fit" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
