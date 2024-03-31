function FilterButton({ label, value, selectedFilter, setSelectedFilter }) {
  const isActive = selectedFilter === value;

  const handleClick = () => {
    setSelectedFilter(value);
  };

  return (
    <button
      onClick={handleClick}
      className={`filter-button ${isActive ? "active" : ""}`}
    >
      {label}
    </button>
  );
}

export default FilterButton;
