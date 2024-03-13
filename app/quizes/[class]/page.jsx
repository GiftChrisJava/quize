import { formFour, formThree } from "@/app/_data";
import { MoveRight } from "lucide-react";
import React from "react";
import SubjectCard from "../_components/SubjectCard";

function Form({ params }) {
  let subjects = [];
  let slate = "";

  let userClass = "class";
  if (params.class.endsWith("e")) {
    userClass = "Form 3";
    subjects = formThree;
    slate = "text-green-600";
  } else {
    userClass = "Form 4";
    subjects = formFour;
    slate = "text-red-600";
  }

  return (
    <div className="w-full bg-white border border-t h-screen">
      <h2 className={`text-center mt-4 font-bold ${slate} text-3xl`}>
        {userClass}
      </h2>

      <article className="max-container mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="flex flex-col gap-5 justify-center px-2">
          <p className="text-3xl font-bold text-gray-800 ">
            Unleash Your Inner Wizard Of Wisdom
          </p>

          <p className="text-lg text-gray-700">
            Embark on a journey of knowledge exploration with our extensive
            collection of interactive Quizzes
          </p>

          <div className="flex flex-row gap-2 items-center justify-center p-2 w-40 rounded-md bg-gray-900">
            <p className="text-gray-200 text-md">Make Selection</p>
            <MoveRight className="md:text-gray-400 text-gray-900" />
          </div>
        </section>

        <section className="px-2">
          <div className="grid md:grid-cols-3 gap-1 sm:grid-cols-2 sm:gap-4 grid-cols-1">
            {subjects.map((subject) => (
              <div key={subject.id}>
                <SubjectCard
                  name={subject.name}
                  slate={slate}
                  klass={params.class}
                />
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

export default Form;
