"use client";
import Button from "./_components/Button";
import SideBarLeft from "./_components/SideBarLeft";
import { topics } from "@/app/subjects/[subject_id]/_component/constants/topics";
import FormModel from "./_components/FormModel";
import { useState } from "react";
import { ArrowDownNarrowWideIcon, LockIcon, Unlock } from "lucide-react";
import VideoComponent from "./_components/VideoComponent";

function VideoPlayer({ params }) {
  const topic_id = params.topic_id;
  const subtopic_id = params.subtopic_id;

  const topic = topics[topic_id - 1];

  const subtopics = topic.subtopics;
  const subtopic = subtopics[subtopic_id - 1];

  // model state
  const [showModel, setshowModel] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(subtopic.videos[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onClose = () => {
    setshowModel(false);
  };

  return (
    <main className="flex flex-row justify-between pb-6">
      <section className=" md:w-[320px] md:block hidden sm:ml-2">
        {topic.premium ? (
          <ul className="p-2 sticky bg-white shadow-lg border rounded-md md:mr-2 mt-12">
            <p className="font-semibold text-green-600 text-xl">Topics</p>
            <hr className="mt-3" />
            {subtopic.videos.map((video, index) => (
              <li
                className={`group p-1 flex gap-3 mt-2 text-[18px] items-center 
        ${
          !video.locked
            ? "text-gray-500 cursor-pointer"
            : "text-gray-300 cursor-not-allowed"
        }`}
                key={index}
                onClick={() => !video.locked && setSelectedVideo(video)}
              >
                <p className="flex gap-2">
                  {video.locked && topic.isPaidFor ? (
                    <LockIcon className="w-5" />
                  ) : (
                    <Unlock className="w-7" />
                  )}
                  <h2
                    className={`text-sm md:text-lg ${
                      !video.locked ? "hover:text-green-600" : ""
                    }`}
                  >
                    {video.title}
                  </h2>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <SideBarLeft subject_id={subtopic_id} />
        )}
      </section>
      <section className="max-container">
        <h2 className="text-center font-bold text-red-600 text-2xl mt-2 md:mb-5 mb-11">
          {topic.name}
        </h2>

        {/* video player component  */}
        <VideoComponent video={selectedVideo.videos_url} />

        <div className="px-2">
          <h2 className="font-bold text-center md:text-left mt-3 md:-mt-5 text-sm md:px-9 text-gray-800 ">
            {selectedVideo.title}
          </h2>
        </div>

        {/* buttoms  */}
        <article>
          <div className="flex flex-col md:flex-row gap-6 pt-2 justify-center items-center mt-9 mb-5 ">
            {/* show this button if its in premium  */}
            {topic.premium && (
              <div className="relative inline-block text-left md:hidden">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 rounded-md text-gray-200 w-38"
                >
                  <p className="flex gap-2">
                    Select Video
                    <span>
                      <ArrowDownNarrowWideIcon className="w-5" />
                    </span>
                  </p>
                </button>

                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {subtopic.videos.map((video, index) => (
                        <a
                          key={video.id}
                          href="#"
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                            video.locked ? "cursor-not-allowed opacity-50" : ""
                          }`}
                          role="menuitem"
                          tabIndex="-1"
                          id={`menu-item-${video.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!video.locked) {
                              setSelectedVideo(video);
                              setDropdownOpen(false); // close the dropdown
                            }
                          }}
                        >
                          {video.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* button  */}

            <Button
              name={"Attemp Quize"}
              premium={topic.premium}
              isPaid={topic.isPaidFor}
            />

            <button
              onClick={() => setshowModel(true)}
              className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 rounded-md text-gray-200 w-38"
            >
              Give Feedback
            </button>

            <Button name={"Practice"} />
          </div>

          <FormModel isVisible={showModel} onClose={onClose} />
        </article>
      </section>
    </main>
  );
}

export default VideoPlayer;
