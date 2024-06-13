"use client";
import React, { useState, useEffect } from "react";
import store from "store2";

function Results({ params }) {
    const topic_id = params.topic_id;
    console.log(params)

    const studentId = store.get("studentId");
    const testId = store.get("testId");

    return (
        <div className="max-container">
            <h1 className="text-center text-2xl text-gray-600 font-bold">
               Results
            </h1>

        </div>
    );
}

export default Results;
