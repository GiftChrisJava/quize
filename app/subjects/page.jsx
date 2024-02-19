/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import image1 from "../../public/img2.jpg";
import image3 from "../../public/img3.jpeg";
import SubjectCard from "./_components/SubjectCard";
import { data } from "../_data";

function Subjects() {
  return (
    <div className="max-container ">
      <article className="flex flex-row sm:gap-8 items-center justify-center">
        <section className="flex flex-2 sm:flex-1 flex-col p-4">
          <h2 className="font-extrabold flex-start sm:text-2xl md:text-4xl text-gray-900 ">
            <span className="text-green-600">MALAWI</span> EDUCATION ENHANCEMENT
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

      <article className="sm:4 p-1">
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
    </div>
  );
}

export default Subjects;
