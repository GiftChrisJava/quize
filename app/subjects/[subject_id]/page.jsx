"use client";
import { allSubjects } from "@/app/allSubjects";
import SideNav from "./_component/SideNav";
import TopicCard from "./_component/TopicCard";
import { topics } from "./_component/constants/topics";
import Link from "next/link";
import { checkInternet, getSubjectById } from "@/app/server-actions/actions";
import store from "store2";
import { useEffect, useState } from "react";

function Subject({ params }) {
  const [subjectData, setSubjectData] = useState({});
  const subject_id = params.subject_id;


   // fetch form 4 subjects class container
   const fetchSubject = async () => {
    if (await checkInternet()) {
      try {
        const data = await getSubjectById(subject_id); // Call your API function to get subject data
        setSubjectData(data); // Update the state with the subjects data
        // Store the fetched data locally
        store.set("subject", data);
      } catch (error) {
        console.error('Error getting a subject:', error);
      }

      console.log(store.get("subject"))
    } else {
      // Retrieve the subject data from store2
      const storedSubject = store.get("subject");
      if (storedSubject) {
        setSubjectData(storedSubject);
      }
    }
  };

   // Use useEffect to call fetchSubject on mount
   useEffect(() => {
    fetchSubject();
  }, []);
  

  // console.log(subjectData.foundSubject.name);

  // Function to retrieve object by id
  function getObjectById(id) {
    return allSubjects.find((subject) => subject.id === id);
  }

  const subject = subjectData;
  // const form = subject.klass;
  const form = "form 4";


  return (
    <div className="flex flex-row justify-between pb-6">
      <section className="flex-3 max-container">
        <article data-aos="slide-up">
          <h4 className="font-semibold text-3xl text-gray-500 text-center pt-3">
            {subject.foundSubject.name}
          </h4>
          <div className="px-2">
            <small className="block text-[16px] text-gray-900 mt-8">
            {subject.foundSubject.description}
            </small>

            <small className="block text-[16px] text-gray-900 mt-4">
              We&lsquo;re not just about memorizing what&lsquo;s
              in the books. Nope! We&lsquo;re all about exploring beyond the
              pages and unlocking the secrets of computer literacy that will
              make you a digital ninja.{" "}
              <Link href={`/subjects/${subject_id}/ninja`}className="text-[16px] text-purple-700">
                Became a digital Ninja
              </Link>
            </small>
          
            <small className="block text-[16px] text-gray-900 mt-4">Click  <span className="text-gray-800 font-bold">learn now </span> to begin Your learning</small>

          </div>
          <p></p>
        </article>

        <article className="px-2 mt-2">
          <div
            data-aos="zoom-in"
            className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1"
          >
            {subject.topics.map((topic) => (
              <div key={topic.id}>
                <TopicCard
                  className="flex"
                  name={topic.name}
                  image={topic.topic_img_url}
                  topic_id={topic._id}
                  subject_id={subject.foundSubject._id}
                  premium={topic.premium}
                />
              </div>
            ))}
          </div>


          <div className="mt-14">
        

            {/* <small className="block text-[16px] text-gray-900 mt-4">
              Check out the cool stuff we have lined up for you: videos galore!
              🎥 If a topic seems as mysterious as decoding alien signals, fear
              not! We&lsquo;ve got videos to break it down for you in simple,
              easy-to-understand terms. Plus, quizzes to put your newfound
              knowledge to the test and get a sneak peek at what the big bad
              Maneb exams might throw your way. So, what are you waiting for?
              Let&lsquo;s rock this computer studies journey together!✌️
            </small> */}
          </div>

          {/* <div id="ninja" className="pt-12">
            <Link href={`/subjects/${subject_id}/ninja`}>
              <h2 className="font-semibold cursor-pointer mb-8 mt-8 flex flex-row justify-center items-center mx-auto p-2 w-[200px] hover:text-gray-50 rounded bg-gray-700 text-gray-300">
                Became a digital Ninja
              </h2>
            </Link>
          </div> */}



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
