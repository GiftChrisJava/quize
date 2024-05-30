"use server"

import { auth, currentUser } from "@clerk/nextjs/server";

// Define a function to check the internet connection
export async function checkInternet() {
    try {
      // Send a request to a server and check the response status
      const response = await fetch("http://localhost:8000/api/v1/class");
      if (response.ok) {
        // The internet connection is working
        return true;
      } else {
        // The internet connection is not working
        return false;
      }
    } catch (error) {
      // The request failed, probably due to network error
      return false;
    }
  }
  

  // a function that gets a subject by Id
  export async function getSubjectById(subjectId) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/subject/${subjectId}`
      );
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error getting user progress:", error);
    }
  }


    // a function that gets a topic by Id
    export async function getTopicById(topicId) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/topic/${topicId}`
        );
    
        const data = await response.json();
        console.log("topic  data : ", data)
        return data;
      } catch (error) {
        console.error("Error getting user progress:", error);
      }
    }


  // write a function that gets a form 4 class
  export async function getForm4class() {
    const form4ClassId = "6654cad9354cd7cc5392cdde";

    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/class/${form4ClassId}`
      );

      const data = await response.json();
    //   console.log(data)

      // Get the userId from auth() -- if null, the user is not signed in
      const { userId } = auth();

      // Get the Backend API User object when you need access to the user's information
      const user = await currentUser()
      console.log(user.username)
      return data;
    } catch (error) {
      console.error("Error getting form 4 subjects : ", error);
    }
  }
  
  // write a function that gets a form 3 class
  export async function getForm3class() {
    const form3ClassId = "6655a404049abde0be4aa036";

    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/class/${form3ClassId}`
      );

      const data = await response.json();
    //   console.log(data)
      return data;
    } catch (error) {
      console.error("Error getting form 4 subjects : ", error);
    }
  }
  

