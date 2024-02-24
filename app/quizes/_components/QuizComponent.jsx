const QuizComponent = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Sample questions with true/false and multiple choice options, including multiple correct answers
  const questions = [
    // ... your 20 questions here, varying types and answers, including 'answers' as an array for multiple correct answers
  ];

  // Function to handle option selection for multiple correct answers
  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
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
            height: "20px",
          }}
        />
      </div>
    );
  };

  // Function to handle the "Continue" button
  const handleContinue = () => {
    setCurrentQuestion(Math.ceil(questions.length / 2));
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

  return (
    <div className="quiz-container">
      {/* Progress bar */}
      {renderProgressBar()}

      {/* Feedback based on attempts */}
      {attempts > 0 && (
        <div className="feedback-container mt-4">
          {attempts === 1 && (
            <p className="text-yellow-500">One attempt remaining!</p>
          )}
          {attempts > 1 && (
            <p className="text-red-500">Incorrect! Try again.</p>
          )}
        </div>
      )}

      {/* Show "Continue" button after half of the questions */}
      {currentQuestion + 1 === Math.ceil(questions.length / 2) && (
        <button
          className="btn btn-continue mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded-md"
          onClick={handleContinue}
        >
          Continue Quiz
        </button>
      )}

      {/* Render the question and answer options */}
      {!showResult && currentQuestion < questions.length && (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              style={{
                backgroundColor: selectedOptions.includes(option)
                  ? "lightgreen"
                  : "initial",
              }}
            >
              {option}
            </button>
          ))}
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
        </div>
      )}

      {/* Show result screen at the end */}
      {currentQuestion === questions.length && !showResult && (
        <button onClick={() => setShowResult(true)}>See Results</button>
      )}

      {showResult && renderResult()}
    </div>
  );
};

export default QuizComponent;
