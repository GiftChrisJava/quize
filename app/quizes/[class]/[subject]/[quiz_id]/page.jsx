import QuizComponent from "@/app/quizes/_components/QuizComponent";
import React from "react";

function Quiz() {
  // allow user to select multiple answers if th question require user to do so, if the  question type
  // needs user to select one answer then it should not be possible to do so.

  // show a green tick if user has answerd the question right before automatically rendering the next question

  // after user has attempted half of the questions, do not render a next question, but render an encouraging message
  // along with a continue button so that user clicks it, the half + one question has to be rendered so that user continues attempting
  // questions

  return (
    <div>
      <QuizComponent />
    </div>
  );
}

export default Quiz;
