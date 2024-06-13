"use client"
import QuizComponent from "@/app/quizes/_components/QuizComponent";
import React from "react";
import store from "store2";

function Quiz({ params }) {
  console.log(params);
  const path = `/quizes/${params.class}/${params.subject}`;

  const subtopic = store.get("subtopic");

  return (
    <div className="h-[60vh]" data-aos="slide-down">
      <QuizComponent path={path} quizData={subtopic.quizzes[0]} />

    </div>
  );
}

export default Quiz;
