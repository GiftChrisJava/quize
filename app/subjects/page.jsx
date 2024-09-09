"use client";

import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import store from "store2";
import { useUser } from "@clerk/clerk-react";

/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import boy from "../../public/boy.jpg";

import SubjectCard from "./_components/SubjectCard";
import FormFourSubjectCard from "./_components/FormFourSubjectCard";

import SubjectBottomNav from "./_components/SubjectBottomNav";
import {
  getForm3class,
  getForm4class,
  postStudentData,
} from "../server-actions/actions";

function Subjects() {
  const [form4Subjects, setForm4Subjects] = useState([]);
  const [form3Subjects, setForm3Subjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isSignedIn, user, isLoaded } = useUser();

  // store student data
  if (isSignedIn) {
    store.set("username", user.username);
    store.set("stripeId", user.id);
    store.set("firstName", user.firstName);
    store.set("lastName", user.lastName);
  }

  useEffect(() => {
    const fetchSubjects = async () => {
      if (isSignedIn) {
        console.log("is inside ", isSignedIn);

        try {
          const form4Data = await getForm4class();
          const form3Data = await getForm3class();

          const student = await postStudentData(
            user.username,
            user.id,
            user.firstName,
            user.lastName
          );

          // store student id
          // store.set("user_id", student.id);

          store.set("form4subjects", form4Data.subjects);
          store.set("form3subjects", form3Data.subjects);

          setForm4Subjects(form4Data.subjects);
          setForm3Subjects(form3Data.subjects);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSubjects();
  }, []);

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

  console.log("student id is : ", store.get("user_id"));
  return (
    <main className="">
      <section className="">
        <SubjectBottomNav />
      </section>

      <hr />
      <section className="bg-white h-screen">
        <article className="max-container flex flex-row sm:gap-8 items-center justify-center mb-16">
          <section className="flex flex-2 sm:flex-1 flex-col p-4 ">
            <h2 className="font-extrabold sm:text-2xl md:text-4xl text-gray-900">
              <span className="text-green-600">MALAWI</span> EDUCATION
              ENHANCEMENT
              <span className="text-red-600"> PLATFORM</span>
            </h2>
            <h4 className="text-md text-gray-500 mt-4 mb-4 md:items-center md:justify-center">
              Access quality online learning anytime, anywhere
            </h4>
            <h4 className="text-md text-gray-600 mt-4">
              Empowering students with resources to master challenging MSCE
              topics and connect with experienced tutors for personalized
              support.
            </h4>
            <h4 className="text-md text-gray-800 mt-4 md:items-center md:justify-center">
              Start your educational journey today by selecting your class and
              exploring the available subjects to enhance your understanding.
            </h4>

            <a
              href="#subject_cards"
              className="text-blue-600 hover:text-blue-800 underline mt-4"
            >
              Explore Subjects Now!
            </a>
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
          {/* additional content can go here */}
        </article>
      </section>

      {/* form 4 subjects */}
      <section id="subject_cards" className="max-container">
        <article className="sm:4 p-1 mt-4">
          <h4 className="text-center md:text-left font-bold text-lg mt-4 text-red-600">
            Form 4 Subjects
          </h4>

          {form4Subjects.length > 0 ? (
            <div
              data-aos="slide-right"
              className="grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1"
            >
              {form4Subjects.map((subject, index) => (
                <div key={index}>
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
              {form3Subjects.map((subject, index) => (
                <div key={index}>
                  <SubjectCard
                    className="flex"
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
      </section>

      {/* Tutors */}
      <section className="bg-white mt-10 pb-2">
        <SubjectBottomNav />
      </section>
    </main>
  );
}

export default Subjects;
