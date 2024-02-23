"use client";
import Image from "next/image";
import Button from "./_components/Button";
import SideBarLeft from "./_components/SideBarLeft";
import { topics } from "@/app/subjects/[subject_id]/_component/constants/topics";
import FormModel from "./_components/FormModel";
import { useState } from "react";

function VideoPlayer({ params }) {
  const topic_id = params.topic_id;
  const subtopic_id = params.subtopic_id;

  const topic = topics[topic_id - 1];

  const subtopics = topic.subtopics;
  const subtopic = subtopics[subtopic_id - 1];

  // model state
  const [showModel, setshowModel] = useState(false);

  const onClose = () => {
    setshowModel(false);
  };

  return (
    <main className="flex flex-row justify-between pb-6">
      <section className=" md:w-[320px] md:block hidden sm:ml-2">
        <SideBarLeft subject_id={subtopic_id} />
      </section>
      <section className="max-container">
        <h2 className="text-center font-bold text-red-600 text-2xl mt-2 mb-3">
          {topic.name}
        </h2>
        <Image
          src={subtopic.image}
          alt="image"
          className="md:h-[390px] md:w-[780px] px-2"
        />

        <div className="px-2">
          <h2 className="font-bold text-sm mt-1 text-gray-800">
            {subtopic.name}
          </h2>
          <h4 className="text-sm text-gray-700">{subtopic.description}</h4>
        </div>

        <article>
          <div className="flex flex-col sm:flex-row gap-6 pt-2 justify-center items-center mt-9">
            <Button name={"Attemp Quize"} />

            <button
              onClick={() => setshowModel(true)}
              className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 rounded-md text-gray-200 w-38"
            >
              Give Feedback
            </button>

            <Button name={"Practice"} />
          </div>

          <FormModel isVisible={showModel} onClose={onClose} />
        </article>
      </section>
    </main>
  );
}

export default VideoPlayer;
