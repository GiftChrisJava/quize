"use client";
import React, { useState } from "react";
import { topics } from "../../_component/constants/topics";
import QuestionCard from "./_component/QuestionCard";
import { testQuestions } from "./constants/practiceTest";

function Questions({ params }) {
  const topic_id = parseInt(params.topic_id);

  const getTopic = (id) => {
    return topics.find((topic) => topic.id === id);
  };

  const topic = getTopic(topic_id); // get topic
  // const topic = getTopic(topic_id);

  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({}); // Stores user responses
  const [editMode, setEditMode] = useState({}); // Tracks which question is in edit mode
  const [submitted, setSubmitted] = useState(false); // Tracks if the answers have been submitted

  const handleQuestionClick = (questionId) => {
    setEditMode((prevEditMode) => ({ ...prevEditMode, [questionId]: true }));
  };

  const allQuestionsAttempted = testQuestions.every(
    (question) =>
      userAnswers[question.id] && userAnswers[question.id].trim() !== ""
  );
  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
  };

  const handleSave = (questionId) => {
    setEditMode((prevEditMode) => ({ ...prevEditMode, [questionId]: false }));
  };

  const handleSubmit = () => {
    if (allQuestionsAttempted) {
      setSubmitted(true);
    } else {
      alert("Please attempt all questions.");
    }
  };

  const handleSeeResults = () => {
    setShowResults(true);
  };

  const handleRetry = () => {
    // Reset states as needed for retry
    setUserAnswers({});
    setEditMode({});
    setSubmitted(false);
    setShowResults(false);
  };

  return (
    <div className="max-container">
      <h1 className="text-center text-2xl text-gray-600 font-bold">
        Operating System Test
      </h1>
      {!submitted && (
        <h5 className="text-center text-sm text-gray-800 mb-8 mt-8">
          click on the question to write an answer{". "}
          <span className="font-bold">
            {" "}
            If you have no answer to any question, just write what you think
            might be the answer
          </span>
        </h5>
      )}
      <section className="p-3">
        {!submitted && !showResults && (
          <div className="">
            {testQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                userAnswer={userAnswers[question.id]}
                editMode={editMode[question.id]}
                onQuestionClick={() => handleQuestionClick(question.id)}
                onAnswerChange={(answer) =>
                  handleAnswerChange(question.id, answer)
                }
                onSave={() => handleSave(question.id)}
              />
            ))}

            <article className="flex flex-row justify-center items-center mt-10">
              <button
                className={`mt-1 rounded px-3 py-2 font-semibold text-sm ${
                  allQuestionsAttempted
                    ? "bg-slate-600 hover:text-green-600"
                    : "bg-gray-400"
                } text-gray-200 w-38`}
                onClick={handleSubmit}
                disabled={!allQuestionsAttempted}
              >
                Submit Answers
              </button>
            </article>
          </div>
        )}
        {submitted && !showResults && (
          <div className="mx-w-xl">
            {testQuestions.map((question) => (
              <div key={question.id} className="mb-6">
                <p className="text-md font-bold text-gray-700">
                  {question.question}
                </p>

                <div className="ml-8">
                  <p>
                    <span className="font-bold text-gray-600">
                      Your Answer:
                    </span>{" "}
                    <span className="text-gray-600">
                      {userAnswers[question.id]}
                    </span>
                  </p>

                  <p className="mt-4">
                    <span className="font-bold text-green-700">
                      Correct Answer:
                    </span>{" "}
                    <span className="text-green-700"> {question.answer}</span>
                  </p>
                </div>
              </div>
            ))}

            <article className="flex flex-row justify-center items-center mt-10">
              <button
                className="mt-1 rounded px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 text-gray-200 w-38"
                onClick={handleSeeResults}
              >
                See Results
              </button>
            </article>
          </div>
        )}

        {showResults && (
          <div className="flex flex-col justify-center items-center">
            {/* Display the results and feedback from the AI here */}
            <p className="text-4xl font-bold text-green-700 mb-8 mt-10">76 %</p>
            <p className="text-md  text-gray-700 max-w-sm text-center">
              Scoring 70% on your test is commendable, and it reflects a solid
              understanding of the material. However, I recommend reviewing the
              questions you missed to identify areas for improvement. Ensure
              clarity on underlying concepts and practice regularly to enhance
              your performance. Keep up the positive mindset, as learning is a
              continuous journey! 🌟
            </p>
            <button
              onClick={handleRetry}
              className="mt-8 rounded px-4 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 text-gray-200 w-38"
            >
              Return
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Questions;
