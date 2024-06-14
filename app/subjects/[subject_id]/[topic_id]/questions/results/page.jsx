"use client";
import React, { useState, useEffect } from "react";
import store from "store2";
import { Loader } from "lucide-react";
import StudentPerformanceChart from "./StudentPerformanceChart";
import { getTestScore } from "@/app/server-actions/actions";
import { useUser } from "@clerk/nextjs";


function Results({ params }) {

  const { isLoaded, isSignedIn, user } = useUser();

  
    store.set("username", user.username);
    store.set("stripeId", user.id)
    store.set("firstName", user.firstName);
    store.set("lastName", user.lastName);
  
  
  const topic_id = params.topic_id;
  // const studentId = store.get("studentId");
  const studentId = "666bcbe60ddf861bc3606cb8"
  
  const testId = store.get("testId");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentIdentity, setstudentIdentity] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTestScore(studentId, testId);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }


      const student = await postStudentData(user);
        
      setstudentIdentity(student._id)

    };

    fetchData();
  }, [studentId, testId]);


  studentId = studentIdentity;

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
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No data available.</p>
      </div>
    );
  }

  const { grade, feedback, student, test } = data[0];
  const scores = [grade]; // Assuming you want to plot the grade as a score, you can expand this logic as needed

  return (
    <div className="max-container mb-8">
      <h1 className="text-center text-2xl text-gray-600 font-bold">Results</h1>
      <div className="text-center mt-4">
        <p><strong>Name:</strong> {student.firstname} {student.lastname}</p>
        <p><strong>Test:</strong> {test.name}</p>
        <p><strong>Grade:</strong> {grade + "%"}</p>
        <p><strong></strong> {"\"" + feedback + "\""}</p>
      </div> 


      <StudentPerformanceChart scores={scores} className="mt-10"/>
    </div>
  );
}

export default Results;