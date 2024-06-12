"use client";
import { computerLiteracyTopics } from "../literacyTopics";
import LiteracyVideoPlayer from "./LiteracyVideoPlayer";

function LiterscyVideos({ params }) {
  const thumb_id = parseInt(params.thumb_id);

  // Function to retrieve object based on id
  const getObjectById = (id) => {
    return computerLiteracyTopics.find((topic) => topic.id === id);
  };

  // Retrieve the object based on the thumb_id
  const videoObject = getObjectById(thumb_id);

  return (
    <div>
      <section className="mt-4 mb-8">
        <h3 className="text-center text-[25px] font-semibold text-gray-800">
          {videoObject.topic_title}
        </h3>
      </section>
      <section className="">
        <LiteracyVideoPlayer video={videoObject.video_url} />

        <h5 className="mt-4 text-center px-2">{videoObject.description}</h5>
      </section>
    </div>
  );
}

export default LiterscyVideos;
