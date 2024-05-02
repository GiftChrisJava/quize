"use client";

import { useState } from "react";
import { ArrowDownNarrowWideIcon, LockIcon, UnlinkIcon, Unlock } from "lucide-react";

import Link from "next/link";
import { topics } from "@/app/subjects/[subject_id]/_component/constants/topics";
import VideoComponent from "./_components/VideoComponent";
import FormModel from "./_components/FormModel";
import SideBarLeft from "./_components/SideBarLeft";

function VideoPlayer({ params }) {
  
  const topic_id = parseInt(params.topic_id);
  const subtopic_id = params.subtopic_id;

  // Function to retrieve a topic based on the given topic_id
  const getTopicById = (topicId) => {
    return topics.find((topic) => topic.id === topicId);
  };

  const topic = getTopicById(topic_id);

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
    <main className="flex flex-row justify-between pb-6 ">
      <section className=" md:w-[320px] md:block hidden sm:ml-2 ">
        <ul className="p-2 sticky bg-white shadow-lg border rounded-md md:mr-2 mt-16">
          <p className="font-semibold text-green-600 text-xl">
            Available Videos
          </p>
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
      </section>
      <section className="max-container">
        <h2 className="text-center font-bold text-red-600 text-2xl mt-2 md:mb-5 mb-11">
          {topic.name}
        </h2>

        {/* video player component  */}
        <VideoComponent video={selectedVideo.videos_url} />

        <div className="px-3">
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
            <button className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 rounded-md text-white w-38">
              <Link
                href={`/subjects/${params.subject_id}/${params.topic_id}/videos/${selectedVideo.id}/intro/video/notes`}
              >
                <p>Read Notes Now!!</p>
              </Link>
            </button>

           

            <button
              onClick={() => setshowModel(true)}
              className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 rounded-md text-gray-300 w-38"
            >
              Give Feedback
            </button>

            <button className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 rounded-md text-gray-300 w-38">
              
              <Link href={`/quizes/learning/${topic.name}/${subtopic_id}`}>
                <p>Attempt Quiz</p>
              </Link>
            </button>
          </div>

            <div className="mt-14 flex flex-row justify-center items-center">
              {!topic.isPaidFor && (
               <Link
                 href={`https://buy.stripe.com/test_aEUg1WbZL9S69SE9AB`}
               >
                <div>
                  <button className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 rounded-md text-white w-38">
                     <p className="flex gap-2">
                     <k className="text-lg">UNLOCK VIDEOS</k> <UnlinkIcon className="text-orange-600 mt-1"/></p>
                  </button>
                </div>
                </Link>
              )}
            </div>
          
          <FormModel isVisible={showModel} onClose={onClose} />
        </article>
      </section>

      <section className=" hidden xl:block">
        <SideBarLeft subject_id={subtopic_id} />
      </section>
    </main>
  );
}

export default VideoPlayer;
