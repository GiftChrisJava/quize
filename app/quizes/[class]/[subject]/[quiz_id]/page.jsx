import QuizComponent from "@/app/quizes/_components/QuizComponent";
import React from "react";

function Quiz({ params }) {
  const path = `/quizes/${params.class}/${params.subject}`;

  return (
    <div className="" data-aos="slide-down">
      <QuizComponent path={path} />
    </div>
  );
}

export default Quiz;
