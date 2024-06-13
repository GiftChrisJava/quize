"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ThumbnailCard from "./_components/ThumbnailCard";
import { PlaySquareIcon } from "lucide-react";
import { checkInternet, getTopicById } from "@/app/server-actions/actions";
import store from "store2";
import ClipLoader from "react-spinners/ClipLoader";

function Videos({ params }) {
  const subject_id = params.subject_id;
  const topic_id = params.topic_id;

  let [topic, setTopic] = useState({ banner_url: '', name: '', isPremium: false, subtopics: [] });
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    fetchSubtopicsFromTopic();
  }, []);

  const fetchSubtopicsFromTopic = async () => {
    if (await checkInternet()) {
      try {
        const data = await getTopicById(topic_id);
        setTopic(data);
        store.set("topic", data);
      } catch (error) {
        console.error('Error getting a subject:', error);
      }
    } else {
      const storedTopic = store.get("topic");
      if (storedTopic) {
        setTopic(storedTopic);
      }
    }
    setLoading(false); // Set loading to false after fetching data
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#AD1C23"} loading={loading} size={50} />
      </div>
    );
  }

  topic = store.get("topic");

  return (
    <main className="h-full">
      <hr />
      <div className="max-container p-4 flex flex-col justify-center items-center">
        <article className="mb-8">
          <div>
          <Image
            src={topic.banner_url}
            alt="image"
            width={850}
            height={250}
            className="rounded"
          />

            <p className="font-bold text-[23px] md:text-4xl text-white -mt-10 sm:-mt-11 ml-3">{`${topic.name}`}</p>
          </div>
        </article>

        <small className="flex gap-2 items-center text-center text-lg text-gray-800 mb-3 font-bold">
          <span>
            <PlaySquareIcon />
          </span>
          Available Videos
          <span>{topic.isPremium ? "(Paid Content)" : "(Free)"}</span>
        </small>

        <article
          data-aos="slide-right"
          className="max-container mt-4 sm:px-9 md:px-1 grid md:grid-cols-3 gap-1 sm:grid-cols-2 sm:gap-10 grid-cols-1"
        >
          {topic.subtopics.map((subtopic) => (
            <div key={subtopic.id}>
              <ThumbnailCard
                id={subtopic._id}
                name={subtopic.subtopic_name}
                desc={subtopic.description}
                image={subtopic.subtopic_img_url}
                subject_id={subject_id}
                topic_id={topic_id}
              />
            </div>
          ))}
        </article>
      </div>
    </main>
  );
}

export default Videos;
