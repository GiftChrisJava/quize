import Link from "next/link";
import React from "react";
import { navLinks } from "../constants/navLinks";

function TutorFooter() {
  return (
    <div>
      <hr />
      <div className="bg-gray-200 bottom pt-8 pb-5">
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

            <li>
              <Link
                href="#"
                className=" leading-normal text-md font-bold text-gray-600"
              >
                Companies
              </Link>
            </li>
          </ul>

          {/* logo */}
          <p className="font-bold text-3xl text-green-600 hidden sm:block">
            <span className="text-red-600">Tut</span>
            <span className="text-gray-800">ors</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TutorFooter;
