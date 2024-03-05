import Image from "next/image";

import tutoring1 from "../../public/tutoring 1.jpg";
import { Badge, BadgeCheck, Building2, Medal } from "lucide-react";
import { tutors } from "./constants/tutors";
import Tutorz from "./_components/Tutorz";

function Tutors() {
  return (
    <main className="bg-white">
      <hr />
      <section className="max-container mt-6 p-2">
        <container className="flex flex-row gap-4 mb-10">
          <article className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              Find the experts to bring out the genius in you
            </h2>

            <small className="mb-2 text-lg  text-gray-600">
              Find tutors that will not only help you understand the material
              but also, teach you how to learn and apply the gained knowledge to
              solve problems creatively.
            </small>

            <button className="p-2 w-[200px] hover:text-gray-50 rounded mt-3 border border-slate-600 bg-gray-700 text-gray-300">
              Get Started
            </button>
          </article>

          <article className="flex-1">
            <Image
              className="rounded"
              src={tutoring1}
              alt=""
              height={600}
              width={700}
            />
          </article>
        </container>

        <container className="mt-8">
          <h2 className="text-center font-bold text-lg text-gray-800 mb-5">
            What You Will Find
          </h2>

          <article className="flex gap-3 flex-row justify-center items-center mb-5">
            <div className=" border-slate-300 shadow-xl bg-gray-200 p-3 w-[250px] rounded">
              <div className="flex gap-2 items-center mb-2">
                <BadgeCheck className="text-green-600" />
                <h4 className="font-bold text-gray-800">
                  Professional Teachers
                </h4>
              </div>
              <small className="text-gray-700">
                We have professional teachers who have a good understanding of
                the needs of a student
              </small>
            </div>

            <div className=" border-slate-300 shadow-xl bg-gray-200 p-3 w-[250px] rounded">
              <div className="flex gap-2 items-center mb-2">
                <Medal className="text-green-600" />
                <h4 className="font-bold text-gray-800">Certified Mentor</h4>
              </div>
              <small className="text-gray-700">
                Here you will find a certified mentor who will guide you towards
                the path of success
              </small>
            </div>

            <div className=" border-slate-300 shadow-xl bg-gray-200 p-3 w-[250px] rounded">
              <div className="flex gap-2 items-center mb-2">
                <Building2 className="text-green-600" />
                <h4 className="font-bold text-gray-800">Tutorship Companies</h4>
              </div>
              <small className="text-gray-700">
                Find companies with well qualified and experienced tutors and
                mentors to help in succeed in your academics
              </small>
            </div>
          </article>
        </container>

        <container className="">
          <h2 className="text-center mt-[80px] font-bold text-gray-900 text-2xl ">
            The Experts In Their Own Field
          </h2>

          <div className="mb-10 min-container sm:px-9 md:px-1 mt-10 grid md:grid-cols-3 gap-1 sm:grid-cols-2 sm:gap-4 grid-cols-1">
            {tutors.map((tutor) => (
              <div key={tutor.id}>
                <Tutorz
                  name={tutor.name}
                  image={tutor.image}
                  masteredSubject={tutor.masteredSubject}
                />
              </div>
            ))}
          </div>
        </container>
      </section>
    </main>
  );
}

export default Tutors;
