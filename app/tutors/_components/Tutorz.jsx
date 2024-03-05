import Image from "next/image";
// tutor card inside tutors page
function Tutorz({ name, image, masteredSubject }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={image}
          alt="tutor"
          height={450}
          width={250}
          className="rounded-md"
        />

        <div className="-mt-14 border-slate-300 shadow-xl bg-white bg-opacity-90 p-1 w-[180px] rounded">
          <h4 className="text-center text-sm text-gray-800 font-bold">
            {name}
          </h4>
          <h5 className="text-center text-sm text-red-600">
            {masteredSubject}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Tutorz;
