import { XIcon } from "lucide-react";
import Image from "next/image";

function FormModel({ topic_id, isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <main>
      <div
        id="wrapper"
        onClick={handleClose}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full"
      >
        <div className="w-[420px] flex flex-col rounded">
          <XIcon
            className="bg-transparent text-white text-xl place-self-end "
            onClick={() => onClose()}
          />

          <form
            action=""
            className="bg-gray-200 rounded-sm p-3 flex flex-col justify-center items-center"
          >
            <div>
              <p className="font-bold text-2xl text-green-600">
                M<span className="text-red-600">Ee</span>
                <span className="text-gray-800">p</span>
              </p>
            </div>
            <div className="mt-3">
              <input
                className="outline-none rounded-md w-[400px] text-sm p-2 border text-slate-800"
                type="text"
                placeholder="Write your full name"
              />
            </div>

            <div className="mt-6">
              <input
                className="outline-none rounded-md w-[400px] text-sm border p-2 text-slate-800"
                type="text"
                placeholder="Write your feedback on the video here .."
              />
            </div>

            <button
              onClick={() => onClose()}
              className="mt-5 px-3 py-2 font-bold bg-slate-700 rounded-md text-gray-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default FormModel;
