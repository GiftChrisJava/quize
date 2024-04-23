import Image from "next/image";
import { tutors } from "../constants/tutors";
import { TfiEmail } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

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
        <section className="flex md:flex-row flex-col justify-center items-center">
          <Image
            className="rounded-md"
            alt="tutor"
            height={300}
            width={400}
            src={tutor.image}
          />

          <section className="flex flex-col gap-4 bg-white max-h-[500px] mt-4 md:max-w-[300px] md:rounded-tr-lg md:rounded-br-lg rounded-md max-w-[400px]">
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

            <article className="p-2 -mt-6 mb-2">
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

            <article className="-mt-6">
              <div>
                <hr />
                <h4 className="font-bold px-2 ">Get in touch</h4>

                <div className="flex flex-row gap-2 mt-2 px-2 ">
                <TfiEmail className="w-8 h-8 text-red-600"/>
                <ImFacebook2 className="w-8 h-8 text-blue-600"/>
                <IoLogoWhatsapp className="w-8 h-8 text-green-600"/>
                <FaLinkedin className="w-8 h-8 text-blue-600"/>
                </div>
              </div>
              <h2 className="text-xl font-bold mt-4 px-2 ">
                {tutor.contacts.map((contact) => (
                  <div key={contact.id}>
                    <h4 className="text-gray-700 text-sm font-normal">{contact.number}</h4>
                  </div>
                ))}
              </h2>
            </article>
            
          </section>

        </section>

        <form className="max-w-2xl mx-auto mt-20">
            <div className="px-3 mb-2 mt-2">
              <textarea
                placeholder="Add comment about this tutor.."
                className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              ></textarea>
            </div>
            <div className="flex justify-end px-4">
              <input
                type="submit"
                className="px-2.5 py-1.5 rounded-md text-white text-sm bg-gray-700"
                value="Comment"
              />
            </div>
        </form>
       
      </div>
    </main>
  );
}

export default Tutor;
