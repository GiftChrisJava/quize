import { topics } from "@/app/subjects/[subject_id]/_component/constants/topics";
import Image from "next/image";
import SideBar from "./_components/SideBar";
import Button from "./_components/Button";

function VideoPlayer({ params }) {
  const topic_id = params.topic_id;
  const subtopic_id = params.subtopic_id;

  const topic = topics[topic_id - 1];

  const subtopics = topic.subtopics;
  const subtopic = subtopics[subtopic_id - 1];

  return (
    <main className="flex flex-row justify-between pb-6">
      <section className="flex-3 max-container">
        <h2 className="text-center font-bold text-red-600 text-2xl mt-2 mb-3">
          {topic.name}
        </h2>
        <Image
          src={subtopic.image}
          alt="image"
          className="md:h-[390px] md:w-[780px]"
        />

        <div>
          <h2 className="font-bold text-sm mt-1 text-gray-800">
            {subtopic.name}
          </h2>
          <h4 className="text-sm text-gray-700">{subtopic.description}</h4>
        </div>

        <div className="flex flex-row gap-8 justify-center items-center mt-12">
          <Button name={"Attemp Quize"} />
          <Button name={"Practice"} />
          <Button name={"Comment"} />
        </div>
      </section>
      <section className="md:block hidden sticky w-[300px]">
        <SideBar />
      </section>
    </main>
  );
}

export default VideoPlayer;
