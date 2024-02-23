import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ThumbnailCard({ id, name, desc, image, subject_id, topic_id }) {
  const subtopic_id = id;
  return (
    <article className="mb-4 shadow-xl bg-white rounded-md mx-auto max-w-[250px]">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={image}
          height={250}
          width={270}
          alt="topic image"
          className="rounded-md hover:cursor-pointer object-contain md:h-54 md:w-84 rounded-b-none"
        />
      </div>

      <div className="px-2">
        <h3 className="mt-2 font-bold text-gray-800 text-sm">{name}</h3>
        <p className="text-sm text-gray-900 mt-2">{desc}</p>

        <hr className="mt-1" />

        <Link
          // href={`/subjects`}
          href={`/subjects/${subject_id}/${topic_id}/videos/${subtopic_id}/video`}
        >
          <div className="flex flex-row mt-1 justify-center items-center">
            <small className="text-green-600 font-bold hover:cursor-pointer hover:text-red-600">
              Watch Now
            </small>

            <small>
              <MoveUpRightIcon className="text-green-500 mt-1" />
            </small>
          </div>
        </Link>
      </div>
    </article>
  );
}

export default ThumbnailCard;
