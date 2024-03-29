function QuestionCard({
  question,
  userAnswer,
  editMode,
  onQuestionClick,
  onAnswerChange,
  onSave,
}) {
  // Prevent the event from bubbling up to the parent div
  const handleSaveClick = (e) => {
    e.stopPropagation();
    onSave();
  };

  return (
    <div className="mb-2 max-w-md mx-auto" onClick={onQuestionClick}>
      <article className="bg-slate-300 px-2 py-4">
        <p>{question.question}</p>
      </article>
      {editMode && (
        <div className="answer-input">
          <textarea
            value={userAnswer}
            onChange={(e) => onAnswerChange(e.target.value)}
          />
          <button onClick={handleSaveClick} className="">
            Save & Close
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
