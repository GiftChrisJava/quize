"use client";
import { allSubjects } from "@/app/allSubjects";
import SideNav from "./_component/SideNav";
import TopicCard from "./_component/TopicCard";
import { topics } from "./_component/constants/topics";
import { useState } from "react";

function Subject({ params }) {
  const subject_id = params.subject_id;

  // Function to retrieve object by id
  function getObjectById(id) {
    return allSubjects.find((subject) => subject.id === id);
  }

  const subject = getObjectById(subject_id);

  return (
    <div className="flex flex-row justify-between pb-6">
      <section className="flex-3 max-container">
        <article data-aos="slide-up">
          <h4 className="font-semibold text-3xl text-gray-500 text-center pt-3">
            {subject.name}
          </h4>
          <small className="block font-bold text-gray-900 text-center">
            Select on a topic to watch videos, take a quiz and see exam
            questions
          </small>
        </article>

        <article className="px-2">
          <div
            data-aos="zoom-in"
            className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1"
          >
            {topics.map((topic) => (
              <div key={topic.id}>
                <TopicCard
                  className="flex"
                  name={topic.name}
                  image={topic.image}
                  topic_id={topic.id}
                  subject_id={subject.id}
                />
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* side bar  */}
      <section className="md:block hidden">
        <SideNav subject_id={subject_id} />
      </section>
    </div>
  );
}

export default Subject;
