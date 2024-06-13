"use client";

import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import store from "store2";

/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import boy from "../../public/boy.jpg";
import books from "../../public/books.jpg";

import SubjectCard from "./_components/SubjectCard";
import FormFourSubjectCard from "./_components/FormFourSubjectCard";

import SubjectBottomNav from "./_components/SubjectBottomNav";
import { getForm3class, getForm4class } from "../server-actions/actions";

function Subjects() {
  const [form4Subjects, setForm4Subjects] = useState([]);
  const [form3Subjects, setForm3Subjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const form4Data = await getForm4class();
        const form3Data = await getForm3class();

        store.set("form4subjects", form4Data.subjects);
        store.set("form3subjects", form3Data.subjects);

        setForm4Subjects(form4Data.subjects);
        setForm3Subjects(form3Data.subjects);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [form4subjectId, form3SubjectId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <main className="">
      <section className="">
        <SubjectBottomNav />
      </section>

      <hr />
      <section className="bg-white">
        <article className="max-container flex flex-row sm:gap-8 items-center justify-center mb-16">
          <section className="flex flex-2 sm:flex-1 flex-col p-4 ">
            <h2 className="font-extrabold flex-start sm:text-2xl md:text-4xl text-gray-900 ">
              <span className="text-green-600">MALAWI</span> EDUCATION
              ENHANCEMENT
              <span className="text-red-600"> PLATFORM</span>
            </h2>
            <h4 className="text-md text-gray-600 mt-4">
              A solution to help you understand the most challenging and complex
              topics in MSCE level classes and find tutors for further help
            </h4>

            <h2 className="text-gray-600 py-4 mt-5 sm:text-md text-md">
              Select a subject below begin your learning based on your current
              class
            </h2>
          </section>
          <section className="flex-1 ml-10">
            <Image
              src={boy}
              width={"auto"}
              height={"auto"}
              alt="student"
              className="hidden object-contain sm:flex mt-2 rounded"
            />
          </section>
        </article>

        <article className="md:min-container max-container pb-10 flex flex-row sm:gap-8 items-center justify-center">
          <section className="flex-1 md:ml-2">
            <Image
              src={books}
              width={380}
              height={215}
              alt="student"
              className="hidden object-contain sm:flex -ml-8 shadow-lg rounded"
            />
          </section>
          <section className="flex flex-2 sm:flex-1 flex-col p-4">
            <h4 className="text-md text-gray-500 mt-0 text-left md:items-center md:justify-center">
              Online learning you can access anywhere easily
            </h4>

            <h4 className="text-md text-gray-800 mt-2 md:items-center md:justify-center">
              Begin your journey of learning by just clicking on the subject
              below depending on your secondary school level
            </h4>
          </section>
        </article>
      </section>

      {/* form 4 subjects */}
      <section className="max-container">
        <article className="sm:4 p-1 mt-4">
          <h4 className="text-center md:text-left font-bold text-lg mt-4 text-red-600">
            Form 4 Subjects
          </h4>

          {form4Subjects.length > 0 ? (
            <div
              data-aos="slide-right"
              className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1"
            >
              {form4Subjects.map((subject) => (
                <div key={subject.id}>
                  <FormFourSubjectCard
                    className="flex "
                    name={subject.name}
                    image={subject.image_url}
                    subject_id={subject._id}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-center text-gray-700 text-xl p-10">
                Coming Soon...
              </h3>
            </div>
          )}
        </article>

        <hr className="mt-12" />

        <article className="sm:4 p-1 mt-6">
          <h4 className="text-center md:text-left font-bold text-lg mt-4 text-green-700">
            Form 3 Subjects
          </h4>
          {/* form 3 subjects */}

          {form3Subjects.length > 0 ? (
            <div
              data-aos="slide-right"
              className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1"
            >
              {form3Subjects.map((subject) => (
                <div key={subject.id}>
                  <SubjectCard
                    className="flex"
                    name={subject.name}
                    image={subject.image}
                    subject_id={subject.id}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-center text-gray-700 text-xl p-10">
                Coming Soon...
              </h3>
            </div>
          )}
        </article>
      </section>

      {/* Tutors */}
      <section className="bg-white mt-10 pb-2">
        <SubjectBottomNav />
      </section>
    </main>
  );
}

export default Subjects;
