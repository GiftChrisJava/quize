import { Search } from "lucide-react";
import React from "react";
import { navLinks } from "./constants/links";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-white sticky">
      <div className="px-2 py-4 max-container flex justify-between">
        {/* logo */}
        <p className="font-bold text-3xl text-green-600 hidden sm:block">
          M<span className="text-red-600">Ee</span>
          <span className="text-gray-800">p</span>
        </p>

        {/* links  */}
        <ul className="flex-1 flex justify-center items-center sm:gap-6 gap-2 mr-6 sm:mr-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className=" leading-normal text-md font-bold text-gray-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* search bar  */}
        <div className="md:flex gap-3 p-1 rounded-md outline-none border font-semibold hidden">
          <input
            className="text-slate-800 focus:outline-none"
            type="text"
            placeholder="Find a Topic "
          />
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Header;
