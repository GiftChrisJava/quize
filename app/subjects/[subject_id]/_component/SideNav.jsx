import { BookOpen } from "lucide-react";
import { topics } from "./constants/topics";

function SideNav() {
  return (
    <div className="p-4 bg-white shadow-lg border rounded-md mr-3 mt-2">
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
            <BookOpen className="group-hover:animate-bounce text-green-600" />
            <h2 className="text-md hover:text-green-600 ">{topic.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
