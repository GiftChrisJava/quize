"use client";
import SideNav from "./_component/SideNav";
import TopicCard from "./_component/TopicCard";
import { topics } from "./_component/constants/topics";

function Subject({ params }) {
  const subject_id = params.subject_id;
  return (
    <div className="flex flex-row justify-between pb-6">
      <section className="flex-3 max-container">
        <article>
          <h4 className="font-semibold text-3xl text-gray-500 text-center pt-3">
            COMPUTER STUDIES
          </h4>
          <small className="block font-bold text-gray-900 text-center">
            Select on a topic to watch videos, take a quiez and see exam
            questions
          </small>
        </article>

        <article className="px-2">
          <div className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
            {topics.map((topic) => (
              <div key={topic.id}>
                <TopicCard
                  className="flex"
                  name={topic.name}
                  image={topic.image}
                  topic_id={topic.id}
                  subject_id={params.subject_id}
                />
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* side bar  */}
      <section className="md:block hidden">
        <SideNav subject_id={subject_id} />
      </section>
    </div>
  );
}

export default Subject;
