"use client";
import React, { useState } from "react";
import { topics } from "../../_component/constants/topics";
import { allSubjects } from "@/app/allSubjects";

function Quiz({ params }) {
  const stringSubjectId = params.subject_id;
  const topicId = params.topic_id;

  let subjectId = parseInt(stringSubjectId);
  // a = subjectId + 1;

  const [topic, settopic] = useState(topics);
  const [subjects, setsubjects] = useState(allSubjects);

  const subjectName = subjects[subjectId].name;
  const subjectClass = subjects[subjectId].klass;
  const subject_id = subjects[subjectId].id;

  return (
    <div>
      {subjectName}
      <p>{subjectClass}</p>
      <p>{subject_id}</p>

      <p>params id</p>
      <p>{subjectId + 1}</p>
    </div>
  );
}

export default Quiz;
