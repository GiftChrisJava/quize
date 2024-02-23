import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Model({ subject_id, image, name, topic_id, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <main>
      <div
        id="wrapper"
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full"
      >
        <div className="w-[300px] flex flex-col rounded">
          <XIcon
            className="bg-transparent text-white text-xl place-self-end "
            onClick={() => onClose()}
          />
          <div className="bg-gray-200 rounded-sm">
            <Image
              src={image}
              alt="image"
              height={200}
              width={300}
              className="p-0 rounded-sm rounded-b-none"
            />
            <p className="text-center text-lg font-bold text-red-600 ">
              {name}
            </p>

            <div className="m-2 flex flex-col justify-center items-center">
              <Link href={`/subjects/${subject_id}/${topic_id}/videos`}>
                <p className="text-gray-900 text-lg cursor-pointer hover:text-green-700">
                  Watch Videos
                </p>
              </Link>
              <Link href={`/subjects/${subject_id}/${topic_id}/quizes`}>
                <p className="text-gray-700 text-lg cursor-pointer hover:text-green-700">
                  Attemp Quiz
                </p>
              </Link>

              <Link href={`/subjects/${subject_id}/${topic_id}/questions`}>
                <p className="text-gray-600 cursor-pointer hover:text-green-700 text-lg">
                  Questions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Model;
