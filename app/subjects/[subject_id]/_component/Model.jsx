import { XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function Model({ subject_id, image, name, topic_id, isVisible, onClose }) {
  if (!isVisible) return null;
  //   const handleClose = (e) => {
  //     if (e.target.id === "wrapper") onClose();
  //   };

  return (
    <main>
      <div
        id="wrapper"
        // onClick={handleClose}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="w-[300px] flex flex-col rounded-lg">
          <XIcon
            className="bg-transparent text-gray-100 text-xl place-self-end "
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
              <p className="text-gray-800 text-lg cursor-pointer hover:text-green-700">
                Watch Videos
              </p>
              <p className="text-gray-600 text-lg cursor-pointer hover:text-green-700">
                Attemp a Quiz
              </p>
              <p className="text-gray-600 cursor-pointer hover:text-green-700 text-lg">
                See Exam Questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Model;
