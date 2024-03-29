"use client";
import React, { useState } from "react";
import { topics } from "../../_component/constants/topics";
import QuestionCard from "./_component/QuestionCard";
import { testQuestions } from "./constants/practiceTest";

function Questions({ params }) {
  const topic_id = parseInt(params.topic_id);

  // function to get a topic
  const getTopic = (id) => {
    return topics.find((topic) => topic.id === id);
  };

  const topic = getTopic(topic_id); // get topic

  const [userAnswers, setUserAnswers] = useState({}); // Stores user responses
  const [editMode, setEditMode] = useState({}); // Tracks which question is in edit mode
  const [submitted, setSubmitted] = useState(false); // Tracks if the answers have been submitted

  const handleQuestionClick = (questionId) => {
    setEditMode((prevEditMode) => ({ ...prevEditMode, [questionId]: true }));
  };

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
  };

  const handleSave = (questionId) => {
    setEditMode((prevEditMode) => ({ ...prevEditMode, [questionId]: false }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="max-container">
      <h1 className="text-center text-xl text-gray-800 font-bold">
        Operating System Test
      </h1>
      <section className="p-3">
        {!submitted ? (
          <div className="question-list">
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
            <button onClick={handleSubmit}>Submit Answers</button>
          </div>
        ) : (
          <div className="answer-review">
            {testQuestions.map((question) => (
              <div key={question.id}>
                <p>Question: {question.question}</p>
                <p>Your Answer: {userAnswers[question.id]}</p>
                <p>Correct Answer: {question.answer}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Questions;
