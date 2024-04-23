import Image from "next/image";
import { tutors } from "../constants/tutors";

function Tutor({ params }) {
  const tutor_id = parseInt(params.tutor_id);
  // Function to retrieve a tutors based on the given tutor id
  const getTutorById = (tutur_id) => {
    return tutors.find((tutor) => tutor.id === tutur_id);
  };

  const tutor = getTutorById(tutor_id);

  return (
    <main className="bg-white px-2 pb-[400px] flex-grow h-[100%] ">
      <div className="max-container ">
        <section className="flex flex-row">
          <Image
            className="rounded-md"
            alt="tutor"
            height={300}
            width={400}
            src={tutor.image}
          />

          <section className="flex flex-col gap-4">
            <article className="p-2 bg-gray-300 shadow-xl w-[200px] mt-4">
              <h2 className="text-xl font-bold ">{tutor.name}</h2>
            </article>

            <article className="p-2 bg-neutral-400 shadow-xl">
              <h2 className="text-lg text-gray-50">{tutor.experience}</h2>
            </article>

            <article className="p-2 bg-gray-700 shadow-md w-[300px]">
              <h2 className="text-lg text-gray-50">
                <span className="text-purple-500">
                  {tutor.masteredSubject}{" "}
                </span>{" "}
                is the subject i mastered
              </h2>
            </article>

            <article className="p-2 bg-gray-300 shadow-xl w-[200px] mt-4">
              <h2 className="text-xl font-bold ">
                <span className="text-purple-500 text-sm">
                  Other subjects i teach
                </span>
                {tutor.otherSubjects.map((subject) => (
                  <div key={subject.id}>
                    <h4>{subject.name}</h4>
                  </div>
                ))}
              </h2>
            </article>

            <article className="p-2  w-[300px]">
              <h2 className="text-xl font-bold ">
                {tutor.contacts.map((contact) => (
                  <div key={contact.id}>
                    <h4 className="text-gray-700">{contact.number}</h4>
                  </div>
                ))}
              </h2>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Tutor;
