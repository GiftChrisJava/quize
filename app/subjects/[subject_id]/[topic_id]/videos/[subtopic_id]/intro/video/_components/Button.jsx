function Button({ name }) {
  return (
    <button className="mt-1 px-3 py-2 font-semibold text-sm bg-slate-600 hover:text-green-600 rounded-md text-gray-200 w-38">
      {name}
    </button>
  );
}

export default Button;
