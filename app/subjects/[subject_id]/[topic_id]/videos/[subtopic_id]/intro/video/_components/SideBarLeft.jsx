"use client";
import { Fragment, useState, useEffect } from "react";
import Model from "@/app/subjects/[subject_id]/_component/Model";
import store from "store2";

function SideBarLeft({ subject_id }) {
  const [subject, setSubject] = useState(null);
  const [topicVisibility, setTopicVisibility] = useState([]);

  useEffect(() => {
    const storedSubject = store.get("subject");
    if (storedSubject && storedSubject.topics) {
      setSubject(storedSubject);
      setTopicVisibility(storedSubject.topics.map(() => false));
    }
  }, []);

  const handleTopicClick = (index) => {
    const newVisibility = [...topicVisibility];
    newVisibility[index] = !newVisibility[index];
    setTopicVisibility(newVisibility);
  };

  if (!subject || !subject.topics) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2 bg-white shadow-lg border rounded-md md:mr-2 mt-16">
      <p className="font-semibold text-green-600 text-xl">Topics</p>
      <hr className="mt-3" />

      <div className="mt-5">
        {subject.topics.map((topic, index) => (
          <Fragment key={topic.id}>
            <div
              onClick={() => handleTopicClick(index)}
              className="group p-1 flex gap-3 mt-2 text-[18px] items-center text-gray-500 cursor-pointer"
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
