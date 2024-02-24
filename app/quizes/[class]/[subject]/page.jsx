import { topics } from "@/app/subjects/[subject_id]/_component/constants/topics";
import React from "react";
import QuizTopicCard from "../../_components/QuizTopicCard";

function QuizList({ params }) {
  return (
    <div className="max-container">
      <section>
        <p>{params.subject}</p>
      </section>
      <section>
        <div>
          {topics.map((topic) => (
            <article key={topic.id} className="mb-4">
              {/* display topic  */}
              <p>{topic.name}</p>

              {/* render the quize card  */}
              <div className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
                {topic.subtopics.map((subtopic) => (
                  <div key={subtopic.id}>
                    <QuizTopicCard
                      name={subtopic.name}
                      image={subtopic.image}
                      form={params.class}
                      subject={params.subject}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default QuizList;
