"use client";
import { BookOpen } from "lucide-react";
import { topics } from "./constants/topics";
import { Fragment, useState } from "react";
import Model from "./Model";

function SideNav({ subject_id }) {
  // Initialize visibility state for each topic
  const [topicVisibility, setTopicVisibility] = useState(
    topics.map(() => false)
  );

  const handleTopicClick = (index) => {
    // Toggle the visibility state for the clicked topic
    const newVisibility = [...topicVisibility];
    newVisibility[index] = !newVisibility[index];
    setTopicVisibility(newVisibility);
  };

  return (
    <div className="p-4 sticky bg-white shadow-lg border rounded-md mr-3 mt-2">
      <p className="font-semibold text-gray-800 text-xl">Available Topics</p>
      <hr className="mt-3" />

      {/* Topic list  */}
      <div className="mt-5">
        {topics.map((topic, index) => (
          <Fragment key={topic.id}>
            <div
              onClick={() => handleTopicClick(index)}
              className="group p-1 flex gap-3 mt-2 text-[18px] items-center 
          text-gray-500 cursor-pointer"
            >
              <BookOpen className="group-hover:text-green-600 text-gray-300" />
              <h2 className="text-md hover:text-green-600 ">{topic.name}</h2>
            </div>
            <Model
              subject_id={subject_id}
              image={topic.image}
              name={topic.name}
              topic_id={topic.id}
              isVisible={topicVisibility[index]}
              onClose={() => handleTopicClick(index)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
