"use client";
import { useState } from "react";
import award from "../../../public/award.gif";
import trophy from "../../../public/trophy.gif";
import origami from "../../../public/origami.gif";
import sad from "../../../public/sad.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";

const QuizComponent = ({ path, quizData }) => {
  const questions = quizData.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [flag, setFlag] = useState(true);
  const [halfwayAcknowledged, setHalfwayAcknowledged] = useState(false);

  const handleOptionSelect = (option) => {
    if (questions[currentQuestion].allowsMultiple) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions([option]);
    }
    setIsOptionSelected(true);
  };

  const router = useRouter();

  const onFinish = () => {
    router.push(`${path}`);
  };

  const handleAnswerSubmit = () => {
    const correctAnswers = [questions[currentQuestion].correctAnswer];
    const isAnswerCorrect =
      selectedOptions.sort().join(",") === correctAnswers.sort().join(",");
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setTimeout(() => {
        setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1);
        setAttempts(0);
        setSelectedOptions([]);
        setIsCorrect(false);
      }, 1000);
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setAttempts(0);
          setSelectedOptions([]);
          setIsCorrect(false);
        }, 1000);
      }
    }

    setIsOptionSelected(false);
  };

  const renderProgressBar = () => {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    return (
      <div
        className="progress-bar-container"
        style={{ width: "100%", backgroundColor: "#e0e0e0" }}
      >
        <div
          className="progress-bar-fill"
          style={{
            width: `${progress}%`,
            backgroundColor: "green",
            height: "4px",
          }}
        />
      </div>
    );
  };

  const removeProgressBar = () => {
    setFlag(false);
    setShowResult(true);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAttempts(0);
    setSelectedOptions([]);
    setIsCorrect(false);
    setShowResult(false);
  };

  const renderResult = () => {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white shadow-xl p-4 rounded-md">
        {percentage > 79 ? (
          <div>
            <Image
              src={award}
              alt="trophy"
              height={200}
              width={200}
              className="flex flex-col justify-center items-center max-w-sm mx-auto"
            />
            <p className="text-center font-bold text-green-700">
              Excellent!! You Killed it
            </p>
          </div>
        ) : percentage > 64 ? (
          <div>
            <Image
              src={trophy}
              alt="trophy"
              height={200}
              width={200}
              className="flex flex-col justify-center items-center max-w-sm mx-auto"
            />
            <p className="text-center font-bold text-green-700">
              Congratulations!
            </p>
          </div>
        ) : percentage > 49 ? (
          <div>
            <Image
              src={origami}
              alt="trophy"
              height={200}
              width={200}
              className="flex flex-col justify-center items-center max-w-sm mx-auto"
            />
            <p className="text-center font-bold text-green-700">
              Good work! Keep On Practicing for Improvement
            </p>
          </div>
        ) : (
          <div>
            <Image
              src={sad}
              alt="trophy"
              height={200}
              width={200}
              className="flex flex-col justify-center items-center max-w-sm mx-auto"
            />
            <p className="text-center font-bold text-green-700">
              Oops!! That was not so great. Do not lose heart, Keep on
              Practicing
            </p>
          </div>
        )}
        <p className="text-center font-bold text-green-700 text-xl">
          {percentage}%
        </p>
        <p className="text-center font-bold text-gray-700 mt-2 mb-5">
          {score}/{questions.length}
        </p>
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center"
        >
          <button
            className="p-2 rounded mt-3 border border-slate-600 bg-gray-700 text-gray-200"
            onClick={handleRetry}
          >
            Retry Quiz
          </button>
          <button
            className="p-2 rounded mt-3 border border-slate-600 bg-gray-700 text-gray-200"
            onClick={onFinish}
          >
            Exit Quiz
          </button>
        </div>
      </div>
    );
  };

  const isHalfwayThrough =
    currentQuestion === Math.ceil(questions.length / 2) && !halfwayAcknowledged;

  const renderEncouragement = () => (
    <div data-aos="fade-top" className="encouragement-message text-center p-4">
      <h2 className="text-2xl font-semibold text-green-600">Great job so far!</h2>
      <p className="text-md text-gray-100">
        Take a deep breath and keep up the good work.
      </p>
      <button
        className="btn btn-continue mt-4 bg-gray-200 text-purple-600 font-medium py-2 px-4 rounded-md"
        onClick={() => setHalfwayAcknowledged(true)}
      >
        Continue Quiz
      </button>
    </div>
  );

  return (
    <main className="flex flex-col justify-center items-center mt-10 md:w-[700px] md:mx-auto">
      <div className="quiz-container sm:max-container max-w-[400px] bg-gray-700 rounded">
        {flag && renderProgressBar()}
        {attempts > 0 && (
          <div className="feedback-container mt-4">
            {attempts === 1 && (
              <p className="text-purple-400 text-center">
                Incorrect, One attempt remaining!
              </p>
            )}
            {attempts > 1 && (
              <p className="text-red-600 text-center font-bold">Incorrect!</p>
            )}
          </div>
        )}
        {isHalfwayThrough && renderEncouragement()}
        {!isHalfwayThrough &&
          !showResult &&
          currentQuestion < questions.length && (
            <div data-aos="zoom-in" className="p-4">
              <div className="flex gap-2 md:justify-center">
                <p
                  data-aos="zoom-in"
                  className="text-md md:text-xl font-semibold text-gray-300"
                >
                  {currentQuestion + 1}.
                </p>
                <h2 className="text-md md:text-2xl font-normal text-gray-300">
                  {questions[currentQuestion].questionText}
                </h2>
              </div>
              <div className="md:mt-10 mt-5 sm:grid sm:grid-flow-col sm:gap-1">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={option}
                    className={`text-left mb-3 md:mb-none max-w-[200px] text-blue-900 border border-blue-400 text-[12px] bg-opacity-20 bg-gray-800 m-2 p-2 rounded-sm font-semibold flex justify-between items-center ${
                      selectedOptions.includes(option) ? "bg-green-500" : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <div className="grid grid-flow-col p-2 md:p-0">
                      <p className="fixed border border-blue-400 text-purple-600 bg-gray-300 px-1 w-[20px]">
                        {String.fromCharCode(65 + index)}
                      </p>
                      <p className="ml-6 text-gray-300">{option}</p>
                    </div>
                    {selectedOptions.includes(option) &&
                      questions[currentQuestion].correctAnswer === option && (
                        <span className="text-green-500 ml-2"></span>
                        // <span className="text-green-500 ml-2">✓</span>

                      )}
                  </div>
                ))}
              </div>
              <button
                className={`mt-8 ml-2 p-2 border border-slate-600 ${
                  isOptionSelected
                    ? "text-gray-100 bg-gray-800"
                    : "text-gray-500 bg-gray-400 cursor-not-allowed"
                } text-sm rounded-md font-bold hover:text-purple-600`}
                onClick={handleAnswerSubmit}
                disabled={!isOptionSelected}
              >
                Submit Answer
              </button>
            </div>
          )}
        <div className="bg-[#f0f0f0f0]">
          {currentQuestion === questions.length && !showResult && (
            <button
              className="mt-10 ml-8 text-red-600 hover:text-gray-800"
              onClick={removeProgressBar}
            >
              Click Me To See Results
            </button>
          )}
        </div>
        {showResult && renderResult()}
      </div>
    </main>
  );
};

export default QuizComponent;
