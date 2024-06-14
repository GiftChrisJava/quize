"use client";
import SideNav from "./_component/SideNav";
import TopicCard from "./_component/TopicCard";
import Link from "next/link";
import { checkInternet, getSubjectById } from "@/app/server-actions/actions";
import store from "store2";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";

function Subject({ params }) {
  console.log(params)
  const [subjectData, setSubjectData] = useState({ foundSubject: {}, topics: [] });
  const [loading, setLoading] = useState(true);
  const subject_id = params.subject_id;

  useEffect(() => {
    const fetchSubject = async () => {
      setLoading(true);
      try {
        if (await checkInternet()) {
          const data = await getSubjectById(subject_id);
          setSubjectData(data);
          store.set("subject", data);
        } else {
          const storedSubject = store.get("subject");
          if (storedSubject) {
            setSubjectData(storedSubject);
          }
        }
      } catch (error) {
        console.error("Error getting a subject:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [subject_id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#AD1C23"} loading={loading} size={50} />
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between pb-6 h-[80vh]">
      <section className="flex-3 max-container">
        <article data-aos="slide-up">
          <h4 className="font-semibold text-3xl text-gray-500 text-center pt-3">
            {subjectData.foundSubject?.name || "No Subject Name"}
          </h4>
          <div className="px-2">
            <small className="block text-[16px] text-gray-900 mt-8">
              {subjectData.foundSubject?.description || "No description available."}
            </small>
            <small className="block text-[16px] text-gray-900 mt-4">
              We&lsquo;re not just about memorizing what&lsquo;s in the books. Nope! We&lsquo;re all about exploring beyond the pages and unlocking the secrets of computer literacy that will make you a digital ninja.{" "}
              <Link href={`/subjects/${subject_id}/ninja`} className="text-[19px] text-purple-700">
                Have a look of what is outside the classroom
              </Link>
            </small>

            {subjectData.topics.length > 0 ? (
              <small className="block text-[16px] text-gray-900 mt-4">
                Click <span className="text-gray-800 font-bold">learn now</span> to begin Your learning
              </small>
            ) : (
              <small className="block text-[16px] text-gray-900 mt-4">
                <span className="text-gray-800 font-bold">TOPICS NOT YET AVAILABLE!!</span>
              </small>
            )}
          </div>
          <p></p>
        </article>
        <article className="px-2 mt-2">
          <div data-aos="zoom-in" className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
            {subjectData.topics.map((topic) => (
              <div key={topic._id}>
                <TopicCard
                  className="flex"
                  name={topic.name}
                  image={topic.topic_img_url}
                  topic_id={topic._id}
                  subject_id={subjectData.foundSubject?._id}
                  premium={topic.isPremium}
                />
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="xl:block hidden">
        <SideNav subject_id={subject_id} />
      </section>
    </div>
  );
}

export default Subject;
