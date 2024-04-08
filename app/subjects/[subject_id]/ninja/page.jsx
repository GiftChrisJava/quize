import React from "react";
import NinjaCardNow from "./NinjaCardNow";
import { computerLiteracyTopics } from "./literacyTopics";

function Ninja() {
  return (
    <div className="max-container max-w-3xl mx-auto p-3">
      <div>
        <h2 className="text-2xl text-gray-800 font-bold">
          Outside The Classroom
        </h2>
        <p className="mt-8">
          Hey, Hey, Hey! 🎉 Big shoutout to you for making the smart move to
          check out this section! 🚀 Get ready for a fun ride because
          we&lsquo;ve got some seriously cool videos lined up to supercharge
          your computer skills and make you a tech whiz! 💻 Say goodbye to
          boring lectures because here, learning feels like a breeze! 🌬️ So
          buckle up and get ready to dive into the world of computer literacy
          with a big smile! 😄 Let&lsquo;s make learning a blast together! 🌟
        </p>

        <p className="text-[16px] text-purple-700 mt-8 mb-4 text-center md:text-left">
          Select the images below to watch a video
        </p>
      </div>

      <div
        data-aos="zoom-in"
        className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1"
      >
        {computerLiteracyTopics.map((topic) => (
          <div key={topic.id}>
            <NinjaCardNow
              className="flex"
              topic_title={topic.topic_title}
              thumbnail={topic.thumbnail}
              topic_id={topic.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ninja;
