"use client"
import Image from "next/image";
import store from "store2"

import tutoring1 from "../../public/tutoring 1.jpg";
import { BadgeCheck, Building2, Medal } from "lucide-react";
// import { tutors } from "./constants/tutors";
import Tutorz from "./_components/Tutorz";
import Link from "next/link";
import { checkInternet, getAllTutors } from "../server-actions/actions";
import { useEffect, useState } from "react";

function Tutors() {

  let [tutors, setTutors] = useState([{}])


 // get all tutors
 const getTutors = async () => {
  if (await checkInternet()) {
    try {
        const data = await getAllTutors();
        setTutors(data); // Update the state with the subjects data

        // Store the fetched data locally
        store.set("tutors", data);
     
    } catch (error) {
      console.error('Error getting form 3 subjects:', error);
    }
  } else {
    // Retrieve the progress data from store2
    const storedTutors = store.get("tutors");
    if (storedTutors) {
      setTutors(storedTutors);
    }
  }
};

tutors = store.get("tutors");

// Use useEffect to call fetchForm4Subjects and getTutors on mount
useEffect(() => {
  getTutors();
}, []);
  return (
    <main className="bg-white">
      <hr />
      <section className="max-container mt-6 p-2">
        <container className="flex flex-row gap-4 mb-10">
          <article className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              Find the experts to bring out the genius in you
            </h2>

            <small className="mb-2 text-lg  text-gray-600">
              Find tutors that will not only help you understand the material
              but also, teach you how to learn and apply the gained knowledge to
              solve problems creatively.
            </small>

            <button className="font-bold p-2 w-[200px] hover:text-gray-50 rounded mt-3 border border-slate-600 bg-gray-700 text-gray-300 mx-auto max-w-sm md:left md:mx-0">
              <Link href="/tutors/more">Find Tutors</Link>
            </button>
          </article>

          <article className="flex-1 hidden md:block">
            <Image
              className="rounded"
              src={tutoring1}
              alt=""
              height={600}
              width={700}
            />
          </article>
        </container>

        <container className="mt-8">
          <h2 className="text-center font-bold text-lg text-gray-800 mb-5">
            What You Will Find
          </h2>

          <article
            data-aos="zoom-in"
            className="flex gap-3 sm:flex-row flex-col mb-3 justify-center items-center sm:mb-5 "
          >
            <div className=" border-slate-300 shadow-xl bg-gray-200 p-3 w-[250px] rounded">
              <div className="flex gap-2 items-center mb-2">
                <BadgeCheck className="text-green-600" />
                <h4 className="font-bold text-gray-800">
                  Professional Teachers
                </h4>
              </div>
              <small className="text-gray-700">
                We have professional teachers who have a good understanding of
                the needs of a student
              </small>
            </div>

            <div className=" border-slate-300 shadow-xl bg-gray-200 p-3 w-[250px] rounded">
              <div className="flex gap-2 items-center mb-2">
                <Medal className="text-green-600" />
                <h4 className="font-bold text-gray-800">Certified Mentor</h4>
              </div>
              <small className="text-gray-700">
                Here you will find a certified mentor who will guide you towards
                the path of success
              </small>
            </div>

            <div className=" border-slate-300 shadow-xl bg-gray-200 p-3 w-[250px] rounded">
              <div className="flex gap-2 items-center mb-2">
                <Building2 className="text-green-600" />
                <h4 className="font-bold text-gray-800">Tutorship Companies</h4>
              </div>
              <small className="text-gray-700">
                Find companies with well qualified and experienced tutors and
                mentors to help in succeed in your academics
              </small>
            </div>
          </article>
        </container>

        <container>
          <h2 className="text-center mt-[80px] font-bold text-gray-900 text-2xl ">
            The Experts In Their Own Field
          </h2>

          <div className="mb-10 sm:px-9 md:px-1 mt-10 grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
            {tutors.map((tutor) => (
              <div key={tutor._id}>
                <Tutorz
                  name={tutor.name}
                  image={tutor.image_url}
                  masteredSubject={tutor.masteredSubject}
                  tutor_id={tutor._id}
                />
              </div>
            ))}
          </div>

          <button className="font-bold mb-12 flex flex-row justify-center items-center mx-auto p-2 w-[200px] hover:text-gray-50 rounded mt-2 border border-slate-600 bg-gray-700 text-gray-300">
            <Link href="/tutors/more"> See More </Link>
          </button>
        </container>

        <container className="pb-8"></container>
      </section>
    </main>
  );
}

export default Tutors;
