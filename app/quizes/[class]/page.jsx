"use client"
import { MoveRight } from "lucide-react";
import React, { useEffect } from "react";
import SubjectCard from "../_components/SubjectCard";
import store from "store2";

function Form({ params }) {
  let subjects;
  let slate = "";
 

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const form4Data = await getForm4class();
        const form3Data = await getForm3class();
        // const student = await postStudentData(user);
        
        // store student id 
        // store.set("user_id", student._id)

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
  }, []);

  let userClass = "class";
  if (params.class.endsWith("e")) {
    userClass = "Form 3";
    subjects = store.get("form3subjects");
    slate = "text-green-600";
  } else {
    userClass = "Form 4";
    subjects = store.get("form4subjects");
    slate = "text-red-600";
  }



  return (
    <div className="w-full bg-white border border-t md:h-screen h-[180vh]">
      <h2 className={`text-center mt-4 font-bold ${slate} text-3xl`}>
        {userClass}
      </h2>

      <article className="max-container mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="flex flex-col gap-5 justify-center px-2">
          <p className="text-3xl font-bold text-gray-800 ">
            Unleash Your Inner Wizard Of Wisdom
          </p>

          <p className="text-lg text-gray-700">
            Embark on a journey of knowledge exploration with our extensive
            collection of interactive Quizzes
          </p>

          <div className="flex flex-row gap-2 items-center justify-center p-2 w-40 rounded-md bg-gray-900">
            <p className="text-gray-200 text-md">Make Selection</p>
            <MoveRight className="md:text-gray-400 text-gray-900" />
          </div>
        </section>

        <section className="px-2">
          {subjects.length > 0 ? (<div className="grid md:grid-cols-3 gap-1 sm:grid-cols-2 sm:gap-4 grid-cols-1">
            {subjects.map((subject) => (
              <div key={subject._id}>
                <SubjectCard
                  name={subject.name}
                  slate={slate}
                  klass={subject.class} // class Id
                />
              </div>
            ))}
          </div>) : (
            <div>
              <h2 className="ml-12 mt-10 p-4 font-bold justify-center items-center text-red-600">Not Yet Available!</h2>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}

export default Form;
