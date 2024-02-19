/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import image1 from "../../public/img2.jpg";
import cool from "../../public/cool.jpg";
import SubjectCard from "./_components/SubjectCard";
import { data, tutors } from "../_data";
import FormFourSubjectCard from "./_components/FormFourSubjectCard";
import TutorCard from "./_components/TutorCard";

function Subjects() {
  return (
    <container className=" ">
      <section className="bg-white">
        <article className="max-container pb-10 flex flex-row sm:gap-8 items-center justify-center">
          <section className="flex flex-2 sm:flex-1 flex-col p-4">
            <h2 className="font-extrabold flex-start sm:text-2xl md:text-4xl text-gray-900 ">
              <span className="text-green-600">MALAWI</span> EDUCATION
              ENHANCEMENT
              <span className="text-red-600"> PLATFORM</span>
            </h2>
            <h4 className=" font-bold text-sm text-gray-600 mt-4">
              A solution to help you understand the most challenging and complex
              topics in MSCE level classes and find tutors for further help
            </h4>

            <h2 className=" font-bold text-gray-800 py-4 mt-5 sm:text-md text-sm">
              Select a subject below begin your learning based on your current
              class
            </h2>
          </section>
          <section className="flex-1 ml-10">
            <Image
              src={image1}
              width={280}
              height={235}
              alt="student"
              className="rounded-lg hidden object-contain sm:flex"
            />
          </section>
        </article>
      </section>

      {/* form 4 subjects  */}
      <section className="max-container">
        <article className="sm:4 p-1 mt-4">
          <h4 className="text-center md:text-left font-bold text-lg mt-4 text-red-600">
            Form 4 Subjects
          </h4>

          <div className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
            {data.map((subject) => (
              <div key={subject.id}>
                <FormFourSubjectCard
                  className="flex "
                  name={subject.name}
                  image={subject.image}
                  id={subject.id}
                />
              </div>
            ))}
          </div>
        </article>

        <hr className="mt-12" />

        <article className="sm:4 p-1 mt-6">
          <h4 className="text-center md:text-left font-bold text-lg mt-4 text-green-700">
            Form 3 Subjects
          </h4>
          {/* form 3 subjects  */}

          <div className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
            {data.map((subject) => (
              <div key={subject.id}>
                <SubjectCard
                  className="flex"
                  name={subject.name}
                  image={subject.image}
                  id={subject.id}
                />
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Tutors  */}
      <section className="bg-green-600 mt-10 pb-5">
        <article className="max-container">
          <h4 className="font-bold text-3xl text-white text-center pt-3">
            Find a Tutor
          </h4>
          <small className="block font-bold text-gray-900 text-center">
            Here is a list of tutors to you can hire for further help
          </small>
        </article>

        <article className="min-container mt-10 grid md:grid-cols-3 gap-1 sm:grid-cols-2 sm:gap-4 grid-cols-1">
          {tutors.map((tutor) => (
            <div key={tutor.id}>
              <TutorCard
                className="flex"
                name={tutor.name}
                image={tutor.image}
                id={tutor.id}
                desc={tutor.desc}
                location={tutor.location}
              />
            </div>
          ))}
        </article>
      </section>
    </container>
  );
}

export default Subjects;
