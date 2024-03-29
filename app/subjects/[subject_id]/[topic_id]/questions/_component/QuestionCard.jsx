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
    <div className="mb-4 max-w-md mx-auto" onClick={onQuestionClick}>
      <article className="bg-slate-300 px-2 py-4">
        <p>{question.question}</p>
      </article>
      {editMode && (
        <div className="flex flex-row space-x-2 justify-center items-center mt-4">
          <div class="w-96">
            <div class="relative w-full min-w-[200px]">
              <textarea
                class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-300 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                value={userAnswer}
                onChange={(e) => onAnswerChange(e.target.value)}
              ></textarea>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Write your answer here
              </label>
            </div>
          </div>

          <button
            onClick={handleSaveClick}
            className="flex flex-row justify-center rounded-md items-center mt-1 w-12 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 text-gray-200 w-38"
          >
            Save & Close
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
