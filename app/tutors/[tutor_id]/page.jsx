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
    <main className="px-2 pb-[400px] pt-12 flex-grow h-[100%] ">
      <div className="max-container ">
        <section className="flex flex-row">
          <Image
            className="rounded-md"
            alt="tutor"
            height={300}
            width={400}
            src={tutor.image}
          />

          <section className="flex flex-col gap-4 bg-white h-[500px] mt-4 max-w-[300px]">
            <article className="px-2 w-[200px]">
              <h2 className="text-xl font-bold text-gray-700">{tutor.name}</h2>
            </article>

            <article className="px-2">
              <h2 className="text-md text-gray-800">{tutor.experience}</h2>
            </article>
            
            <hr />
            <article className="p-2 max-w-[300px] -mt-4">
              <h2 className="text-lg text-gray-600">
                <span className="text-gray-900">
                  {tutor.masteredSubject}{" "}
                </span >{" "}
                is the subject i mastered
              </h2>
            </article>

            <hr className="-mt-4"/>

            <article className="p-2 -mt-6">
              <h2 className="text-xl font-bold ">
                <span className="text-green-600 text-sm">
                  Other subjects i teach
                </span>
                {tutor.otherSubjects.map((subject) => (
                  <div key={subject.id}>
                    <h4 className="text-sm font-normal">{subject.name}</h4>
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
