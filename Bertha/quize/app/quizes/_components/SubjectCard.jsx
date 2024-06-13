"use client";

import { getSubjectWithSubtopics } from "@/app/server-actions/actions";
import { BookCopy, Loader, AlertTriangle } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import store from "store2";

function SubjectCard({ name, slate, klass }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null); // Reset error state before making the request
    try {
      const data = await getSubjectWithSubtopics(klass, name);
      store.set("subjectData", data); // store data locally
    } catch (error) {
      console.error("Error fetching subject with subtopics:", error);
      setError("Failed to fetch subject data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col max-w-[240px] mx-auto mb-4 md:mb-0 md:max-w-none justify-center items-center border border-slate-300 shadow-xl bg-gray-200 rounded-2xl py-8 px-1">
      <BookCopy className={`${slate}`} />
      {isLoading ? (
        <Loader className="animate-spin text-gray-900 mt-2" />
      ) : (
        <Link href={`/quizes/${klass}/${name}`} onClick={handleClick}>
          <p
            className={`text-gray-900 ${isLoading ? "cursor-not-allowed" : "hover:text-gray-600 hover:cursor-pointer"} text-[11px] mt-2 font-bold`}
            onClick={isLoading ? (e) => e.preventDefault() : handleClick}
          >
            {name}
          </p>
        </Link>
      )}
      {error && (
        <div className="mt-2 text-red-600 flex items-center">
          <AlertTriangle className="mr-1" size={16} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default SubjectCard;
