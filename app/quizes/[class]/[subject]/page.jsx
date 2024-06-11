import { topics } from "@/app/subjects/[subject_id]/_component/constants/topics";
import React from "react";
import QuizTopicCard from "../../_components/QuizTopicCard";
import { LineChart } from "lucide-react";
import Link from "next/link";

function QuizList({ params }) {
  console.log(params)
  let slate = "";

  let userClass = "class";
  if (params.class.endsWith("e")) {
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
          {params.subject} Quiz
        </p>
      </section>

      {/* <section className="mt-12">
      <button
        className="btn btn-continue mt-4 bg-gray-800 text-gray-200 font-medium py-2 px-4 rounded-md flex flex-row gap-2 justify-center mx-auto max-sm"
      >
        <Link href={`/quizes/${params.class}/${params.class}/Perfomance`}>
          <h5 className="flex flex-row gap-2">
            <span>See How You Are Performing</span>
            <LineChart className="block"/>
          </h5>
        </Link>
      </button>
      </section> */}


      <section className="mt-12">
        <div>
          {topics.map((topic) => (
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
          ))}
        </div>
      </section>
    </div>
  );
}

export default QuizList;
