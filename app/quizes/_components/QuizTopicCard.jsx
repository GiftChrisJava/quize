import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Loader, AlertTriangle } from "lucide-react";
import store from "store2";
import { getSubtopicById } from "@/app/server-actions/actions";

function QuizTopicCard({ name, image, form, subject, quiz_id, klass }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCardClick = async (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsLoading(true);
    setError(null); // Reset error state before making the request
    try {
      const subtopicData = await getSubtopicById(quiz_id);
      console.log("Subtopic data on click: ", subtopicData);

      // store subtopic data locally
      store.set("subtopic", subtopicData);
    } catch (error) {
      console.error("Error getting subtopic data:", error);
      setError("Failed to fetch subtopic data. Please try again.");
    } finally {
      setIsLoading(false);
      window.location.href = `/quizes/${klass}/${subject}/${quiz_id}`; // Navigate after loading
    }
  };

  return (
    <div>
      <Link href={`/quizes/${klass}/${subject}/${quiz_id}`}>
        <div
          onClick={handleCardClick}
          className="mt-6 hover:cursor-pointer shadow-xl bg-white rounded-md mx-auto max-w-[220px] md:max-w-[220px]"
        >
          <div>
            <Image
              src={image}
              height={200}
              width={220}
              alt="quiz topic image"
              className="rounded-md hover:cursor-pointer object-contain md:h-54 md:w-84 rounded-b-none"
            />
          </div>
          <div className="mt-2 px-1">
            <div className="flex flex-col hover:cursor-pointer">
              <p className="text-gray-800 font-semibold text-sm mb-2 text-center">
                {name}
              </p>
            </div>
          </div>
          {isLoading && (
            <div className="flex justify-center mt-2">
              <Loader className="animate-spin text-gray-900" />
            </div>
          )}
          {error && (
            <div className="mt-2 text-red-600 flex items-center justify-center">
              <AlertTriangle className="mr-1" size={16} />
              <span>{error}</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default QuizTopicCard;
