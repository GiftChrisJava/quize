import Image from "next/image";
import image1 from "../../public/img2.jpg";

function Subjects() {
  return (
    <div className="max-container ">
      <article className="p-3 flex flex-row sm:gap-8 items-center justify-center">
        <section className="flex flex-2 sm:flex-1 flex-col p-4">
          <h2 className="font-extrabold flex-start sm:text-2xl md:text-4xl text-gray-900 ">
            MALAWI EDUCATION ENHANCEMENT PLATFORM
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
        <section className="flex-1">
          <Image
            src={image1}
            width={280}
            height={235}
            alt="student"
            className="rounded-lg cover hidden sm:flex"
          />
        </section>
      </article>
    </div>
  );
}

export default Subjects;
