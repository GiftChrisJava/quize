"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link

import { TfiEmail } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { getTutorById, postComment, getCustomerFeedbackByTutorId } from "@/app/server-actions/actions";
import { ClipLoader } from "react-spinners";

function Tutor({ params }) {
  const tutor_id = params.tutor_id;

  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  async function fetchTutor() {
    try {
      const data = await getTutorById(tutor_id);
      setTutor(data);
    } catch (error) {
      console.error("Error fetching tutor data:", error);
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchTutor();
  }, [tutor_id]);

  const handleViewComments = async () => {
    try {
      const feedbackData = await getCustomerFeedbackByTutorId(tutor_id);
      if (feedbackData) {
        const fetchedComments = feedbackData.map(comment => comment.feedback).reverse(); // Reverse to show most recent first
        setComments(fetchedComments);
      } else {
        setComments([]);
      }
      setShowComments(!showComments);
    } catch (error) {
      console.error("Error fetching customer feedback:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentData = {
      name: "Your Name", // Replace with actual user name if available
      feedback: commentText,
      tutor: tutor_id,
    };
    try {
      await postComment(commentData);
      setCommentSuccess(true);
      setCommentText('');
      setTimeout(() => {
        setCommentSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#AD1C23"} loading={loading} size={50} />
      </div>
    );
  }

  return (
    <main className="px-2 pb-[400px] pt-12 flex-grow h-[100%]">
      <div className="max-container">
        <section className="flex md:flex-row flex-col justify-center items-center">
          <Image
            className="rounded-md"
            alt="tutor"
            height={300}
            width={400}
            src={tutor.tutor.image_url}
          />

          <section className="flex flex-col gap-4 bg-white max-h-[500px] mt-4 md:max-w-[300px] md:rounded-tr-lg md:rounded-br-lg rounded md:rounded-none max-w-[400px]">
            <article className="px-2 w-[200px]">
              <h2 className="text-xl font-bold text-gray-700">{tutor.tutor.name}</h2>
            </article>

            <article className="px-2">
              <h2 className="text-md text-gray-800">{tutor.tutor.experience}</h2>
            </article>
            
            <hr />
            <article className="p-2 max-w-[300px] -mt-4">
              <h2 className="text-lg text-gray-600">
                <span className="text-gray-900">
                  {tutor.tutor.masteredSubject}{" "}
                </span>
                is the subject I mastered
              </h2>
            </article>

            <hr className="-mt-4"/>

            <article className="p-2 -mt-6 mb-2">
              <h2 className="text-xl font-bold ">
                <span className="text-green-600 text-sm">
                  Other subjects I teach
                </span>
                {tutor.subjects.map((subject) => (
                  <div key={subject._id}>
                    <h4 className="text-sm font-normal">{subject.name}</h4>
                  </div>
                ))}
              </h2>
            </article>

            <article className="-mt-6">
              <div>
                <hr />
                <h4 className="font-bold px-2 ">Get in touch</h4>

                <div className="flex flex-row gap-2 mt-2 px-2">
                  
                    <a href={`mailto:tutor@example.com`} target="_blank" rel="noopener noreferrer">
                      <TfiEmail className="w-8 h-8 text-red-600" />
                    </a>
                 
                  <a href={tutor.tutor.facebookLink} target="_blank" rel="noopener noreferrer">
                    <ImFacebook2 className="w-8 h-8 text-blue-600" />
                  </a>
                  <a href={`https://wa.me/${tutor.contacts[0]?.number}`} target="_blank" rel="noopener noreferrer">
                    <IoLogoWhatsapp className="w-8 h-8 text-green-600" />
                  </a>
                  <a href={tutor.tutor.linkedInProfileLink} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-8 h-8 text-blue-600" />
                  </a>
                </div>
              </div>
              <h2 className="text-xl font-bold mt-4 px-2">
                {tutor.contacts.map((contact) => (
                  <div key={contact._id}>
                    <h4 className="text-gray-700 text-sm font-normal">{contact.number}</h4>
                  </div>
                ))}
              </h2>
            </article>
          </section>
        </section>

        <form className="max-w-md mx-auto mt-20" onSubmit={handleSubmit}>
          <div className="px-3 mb-2 mt-2">
            <textarea
              placeholder="Add comment about this tutor.."
              className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end px-4">
            <input
              type="submit"
              className="px-2.5 py-1.5 rounded-md text-white text-sm bg-gray-700"
              value="Comment"
            />
          </div>
        </form>

        {commentSuccess && (
          <div className="flex justify-center items-center mt-4">
            <AiOutlineCheckCircle className="w-8 h-8 text-green-600" />
            <span className="ml-2 text-green-600">Comment sent successfully</span>
          </div>
        )}

        <article className="mt-16 flex flex-col gap-2 justify-center max-w-[150px] mx-auto">
          <button
            className="flex flex-col px-2.5 py-1.5 rounded-md text-white text-sm bg-gray-700 ml-4"
            onClick={handleViewComments}
          >
            View Comments
          </button>
          {showComments && comments.length > 0 && (
            <div className="relative max-h-[100vh] overflow-y-auto">
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg">
                <div className="py-1">
                  {comments.map((comment, index) => (
                    <div key={index} className="px-4 py-2 text-sm text-gray-700">
                      <h5>{comment}</h5>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {showComments && comments.length === 0 && (
            <div className="relative max-h-[100vh]">
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg">
                <div className="py-1 px-4 text-sm text-gray-700">
                  No comments available.
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}

export default Tutor;
