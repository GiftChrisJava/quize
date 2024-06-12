// file: /app/tutors/more/page.jsx

"use client";
import React, { useState, useEffect } from "react";
import Tutorz from "../_components/Tutorz";
import FilterButton from "../_components/FilterButton";
import { SearchXIcon } from "lucide-react";
import store from "store2";

function Page() {
  const [tutorsData, setTutorsData] = useState(null);
  const [filterButtons, setFilterButtons] = useState([
    { label: "All", value: "All" }
  ]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const data = store.get("tutors");
    if (data) {
      setTutorsData(data);
      
      const uniqueSubjects = new Set();
      data.forEach((tutor) => {
        uniqueSubjects.add(tutor.masteredSubject);
        if (tutor.otherSubjects) {
          tutor.otherSubjects.forEach((subject) => uniqueSubjects.add(subject.name));
        }
      });

      setFilterButtons([
        { label: "All", value: "All" },
        ...Array.from(uniqueSubjects).map((subject) => ({
          label: subject,
          value: subject,
        })),
      ]);
    }
  }, []);

  const handleFilterClick = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  if (!tutorsData) {
    return (
      <div className="flex flex-col pb-6 mb-4">
        <div className="text-center">
          <p>Loading tutors...</p>
        </div>
      </div>
    );
  }

  const filteredTutors = tutorsData.filter((tutor) => {
    if (selectedFilter === "All") {
      return true;
    }
    return (
      tutor.masteredSubject === selectedFilter ||
      (tutor.otherSubjects && tutor.otherSubjects.some((subject) => subject.name === selectedFilter))
    );
  });

  return (
    <div className="flex flex-col pb-6 mb-4">
      <div className="p-4 grid md:grid-cols-5 xl:grid-cols-9 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-3 text-[8px] sm:text-[10px]">
        {filterButtons.map((button) => (
          <div key={button.value}>
            <FilterButton
              label={button.label}
              value={button.value}
              selectedFilter={selectedFilter}
              setSelectedFilter={handleFilterClick}
            />
          </div>
        ))}
      </div>

      <div className="max-container flex-grow h-[100%] mb-[380px] sm:px-9 md:px-1 mt-14 grid md:grid-cols-4 gap-6 sm:grid-cols-3 sm:gap-4 grid-cols-1">
        {filteredTutors.length === 0 ? (
          <div className="md:ml-[200px]">
            <SearchXIcon className="max-w-sm mx-auto text-gray-600 h-16 w-16 md:ml-[160px]" />
            <p className="mb-[200px] text-lg text-gray-700 text-center w-[400px] flex flex-row items-center justify-center">
              {"No tutors for that subject are available yet"}
            </p>
          </div>
        ) : (
          filteredTutors.map((tutor) => (
            <div key={tutor._id}>
              <Tutorz
                name={tutor.name}
                image={tutor.image_url}
                masteredSubject={tutor.masteredSubject}
                tutor_id={tutor._id}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page;
