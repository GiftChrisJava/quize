"use client";
import React, { useState } from "react";
import Tutorz from "../_components/Tutorz";
import { tutors } from "../constants/tutors";
import FilterButton from "../_components/FilterButton";
import { filterButtons } from "../constants/filterButtons";

function Page() {
  // a state variable to track the selected filter
  const [selectedFilter, setSelectedFilter] = useState("All"); // Initially set to "All"

  const handleFilterClick = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  // Filter the tutors based on the selected subject
  const filteredTutors = tutors.filter((tutor) => {
    if (selectedFilter === "All") {
      return true; // Show all tutors initially
    }
    return (
      tutor.masteredSubject === selectedFilter ||
      tutor.otherSubjects.some((subject) => subject.name === selectedFilter)
    );
  });

  return (
    <div className=" pb-6 mb-4">
      <div className="p-4 grid md:grid-cols-5 xl:grid-cols-9 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-3 text-[8px] sm:text-[10px]">
        {/* Use map to render the filter buttons */}
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

      <div className="max-container h-[80vh] mb-10 sm:px-9 md:px-1 mt-14 grid md:grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-4 grid-cols-1">
        {filteredTutors.length === 0 ? (
          <div className="no-tutors-message">
            <p>No tutors for that course are available yet.</p>
          </div>
        ) : (
          filteredTutors.map((tutor) => (
            <div key={tutor.id}>
              <Tutorz
                name={tutor.name}
                image={tutor.image}
                masteredSubject={tutor.masteredSubject}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page;
