import Image from "next/image";
import Link from "next/link";

function TutorCard({ name, image, tutor_id, desc, location }) {
  return (
    <article className="py-3 mb-4 px-1 border border-slate-300 shadow-xl bg-gray-200 rounded-md mx-auto max-w-[250px]">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={image}
          height={100}
          width={100}
          alt="tutor"
          className="rounded-full object-contain h-34 w-30"
        />
      </div>

      <div>
        <h3 className="text-center mt-2 font-bold text-gray-800 text-lg">
          {name}
        </h3>
        <p className="text-center text-sm text-gray-900">{desc}</p>

        <p className="text-center mt-2 text-gray-700 text-sm font-bold">
          Based in {location}
        </p>
        <Link href={`/tutors/${tutor_id}`}>
          <div className="flex flex-col mt-3 items-center justify-center">
            <small className="text-red-600 font-bold hover:cursor-pointer hover:text-green-600">
              Find out more
            </small>
          </div>
        </Link>
      </div>
    </article>
  );
}

export default TutorCard;
