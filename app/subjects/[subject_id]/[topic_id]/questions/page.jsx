// Import necessary libraries and components
"use client";
import React, { useState, useEffect } from "react";
import QuestionCard from "./_component/QuestionCard";
import store from "store2";
import { getTestById, getTopicById } from "@/app/server-actions/actions";

function Questions({ params }) {
  const topic_id = params.topic_id;
  
  // State hooks
  const [topic, setTopic] = useState(null);
  const [testQuestions, setTestQuestions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [editMode, setEditMode] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Fetch topic and test questions when component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const topicData = await getTopicById(topic_id); // Fetch the topic data
        setTopic(topicData);
        const testId = topicData.test[0]._id; // Extract the test ID
        const testData = await getTestById(testId); // Fetch the test data
        setTestQuestions(testData.questions); // Set the questions in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchQuestions();
  }, [topic_id]);

  const handleQuestionClick = (questionId) => {
    setEditMode((prevEditMode) => ({ ...prevEditMode, [questionId]: true }));
  };

  const allQuestionsAttempted = testQuestions.every(
    (question) => userAnswers[question._id] && userAnswers[question._id].trim() !== ""
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
    setUserAnswers({});
    setEditMode({});
    setSubmitted(false);
    setShowResults(false);
  };

  return (
    <div className="max-container">
      <h1 className="text-center text-2xl text-gray-600 font-bold">
        {topic ? `${topic.name} Test` : "Loading..."}
      </h1>
      {!submitted && (
        <h5 className="text-center text-sm text-gray-800 mb-8 mt-8">
          Click on the question to write an answer.{" "}
          <span className="font-bold">
            If you have no answer to any question, just write what you think might be the answer
          </span>
        </h5>
      )}
      <section className="p-3">
        {!submitted && !showResults && (
          <div>
            {testQuestions.map((question) => (
              <QuestionCard
                key={question._id}
                question={question}
                userAnswer={userAnswers[question._id]}
                editMode={editMode[question._id]}
                onQuestionClick={() => handleQuestionClick(question._id)}
                onAnswerChange={(answer) => handleAnswerChange(question._id, answer)}
                onSave={() => handleSave(question._id)}
              />
            ))}

            <article className="flex flex-row justify-center items-center mt-10">
              <button
                className={`mt-1 rounded px-3 py-2 font-semibold text-sm ${
                  allQuestionsAttempted ? "bg-slate-600 hover:text-green-600" : "bg-gray-400"
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
              <div key={question._id} className="mb-6">
                <p className="text-md font-bold text-gray-700">
                  {question.question}
                </p>

                <div className="ml-8">
                  <p>
                    <span className="font-bold text-gray-600">Your Answer:</span>{" "}
                    <span className="text-gray-600">{userAnswers[question._id]}</span>
                  </p>

                  <p className="mt-4">
                    <span className="font-bold text-green-700">Correct Answer:</span>{" "}
                    <span className="text-green-700">{question.answer}</span>
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
            <p className="text-md text-gray-700 max-w-sm text-center">
              Scoring 70% on your test is commendable, and it reflects a solid understanding of the material. 
              However, I recommend reviewing the questions you missed to identify areas for improvement. 
              Ensure clarity on underlying concepts and practice regularly to enhance your performance. 
              Keep up the positive mindset, as learning is a continuous journey! 🌟
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
