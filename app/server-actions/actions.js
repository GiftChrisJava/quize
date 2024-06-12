"use server";

// Import node-localstorage
const LocalStorage = require("node-localstorage").LocalStorage;
import { auth, currentUser } from "@clerk/nextjs/server";


 // Create a new node-localstorage instance
 const localStorage = new LocalStorage("./scratch");


// Define a function to check the internet connection
export async function checkInternet() {
  try {
    const response = await fetch("http://localhost:8000/api/v1/class");
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
    const response = await fetch(`http://localhost:8000/api/v1/tutor/`);

    const data = await response.json();
       
    const user_id = JSON.parse(localStorage.getItem("user_id"));

    const username = JSON.parse(localStorage.getItem("username"));

    return {data, user_id, username};
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// a function that gets a tutor by Id
export async function getTutorById(tutorId) {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/tutor/${tutorId}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// a function that gets a subject by Id
export async function getSubjectById(subjectId) {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/subject/${subjectId}`);

    const data = await response.json();

    const { userId } = auth();

    const user = await currentUser();

    await postStudentData(user); // call this guy

    return data;
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// a function that gets a subtopic by Id
export async function getSubtopicById(subtopicId) {
  console.log(subtopicId);
  try {
    const response = await fetch(`http://localhost:8000/api/v1/subtopics/${subtopicId}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// a function that gets a topic by Id
export async function getTopicById(topicId) {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/topic/${topicId}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user progress:", error);
  }
}

// write a function that gets a form 4 class
export async function getForm4class() {
  const form4ClassId = "6654cad9354cd7cc5392cdde";

  try {
    const response = await fetch(`http://localhost:8000/api/v1/class/${form4ClassId}`);

    const data = await response.json();

    const { userId } = auth();

    const user = await currentUser();

    await postStudentData(user); // call this guy

    return data;
  } catch (error) {
    console.error("Error getting form 4 subjects : ", error);
  }
}

// write a function that gets a form 3 class
export async function getForm3class() {
  const form3ClassId = "6655a404049abde0be4aa036";

  try {
    const response = await fetch(`http://localhost:8000/api/v1/class/${form3ClassId}`);

    const data = await response.json();

    const { userId } = auth();

    const user = await currentUser();

    await postStudentData(user); // call this guy

    return data;
  } catch (error) {
    console.error("Error getting form 4 subjects : ", error);
  }
}

// Function to post a comment
export async function postComment(commentData) {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/tut/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });

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
    const response = await fetch(`http://localhost:8000/api/v1/tut/feedback/customer/${tutorId}`);
    
    const data = await response.json();
    // console.log(data);
    return data;
  
  } catch (error) {
    console.error("Error getting customer feedback by tutor ID:", error);
    throw error;
  }
}

// Function to get subject by class ID and subject name
export async function getSubjectWithSubtopics(classId, subjectName) {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/subject/${classId}/${subjectName}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting subject with subtopics:", error);
  }
}


// Function to get a test
export async function getTestById(testId) {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/test/${testId}`);
    
    const data = await response.json();
    
    const user_id = JSON.parse(localStorage.getItem("user_id"));

    const username = JSON.parse(localStorage.getItem("username"));


    return {data, user_id, username};
  
  } catch (error) {
    console.error("Error in getting test by id:", error);
    throw error;
  }
}

// Function to post student data
export async function postStudentData(user) {
  console.log("called and username is " + user.username);
  const studentData = {
    stripe_student_id: user.id,
    username: user.username,
    firstname: user.firstName,
    lastname: user.lastName,
  };

  try {
    const response = await fetch(`http://localhost:8000/api/v1/student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    const data = await response.json();

    if (data.error) {
      console.log(data);
    } else {
    // Store the username in node-localstorage
    localStorage.setItem("username", JSON.stringify(user.username));

     // Store the username in node-localstorage
     localStorage.setItem("firstName", JSON.stringify(user.firstName));

    // Store the user_id in node-localstorage
    localStorage.setItem("user_id", JSON.stringify(data._id));
    }

    // Retrieve the user_id from node-localstorage
    //  user_id = JSON.parse(localStorage.getItem("user_id"));
    return data;
  } catch (error) {
    console.error("Error posting student data:", error);
    throw error;
  }
}

// function to post student responses
export async function postStudentResponse(responseData) {
  try {
      const response = await fetch('http://localhost:8000/api/v1/student_test_response', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(responseData),
      });

      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error("Error posting student response:", error);
  }
}