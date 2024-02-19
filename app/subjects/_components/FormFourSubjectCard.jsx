import Image from "next/image";
import React from "react";

function FormFourSubjectCard({ name, image, id }) {
  return (
    <div className="mt-6 hover:cursor-pointer shadow-xl bg-white rounded-md mx-auto max-w-[220px] md:max-w-[200px] ">
      <div>
        <Image
          src={image}
          height={200}
          width={220}
          alt="subject image"
          className="rounded-md hover:cursor-pointer object-contain md:h-54 md:w-84 rounded-b-none"
        />
      </div>

      <div className="mt-2  px-1">
        <div className="flex flex-row space-x-5 hover:cursor-pointer">
          <p className="font-bold text-red-600 text-md">{name}</p>
        </div>
        <small className="text-sm mt-1 md:mt-3 text-gray-700 md:text-sm">
          Start learning
        </small>
      </div>
    </div>
  );
}

export default FormFourSubjectCard;
