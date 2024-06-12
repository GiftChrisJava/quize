"use client";
import React, { useState, useEffect } from "react";
import QuizTopicCard from "@/app/quizes/_components/QuizTopicCard";
import store from "store2";
import { getTopicById, getSubjectById } from "@/app/server-actions/actions";

function Quiz({ params }) {
  const stringSubjectId = params.subject_id;
  const topicId = params.topic_id;

  const [topic, setTopic] = useState(null);
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrievedTopic = await getTopicById(topicId);
        const retrievedSubject = await getSubjectById(stringSubjectId);
        setTopic(retrievedTopic);
        setSubject(retrievedSubject);

        store.set("topic", retrievedTopic);
        store.set("subject", retrievedSubject);
      } catch (error) {
        console.error("Error fetching topic and subject:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topicId, stringSubjectId]);

  let slate = "";
  let userClass = "class";

  if (subject && subject.foundSubject?.class?.name === "Form 3") {
    slate = "text-green-600";
    userClass = "Form_three";
  } else if (subject && subject.foundSubject?.class?.name) {
    slate = "text-red-600";
    userClass = "Form_four";
  }

  if (loading) {
    return <div className="p-4 justify-center items-center">Loading...</div>; // You can use a spinner or a loading indicator here
  }

  return (
    <div className="max-container">
      <section>
        {subject && subject.foundSubject && (
          <p className={`${slate} font-bold text-center text-xl`}>
            {subject.foundSubject.name} Quizzes
          </p>
        )}
      </section>
      <section>
        <div>
          {topic && (
            <article key={topic._id} className="mb-4">
              {/* Display topic */}
              <p className={`font-bold text-gray-800 text-lg text-center md:text-left`}>
                {topic.name}
              </p>

              {/* Render the quiz card */}
              <div className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
                {topic.subtopics.map((subtopic) => (
                  <div key={subtopic._id}>
                    <QuizTopicCard
                      name={subtopic.subtopic_name}
                      image={subtopic.subtopic_img_url}
                      form={params.class}
                      subject={subject?.foundSubject?.name}
                      quiz_id={subtopic._id}
                      klass={userClass}
                    />
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}

export default Quiz;
