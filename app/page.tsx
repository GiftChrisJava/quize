import Button from "@/components/Button";
import DropDownOptions from "@/components/DropDownOptions";

async function Home() {
  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome to MANEB QUIZE..
      </h1>

      <section className="p-10 my-10 rounded-lg shadow-xl w-[65%]">
        <div>
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
          >
            Number of Questions
          </label>
          <input
            type="number"
            defaultValue={10}
            min={0}
            max={50}
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-2"
          />
        </div>

        <div className="flex flex-col items-center justify-center ">
          <DropDownOptions />
          <Button />
        </div>
      </section>
    </section>
  );
}

export default Home;
