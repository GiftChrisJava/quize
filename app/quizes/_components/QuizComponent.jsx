"use client";
import { useState } from "react";
import { questions } from "../constants/questions";
import { MoveRightIcon } from "lucide-react";

const QuizComponent = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [flag, setFlag] = useState(true);
  const [halfwayAcknowledged, setHalfwayAcknowledged] = useState(false);

  // Function to handle option selection for multiple correct answers
  const handleOptionSelect = (option) => {
    // Check if the current question allows multiple answers
    if (questions[currentQuestion].allowsMultiple) {
      // If it does, toggle the option in the selectedOptions array
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      // If only one answer is allowed, set the selected option directly
      setSelectedOptions([option]);
    }
    setIsOptionSelected(true);
  };

  // Function to handle answer submission for multiple correct answers
  const handleAnswerSubmit = () => {
    const correctAnswers = questions[currentQuestion].answers;
    const isAnswerCorrect =
      selectedOptions.sort().join(",") === correctAnswers.sort().join(",");
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setTimeout(() => {
        setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1);
        setAttempts(0);
        setSelectedOptions([]); // Reset for the next question
        setIsCorrect(false); // Reset for the next question
      }, 1000); // Delay to show the green tick before moving to the next question
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setAttempts(0);
          setSelectedOptions([]); // Reset for the next question
          setIsCorrect(false); // Reset for the next question
        }, 1000); // Delay to show the red cross before moving to the next question
      }
    }

    setIsOptionSelected(false);
  };

  // Function to render the progress bar
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

  // Function to handle the "Continue" button
  // const handleContinue = () => {
  //   setCurrentQuestion(Math.ceil(questions.length / 2));
  // };

  const removeProgressBard = () => {
    setFlag(false);
    setShowResult(true);
  };

  // Function to handle the "Retry" button
  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAttempts(0);
    setSelectedOptions([]);
    setIsCorrect(false);
    setShowResult(false);
  };

  // Function to render the result screen
  const renderResult = () => {
    const percentage = (score / questions.length) * 100;
    return (
      <div>
        <p>
          Your score: {score}/{questions.length}
        </p>
        <p>Percentage: {percentage.toFixed(2)}%</p>
        <p>Great job! Keep practicing to improve your score.</p>
        <button onClick={() => handleRetry()}>Retry Quiz</button>
        <button onClick={() => onFinish()}>Take Another Quiz</button>
      </div>
    );
  };

  // Check if the user has reached half of the questions and if the halfway point has been acknowledged
  const isHalfwayThrough =
    currentQuestion === Math.ceil(questions.length / 2) && !halfwayAcknowledged;

  // Function to render the encouraging message and continue button
  const renderEncouragement = () => (
    <div className="encouragement-message text-center p-4">
      <h2 className="text-2xl font-semibold text-green-600">
        Great job so far!
      </h2>
      <p className="text-md text-gray-800">
        Take a deep breath and keep up the good work.
      </p>
      <button
        className="btn btn-continue mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded-md"
        onClick={() => setHalfwayAcknowledged(true)}
      >
        Continue Quiz
      </button>
    </div>
  );

  return (
    <main className="flex flex-col justify-center items-center mt-10 w-[700px] mx-auto">
      <div className="quiz-container max-container bg-yellow-300 rounded">
        {/* Progress bar */}
        {flag && renderProgressBar()}

        {/* Feedback based on attempts */}
        {attempts > 0 && (
          <div className="feedback-container mt-4">
            {attempts === 1 && (
              <p className="text-purple-600 text-center">
                One attempt remaining!
              </p>
            )}
            {attempts > 1 && (
              <p className="text-red-600 text-center">Incorrect!</p>
            )}
          </div>
        )}

        {/* Render encouragement message if halfway through and not acknowledged */}
        {isHalfwayThrough && renderEncouragement()}

        {/* Render the next question only if halfwayAcknowledged is true */}
        {!isHalfwayThrough &&
          !showResult &&
          currentQuestion < questions.length && (
            <div className="p-4">
              <div className="flex gap-2 justify-center">
                <small className="text-xl font-semibold text-gray-700 ">
                  {questions[currentQuestion].number}
                  {"."}
                </small>

                <h2 className="text-2xl font-normal text-gray-700">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              <div className="mt-10 grid grid-flow-col gap-1">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={option}
                    className={`text-left max-w-[200px] text-blue-900 border border-blue-400 text-[12px] bg-opacity-20 bg-gray-800 m-2 p-2 rounded-sm font-semibold flex justify-between items-center ${
                      selectedOptions.includes(option) ? "bg-green-500" : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <p className="grid grid-flow-col">
                      <p className="fixed border border-blue-400 text-gray-600 bg-yellow-300 px-1 w-[20px]">
                        {String.fromCharCode(65 + index)}
                      </p>
                      <p className="ml-6 text-gray-700">{option}</p>
                    </p>
                    {selectedOptions.includes(option) &&
                      questions[currentQuestion].correctAnswer === option && (
                        <span className="text-green-500 ml-2">✓</span>
                      )}
                  </button>
                ))}
              </div>
              <button
                className={`mt-8 ml-2 p-2 border border-slate-600 ${
                  isOptionSelected
                    ? "bg-gray-800 text-gray-100"
                    : "bg-gray-400 text-gray-500 cursor-not-allowed"
                } text-sm rounded-md font-bold`}
                onClick={handleAnswerSubmit}
                disabled={!isOptionSelected}
              >
                Submit Answer
              </button>
            </div>
          )}

        {/* show result screen at the end  */}
        {currentQuestion === questions.length && !showResult && (
          <button onClick={() => setShowResult(true)}>See Results</button>
        )}

        {showResult && renderResult()}
      </div>
    </main>
  );
};

export default QuizComponent;
