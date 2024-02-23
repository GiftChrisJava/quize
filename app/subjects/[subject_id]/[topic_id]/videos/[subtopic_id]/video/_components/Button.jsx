function Button({ name }) {
  return (
    <button className="bg-white w-40 px-1 py-2 shadow-xl text-gray-800 hover:text-green-600 text-sm text-center font-bold rounded-xl">
      {name}
    </button>
  );
}

export default Button;
