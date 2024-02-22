"use client";
import React, { useState } from "react";
import { topics } from "../../_component/constants/topics";
import Image from "next/image";
import ThumbnailCard from "./_components/ThumbnailCard";
import { PlaySquareIcon } from "lucide-react";

function Videos({ params }) {
  console.log(params.topic_id);
  const [topic, settopic] = useState(topics[params.topic_id - 1]);
  console.log(topic);
  return (
    <main className="bg-white h-full">
      <hr />
      <div className="max-container p-4 flex flex-col justify-center items-center">
        <article className="mb-8">
          <div>
            <Image
              src={topic.image}
              alt="image"
              className="w-[850px] h-[220px] rounded-xl"
            />
            <p className="font-bold text-4xl text-white -mt-10 ml-3">{`${topic.name}`}</p>
          </div>
        </article>

        <small className=" flex gap-2 items-center text-center text-lg text-gray-800 mb-3 font-bold">
          <span>
            <PlaySquareIcon />
          </span>
          Available Videos
        </small>

        <article className="max-container mt-4 sm:px-9 md:px-1 grid md:grid-cols-3 gap-1 sm:grid-cols-2 sm:gap-10 grid-cols-1">
          {topic.subtopics.map((subtopic) => (
            <div key={subtopic.id}>
              <ThumbnailCard
                id={subtopic.id}
                name={subtopic.name}
                desc={subtopic.description}
                image={subtopic.image}
              />
            </div>
          ))}
        </article>
      </div>
    </main>
  );
}

export default Videos;
