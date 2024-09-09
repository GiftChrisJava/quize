"use client";

// Define a function to check the internet connection
export async function checkInternet() {
  try {
    const response = await fetch(
      "https://meep-app-api.onrender.com/api/v1/class"
    );
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

// a function that gets all the tutors
export async function getAllTutors() {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/tutor/`
    );

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// a function that gets a tutor by Id
export async function getTutorById(tutorId) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/tutor/${tutorId}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// a function that gets a subject by Id
export async function getSubjectById(subjectId) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/subject/${subjectId}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// a function that gets a subtopic by Id
export async function getSubtopicById(subtopicId) {
  console.log(subtopicId);
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/subtopics/${subtopicId}`
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// a function that gets a topic by Id
export async function getTopicById(topicId) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/topic/${topicId}`
    );

    const data = await response.json();
    console.log(data); // display topic data
    return data;
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// write a function that gets a form 4 class
export async function getForm4class() {
  const form4ClassId = "666bbcfd0ddf861bc3606b04";

  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/class/${form4ClassId}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting form 4 subjects : ", error);
  }
}

// write a function that gets a form 3 class
export async function getForm3class() {
  const form3ClassId = "666bbd7b0ddf861bc3606b09";

  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/class/${form3ClassId}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting form 4 subjects : ", error);
  }
}

// Function to post a comment
export async function postComment(commentData) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/tut/feedback`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
}

// Function to get customer feedback by tutor ID
export async function getCustomerFeedbackByTutorId(tutorId) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/tut/feedback/customer/${tutorId}`
    );

    const data = await response.json();
    // console.log(data); _id
    return data;
  } catch (error) {
    console.error("Error getting customer feedback by tutor ID:", error);
    throw error;
  }
}

// Function to get notes by video ID
export async function getNotesByVideoId(videoId) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/notes/video/${videoId}`
    );
    const data = await response.json();
    console.log("notes are ", data);
    return data;
  } catch (error) {
    console.error("Error getting notes by video ID:", error);
  }
}

// Function to get subject by class ID and subject name
export async function getSubjectWithSubtopics(classId, subjectName) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/subject/${classId}/${subjectName}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting subject with subtopics:", error);
  }
}

// Function to get a test
export async function getTestById(testId) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/test/${testId}`
    );

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error("Error in getting test by id:", error);
    throw error;
  }
}

// Function to post student data

export async function postStudentData(username, id, firstName, lastName) {
  console.log("postStudentData function invoked");

  // Log the incoming parameters
  console.log("Username:", username);
  console.log("ID:", id);
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);

  // Verify all parameters are valid before proceeding
  if (!username || !id || !firstName || !lastName) {
    console.error("Missing required parameters!");
    return;
  }

  const studentData = {
    stripe_student_id: id,
    username: username,
    firstname: firstName,
    lastname: lastName,
  };

  console.log("Student data to be posted:", studentData);

  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/student`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      }
    );

    const data = await response.json();
    console.log("Response from API:", data);

    if (data.error) {
      console.log("Error in response:", data);
    }

    return data;
  } catch (error) {
    console.error("Error posting student data:", error);
    throw error;
  }
}

// function to post student responses
export async function postStudentResponse(responseData) {
  try {
    const response = await fetch(
      "https://meep-app-api.onrender.com/api/v1/student_test_response",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error posting student response:", error);
  }
}

// Function to get test score
export async function getTestScore(studentId, testId) {
  try {
    const url = `https://meep-app-api.onrender.com/api/v1/test_score/${studentId}/test/${testId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting test score:", error);
    throw error;
  }
}

// Function to post payment data
export async function postPayment(paymentData) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/payments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting payment:", error);
    throw error;
  }
}

// Function to update payment data by student and topic IDs
export async function updatePayment(studentId, topicId, paymentData) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/payments/${studentId}/${topicId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating payment:", error);
    throw error;
  }
}

// Function to get payment data by student and topic IDs
export async function getPayment(studentId, topicId) {
  try {
    const response = await fetch(
      `https://meep-app-api.onrender.com/api/v1/payments/${studentId}/${topicId}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting payment data:", error);
    throw error;
  }
}
