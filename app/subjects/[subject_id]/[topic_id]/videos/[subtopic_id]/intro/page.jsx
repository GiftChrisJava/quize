import { topics } from "@/app/subjects/[subject_id]/_component/constants/topics";
import Image from "next/image";
import Link from "next/link";

function page({ params }) {
  const topic_id = parseInt(params.topic_id);
  const subtopic_id = parseInt(params.subtopic_id);
  const subject_id = parseInt(params.subject_id);

  // { subject_id: '12', topic_id: '5', subtopic_id: '1' }
  // href={`/subjects/${subject_id}/${topic_id}/videos/${subtopic_id}/intro/video`}

  // Function to retrieve a topic based on the given topic_id
  const getTopicById = (topicId) => {
    return topics.find((topic) => topic.id === topicId);
  };

  // Function to retrieve a subtopic based on the given topic_id and subtopic_id
  const getSubtopicById = (topicId, subtopicId) => {
    const topic = getTopicById(topicId);
    if (topic) {
      return topic.subtopics.find((subtopic) => subtopic.id === subtopicId);
    }
    return null; // Return null if the topic with the given topicId is not found
  };

  // get a topic
  const subtopic = getSubtopicById(topic_id, subtopic_id);

  const notes = subtopic.notes[0];
  return (
    <div className="max-container px-4">
      <section>
        <h2 className="font-bold text-2xl text-gray-800 py-2 ml-3 text-center mt-2">
          {subtopic.name}
        </h2>

        <div className="flex md:flex-row gap-5 flex-col mt-8">
          <Image
            className="p-2"
            alt={subtopic.name}
            src={subtopic.image}
            height={`100%`}
            width={`100%`}
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

export default page;
