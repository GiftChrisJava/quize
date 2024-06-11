import QuizComponent from "@/app/quizes/_components/QuizComponent";
import React from "react";

function Quiz({ params }) {
  console.log(params);
  const path = `/quizes/${params.class}/${params.subject}`;

  return (
    <div className="h-[60vh]" data-aos="slide-down">
      <QuizComponent path={path} />
    </div>
  );
}

export default Quiz;
