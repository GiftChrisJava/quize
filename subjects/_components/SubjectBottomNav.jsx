import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { navLinks } from "../[subject_id]/_component/constants/links";

function SubjectBottomNav() {
  return (
    <div className="bg-white sticky">
      <div className="px-2 py-4 max-container flex justify-between">
        {/* logo */}
       
        <Link href={`/`}>
        <p className="font-bold text-3xl text-green-600 hidden sm:block">
          M<span className="text-red-600">Ee</span>
          <span className="text-gray-800">p</span>
        </p>
        </Link>

        {/* links  */}
        <ul className="flex-1 flex justify-center items-center sm:gap-6 gap-10 mr-6 sm:mr-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="leading-normal text-md font-bold text-gray-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

       
        
        <div className="md:flex gap-3 p-1 rounded-md font-semibold hidden ml-8">
            <UserButton afterSignOutUrl="/"/>   
          </div>
      </div>
    </div>
  );
}

export default SubjectBottomNav;
