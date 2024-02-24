import Image from "next/image";
import Link from "next/link";

function TopicCard({ name, image, topic_id, subject_id }) {
  return (
    <div className="mt-6 hover:cursor-pointer shadow-xl bg-white rounded-md mx-auto max-w-[220px] md:max-w-[230px]">
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
          <p className="text-red-600 text-sm mb-2 text-center">{name}</p>
          <hr />

          <div className="mt-2 ">
            <Link
              href={`/subjects/${subject_id}/${topic_id}/videos`}
              className="group flex gap-3 leading-normal items-center justify-center"
            >
              <p className="text-lg  text-gray-900 hover:text-green-600">
                Watch Videos
              </p>
            </Link>

            <Link
              href={`/subjects/${subject_id}/${topic_id}/quiz`}
              className="group justify-center flex gap-3 leading-normal items-center mt-2 "
            >
              <p className="text-lg text-gray-700 hover:text-green-600">
                Attemp Quiz
              </p>
            </Link>

            <Link
              href={`/subjects/${subject_id}/${topic_id}/questions`}
              className="group justify-center flex gap-3 leading-normal items-center mt-2"
            >
              <p className=" text-lg text-gray-500 hover:text-green-600">
                Questions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
