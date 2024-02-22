function Button({ name }) {
  return (
    <button className="bg-white w-38 px-2 py-1 shadow-lg text-gray-800 hover:text-green-600 text-sm border border-slate-400 text-center font-bold rounded-md">
      {name}
    </button>
  );
}

export default Button;
