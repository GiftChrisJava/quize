"use client";
import { Fragment, useState } from "react";
import Model from "@/app/subjects/[subject_id]/_component/Model";
import store from "store2"

function SideBarLeft({ subject_id }) {

  const subject = store.get("subject")

  // Initialize visibility state for each topic
  const [topicVisibility, setTopicVisibility] = useState(
    subject.topics.map(() => false)
  );

  const handleTopicClick = (index) => {
    // Toggle the visibility state for the clicked topic
    const newVisibility = [...topicVisibility];
    newVisibility[index] = !newVisibility[index];
    setTopicVisibility(newVisibility);
  };

  return (
    <div className="p-2 bg-white shadow-lg border rounded-md md:mr-2 mt-16">
      <p className="font-semibold text-green-600 text-xl">Topics</p>
      <hr className="mt-3" />

      {/* Topic list  */}
      <div className="mt-5">
        {subject.topics.map((topic, index) => (
          <Fragment key={topic.id}>
            <div
              onClick={() => handleTopicClick(index)}
              className="group p-1 flex gap-3 mt-2 text-[18px] items-center 
          text-gray-500 cursor-pointer"
            >
              <h2 className="text-sm md:text-lg hover:text-green-600">
                {topic.name}
              </h2>
            </div>
            <Model
              subject_id={subject_id}
              image={topic.topic_img_url}
              name={topic.name}
              topic_id={topic._id}
              isVisible={topicVisibility[index]}
              onClose={() => handleTopicClick(index)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default SideBarLeft;