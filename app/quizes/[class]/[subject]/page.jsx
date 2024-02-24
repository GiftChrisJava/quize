import { topics } from "@/app/subjects/[subject_id]/_component/constants/topics";
import React from "react";
import QuizTopicCard from "../../_components/QuizTopicCard";

function QuizList({ params }) {
  let slate = "";

  let userClass = "class";
  if (params.class.endsWith("e")) {
    slate = "text-green-600";
  } else {
    slate = "text-red-600";
  }
  return (
    <div className="max-container">
      <section>
        <p className={`${slate} font-bold text-center text-xl`}>
          {params.subject} Quizzes
        </p>
      </section>
      <section>
        <div>
          {topics.map((topic) => (
            <article key={topic.id} className="mb-4">
              {/* display topic  */}
              <p className={`font-bold text-gray-800 text-lg`}>{topic.name}</p>

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
