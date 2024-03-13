import { BookCopy } from "lucide-react";
import Link from "next/link";
import React from "react";

function SubjectCard({ name, slate, klass }) {
  return (
    <div className="flex flex-col max-w-[300px] mx-auto mb-4 md:mb-0 md:max-w-none justify-center items-center border border-slate-300 shadow-xl bg-gray-200 rounded-2xl py-8 px-1">
      <BookCopy className={`${slate}`} />
      <Link href={`/quizes/${klass}/${name}`}>
        <p
          className={`text-gray-900 hover:text-gray-600 hover:cursor-pointer text-[12px] mt-2 font-bold`}
        >
          {name}
        </p>
      </Link>
    </div>
  );
}

export default SubjectCard;
