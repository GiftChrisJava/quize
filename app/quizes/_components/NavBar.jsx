import Link from "next/link";
import { navigationLinks } from "../constants/navigationLinks";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
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
          {navigationLinks.map((link) => (
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

        {/* logo */}
        <p className="font-bold text-3xl text-green-600 hidden sm:block">
          <span className="text-red-600">Qu</span>
          <span className="text-gray-800">iz</span>
        </p>

        
        <div className="md:flex gap-3 p-1 rounded-md font-semibold hidden ml-8">
            <UserButton afterSignOutUrl="/"/>   
          </div>
      </div>
    </div>
  );
}

export default NavBar;
