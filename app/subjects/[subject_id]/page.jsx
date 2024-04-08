"use client";
import { allSubjects } from "@/app/allSubjects";
import SideNav from "./_component/SideNav";
import TopicCard from "./_component/TopicCard";
import { topics } from "./_component/constants/topics";
import Link from "next/link";

function Subject({ params }) {
  const subject_id = params.subject_id;

  // Function to retrieve object by id
  function getObjectById(id) {
    return allSubjects.find((subject) => subject.id === id);
  }

  const subject = getObjectById(subject_id);
  const form = subject.klass;

  return (
    <div className="flex flex-row justify-between pb-6">
      <section className="flex-3 max-container">
        <article data-aos="slide-up">
          <h4 className="font-semibold text-3xl text-gray-500 text-center pt-3">
            {subject.name}
          </h4>
          <div className="px-2">
            <small className="block text-[16px] text-gray-900 mt-8">
              Hey!, Welcome to the awesome world of computer studies! 🚀 Get
              ready to dive into a subject that&lsquo;s not just about boring
              textbooks but is packed with exciting knowledge that will
              turbocharge your computer skills. Below are the topics in computer
              studies for form <span className="font-bold">{form}</span>.
              Probably available in the books too. Here you will find videos of
              those topics which seem to be difficult. Under each topic below
              you can choose to watch videos to boost your understanding , take
              a quiz to test your understanding and see how Maneb questions look
              like. Just have a test!
            </small>

            <small className="block text-[16px] text-gray-900 mt-4">
              In this class, we&lsquo;re not just about memorizing what&lsquo;s
              in the books. Nope! We&lsquo;re all about exploring beyond the
              pages and unlocking the secrets of computer literacy that will
              make you a digital ninja.{" "}
              <Link href="#ninja" className="text-[16px] text-purple-700">
                Begin your journey
              </Link>
            </small>

            <small className="block text-[16px] text-gray-900 mt-4">
              Check out the cool stuff we have lined up for you: videos galore!
              🎥 If a topic seems as mysterious as decoding alien signals, fear
              not! We&lsquo;ve got videos to break it down for you in simple,
              easy-to-understand terms. Plus, quizzes to put your newfound
              knowledge to the test and get a sneak peek at what the big bad
              Maneb exams might throw your way. So, what are you waiting for?
              Let&lsquo;s rock this computer studies journey together!✌️
            </small>
          </div>
          <p></p>
        </article>

        <article className="px-2 mt-8">
          <div
            data-aos="zoom-in"
            className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1"
          >
            {topics.map((topic) => (
              <div key={topic.id}>
                <TopicCard
                  className="flex"
                  name={topic.name}
                  image={topic.image}
                  topic_id={topic.id}
                  subject_id={subject.id}
                  premium={topic.premium}
                />
              </div>
            ))}
          </div>

          <div id="ninja">
            <Link href={`/subjects/${subject_id}/ninja`}>
              <h2 className="font-semibold cursor-pointer mb-8 mt-8 flex flex-row justify-center items-center mx-auto p-2 w-[200px] hover:text-gray-50 rounded bg-gray-700 text-gray-300">
                Became a digital Ninja
              </h2>
            </Link>
          </div>
        </article>
      </section>

      {/* side bar  */}
      <section className="xl:block hidden">
        <SideNav subject_id={subject_id} />
      </section>
    </div>
  );
}

export default Subject;
