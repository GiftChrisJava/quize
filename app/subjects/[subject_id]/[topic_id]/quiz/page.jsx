"use client";
import React, { useState } from "react";
import { topics } from "../../_component/constants/topics";
import { allSubjects } from "@/app/allSubjects";
import QuizTopicCard from "@/app/quizes/_components/QuizTopicCard";

function Quiz({ params }) {
  const stringSubjectId = params.subject_id;
  const paramstopicId = params.topic_id;
  const topicId = parseInt(paramstopicId);

  // Function to retrieve object by id
  function getObjectById(id) {
    return allSubjects.find((subject) => subject.id === id);
  }
  const subject = getObjectById(stringSubjectId);

  // retrieve one topic
  function getTopicById(id) {
    return topics.find((topic) => topic.id === id);
  }

  const topic = getTopicById(topicId);

  let slate = "";

  let userClass = "class";
  if (subject.klass === 3) {
    slate = "text-green-600";
    userClass = "Form_three";
  } else {
    slate = "text-red-600";
    userClass = "Form_four";
  }

  return (
    <div className="max-container">
      <section>
        <p className={`${slate} font-bold text-center text-xl`}>
          {subject.name} Quiz
        </p>
      </section>
      <section>
        <div>
          <article key={topic.id} className="mb-4">
            {/* display topic  */}
            <p
              className={`font-bold text-gray-800 text-lg text-center md:text-left`}
            >
              {topic.name}
            </p>

            {/* render the quize card  */}
            <div className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
              {topic.subtopics.map((subtopic) => (
                <div key={subtopic.id}>
                  <QuizTopicCard
                    name={subtopic.name}
                    image={subtopic.image}
                    form={params.class}
                    subject={params.subject}
                    quiz_id={subtopic.id}
                    klass={userClass}
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Quiz;
