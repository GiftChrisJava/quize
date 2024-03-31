function FilterButton({ label, value, selectedFilter, setSelectedFilter }) {
  const isActive = selectedFilter === value;

  const handleClick = () => {
    setSelectedFilter(value);
  };

  return (
    <button
      onClick={handleClick}
      className={`font-bold flex flex-row justify-center items-center mx-auto p-2 w-[90px] sm:w-[150px] hover:text-gray-50 rounded mt-2 border border-slate-600 bg-gray-700  ${
        isActive ? "text-red-500" : "text-gray-300"
      }`}
    >
      {label}
    </button>
  );
}

export default FilterButton;
