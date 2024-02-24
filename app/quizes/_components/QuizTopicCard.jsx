import Image from "next/image";
import Link from "next/link";
import React from "react";

function QuizTopicCard({ name, image, form, subject }) {
  return (
    <div>
      <div className="mt-6 hover:cursor-pointer shadow-xl bg-white rounded-md mx-auto max-w-[220px] md:max-w-[230px]">
        <div>
          <Image
            src={image}
            height={200}
            width={220}
            alt="quiz topic image"
            className="rounded-md hover:cursor-pointer object-contain md:h-54 md:w-84 rounded-b-none"
          />
        </div>

        <div className="mt-2  px-1">
          <div className="flex flex-col hover:cursor-pointer">
            <Link href={`/quizes`}>
              <p className="text-red-600 text-sm mb-2 text-center">{name}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizTopicCard;
