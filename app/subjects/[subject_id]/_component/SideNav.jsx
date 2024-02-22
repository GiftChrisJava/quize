"use client";
import { BookOpen } from "lucide-react";
import { topics } from "./constants/topics";
import { useState } from "react";

function SideNav() {
  const [showModel, setshowModel] = useState(false);
  return (
    <div className="p-4 sticky bg-white shadow-lg border rounded-md mr-3 mt-2">
      <p className="font-semibold text-gray-800 text-xl">Available Topics</p>
      <hr className="mt-3" />
      {/* Topic list  */}
      <div className="mt-5">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="group p-1 flex gap-3 mt-2 text-[18px] items-center 
          text-gray-500 cursor-pointer"
          >
            <BookOpen className="group-hover:text-green-600 text-gray-300" />
            <h2 className="text-md hover:text-green-600 ">{topic.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
