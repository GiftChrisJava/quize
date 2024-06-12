"use client";
import { checkInternet, getSubtopicById } from "@/app/server-actions/actions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import store from "store2";

function VideoIntro({ params }) {
  const [loading, setLoading] = useState(true);

  let storedSubtopic;

  const subtopic_id = params.subtopic_id;
  const subject_id = params.subject_id;
  const topic_id = params.topic_id;

  useEffect(() => {
    fetchSubTopicData();
  }, []);

  const fetchSubTopicData = async () => {
    if (await checkInternet()) {
      try {
        const data = await getSubtopicById(subtopic_id);
        store.set("subtopic", data);
        storedSubtopic = store.get("subtopic");
      } catch (error) {
        console.error('Error getting a subtopic:', error);
      }
    } else {
      storedSubtopic = store.get("subtopic");
    }
    setLoading(false); // Set loading to false after fetching data
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#205530"} loading={loading} size={50} />
      </div>
    );
  }

  // get a subtopic
  const subtopic = store.get("subtopic");

  const notes = subtopic.notes[0];
  return (
    <div className="max-container px-4 h-[80vh]">
      <section>
        <h2 className="font-bold text-2xl text-gray-800 py-2 ml-3 text-center mt-2">
          {subtopic.foundSubtopic.subtopic_name}
        </h2>

        <div className="flex md:flex-row gap-5 flex-col mt-8">
          <Image
            className=""
            alt={subtopic.foundSubtopic.subtopic_name}
            src={subtopic.foundSubtopic.subtopic_img_url}
            height={340}
            width={235}
            data-aos="slide-left"
          />

          <p className="text-lg text-slate-700 px-2">{notes.paragraph1}</p>
        </div>
      </section>

      <section className="px-2">
        <p className="text-lg text-slate-700 mt-4">{notes.paragraph2}</p>
        <p className="text-lg text-slate-700 mt-8">{notes.paragraph3}</p>
      </section>

      <section className="mt-10">
        <Link
          href={`/subjects/${subject_id}/${topic_id}/videos/${subtopic_id}/intro/video`}
        >
          <h2 className="font-semibold cursor-pointer mb-8 mt-8 flex flex-row justify-center items-center mx-auto p-2 w-[200px] hover:text-gray-50 rounded bg-gray-700 text-gray-300">
            Watch Video Now
          </h2>
        </Link>
      </section>
    </div>
  );
}

export default VideoIntro;
