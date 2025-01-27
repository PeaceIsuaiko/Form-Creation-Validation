document.addEventListener("DOMContentLoaded", function () {
  // Define the async function to fetch user data
  async function fetchUserData() {
    // API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // Select the container for displaying API data
    const dataContainer = document.getElementById("api-data");

    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      // Parse the JSON response
      const users = await response.json();

      // Clear the loading message
      dataContainer.innerHTML = "";

      // Create a list to display user data
      const userList = document.createElement("ul");

      // Loop through users and append their names to the list
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });

      // Append the list to the data container
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle errors
      dataContainer.innerHTML = "Failed to load user data.";
      console.error(error);
    }
  }

  // Invoke the function to fetch user data
  fetchUserData();
});
