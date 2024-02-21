import { BookOpenText, PencilLine, PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function TopicCard({ name, image, topic_id, subject_id }) {
  // topic_video_id will used to find all videos under this topic_id
  const topic_videos_id = topic_id;

  // topic_video_id will used to find all videos under this topic_id
  const topic_quiz_id = topic_id;

  // topic_questions_id will used to find all exam questions under this topic_id
  const topic_questions_id = topic_id;
  return (
    <div className="mt-6 hover:cursor-pointer shadow-xl bg-white rounded-md mx-auto max-w-[240px] md:max-w-[220px] ">
      <div>
        <Image
          src={image}
          height={200}
          width={220}
          alt="topic image"
          className="rounded-md hover:cursor-pointer object-contain md:h-54 md:w-84 rounded-b-none"
        />
      </div>

      <div className="mt-2  px-1">
        <div className="flex flex-col hover:cursor-pointer">
          <p className="font-semibold text-red-600 text-sm mb-2">{name}</p>
          <hr />

          <div className="mt-2">
            <Link
              href={`/resources/${topic_videos_id}`}
              // href={`/${subject_id}/${topic_id}`}
              className="group flex gap-3 leading-normal items-center"
            >
              <p className="text-lg font-bold text-gray-800 hover:text-green-600">
                Watch Videos
              </p>
              <PlayCircleIcon className="text-gray-700 group-hover:animate-bounce group-hover:text-red-600" />
            </Link>

            <Link
              href="/"
              className="group flex gap-3 leading-normal items-center mt-2 "
            >
              <p className="text-lg font-semibold text-gray-700 hover:text-green-600">
                Attemp a Quiz
              </p>
              <PencilLine className="text-gray-600 group-hover:animate-bounce group-hover:text-green-600" />
            </Link>

            <Link
              href="/"
              className="group flex gap-3 leading-normal items-center mt-2"
            >
              <p className=" text-lg font-semibold text-gray-500 hover:text-green-600">
                Exam Questions
              </p>
              <BookOpenText className="text-gray-500 group-hover:animate-bounce group-hover:text-green-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
