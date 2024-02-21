import { Search } from "lucide-react";
import React from "react";
import { navLinks } from "./links";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-white">
      <div className="px-2  py-4 max-container flex justify-between">
        {/* logo */}
        <p className="font-bold text-3xl text-green-600">
          M<span className="text-red-600">Ee</span>
          <span className="text-gray-800">p</span>
        </p>

        {/* links  */}
        <ul className="hidden sm:flex-1 sm:flex justify-center items-center gap-5 ">
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
        <div className="flex gap-3 p-1 rounded-md outline-none border font-semibold">
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
