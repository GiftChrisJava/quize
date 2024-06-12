import Image from "next/image";
import Link from "next/link";
// tutor card inside tutors page
function Tutorz({ name, image, masteredSubject, tutor_id }) {
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="flex flex-col justify-center items-center "
      >
        <Link href={`/tutors/${tutor_id}`}>
          <Image
            src={image}
            alt="tutor"
            height={450}
            width={200}
            className="rounded-md cursor-pointer hover:opacity-55"
          />
        </Link>

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
