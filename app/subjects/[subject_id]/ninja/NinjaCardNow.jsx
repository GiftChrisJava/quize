import Image from "next/image";
import Link from "next/link";
import React from "react";

function NinjaCardNow({ topic_id, topic_title, thumbnail }) {
  return (
    <div className="mt-6  hover:cursor-pointer shadow-xl bg-white rounded-md mx-auto max-w-[220px] md:max-w-[250px] hover:bg-gray-800 hover:text-gray-200 hover:delay-75">
      <Link href="#">
        <div>
          <Image
            src={thumbnail}
            height={200}
            width={220}
            alt="topic image"
            className="rounded-md hover:cursor-pointer object-contain md:h-54 md:w-84 rounded-b-none"
          />
        </div>

        <div className="mt-2 text-center px-1 h-[80px] hover:max-h-[80px]">
          <small className="text-[12px] text-center">{topic_title}</small>
        </div>
      </Link>
    </div>
  );
}

export default NinjaCardNow;
