"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { checkInternet, getForm3class, getForm4class } from './server-actions/actions';
import store from "store2";

export default function Page() {
  const [form4Subjects, setForm4Subjects] = useState([]);
  const [form3Subjects, setForm3Subjects] = useState([]);

  // fetch form 4 subjects
  const fetchForm4Subjects = async () => {
    if (await checkInternet()) {
      try {
        const data = await getForm4class(); // Call your API function
        setForm4Subjects(data.subjects); // Update the state with the subjects data
        // Store the fetched data locally
        store.set("form4subjects", data.subjects);
      } catch (error) {
        console.error('Error getting form 4 subjects:', error);
      }
    } else {
      // Retrieve the progress data from store2
      const storedForm4Subjects = store.get("form4subjects");
      if (storedForm4Subjects) {
        setForm4Subjects(storedForm4Subjects);
      }
    }
  };

  // fetch form 3 subjects
  const fetchForm3Subjects = async () => {
    if (await checkInternet()) {
      try {
        const data = await getForm3class();
        setForm3Subjects(data.subjects); // Update the state with the subjects data
        // Store the fetched data locally
        store.set("form3subjects", data.subjects);
      } catch (error) {
        console.error('Error getting form 3 subjects:', error);
      }
    } else {
      // Retrieve the progress data from store2
      const storedForm3Subjects = store.get("form3subjects");
      if (storedForm3Subjects) {
        setForm3Subjects(storedForm3Subjects);
      }
    }
  };

  // Use useEffect to call fetchForm4Subjects and fetchForm3Subjects on mount
  useEffect(() => {
    fetchForm4Subjects();
    fetchForm3Subjects();
  }, []);

  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center bg-no-repeat backdrop-blur bg-[url('../public/bg2.jpg')]">
      <div className='flex flex-col'>
        <h1 data-aos="fade-left" className="text-gray-700 text-center font-bold text-5xl -mt-[200px]">
          WELCOME TO MALAWI EDUCATION ENHANCEMENT PLATFORM
        </h1>
        <h4 className="text-gray-700 text-center font-bold text-xl mt-8 mb-16">
          A website that simplifies what you learn in class to increase your understanding for best grades
        </h4>
        <div className="mt-8 flex justify-between max-w-sm mx-auto gap-[100px]">
          <button
            className="bg-gray-700 text-gray-200 hover:text-green-600 hover:cursor-pointer font-semibold rounded-lg shadow-lg py-2 px-6"
          >
            <Link href="/sign-in">Login</Link>
          </button>
          <button className="bg-gray-700 px-6 text-gray-200 hover:text-green-600 hover:cursor-pointer font-semibold rounded-lg shadow-lg py-2">
            <Link href="/sign-up">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
