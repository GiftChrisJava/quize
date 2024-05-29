"use client";
import SideNav from "./_component/SideNav";
import TopicCard from "./_component/TopicCard";
import Link from "next/link";
import { checkInternet, getSubjectById } from "@/app/server-actions/actions";
import store from "store2";
import { useEffect, useState } from "react";

function Subject({ params }) {
  const [subjectData, setSubjectData] = useState({});
  const subject_id = params.subject_id;

   // Use useEffect to call fetchSubject on mount
   useEffect(() => {
    fetchSubject();
  }, []);
  
   // fetch form 4 subjects class container
   const fetchSubject = async () => {
    if (await checkInternet()) {
      try {
        const data = await getSubjectById(subject_id); // Call your API function to get subject data
        setSubjectData(data); 
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

  const subject = store.get("subject");

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
