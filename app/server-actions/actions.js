"use server"
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

  // write a function that gets a form 4 class
  export async function getForm4class() {
    const form4ClassId = "66518888680b22dfa3e6acd8";

    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/class/${form4ClassId}`
      );

      const data = await response.json();
    //   console.log(data)
      return data;
    } catch (error) {
      console.error("Error getting form 4 subjects : ", error);
    }
  }
  
  // write a function that gets a form 3 class
  export async function getForm3class() {
    const form3ClassId = "665188ab680b22dfa3e6acda";

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
  