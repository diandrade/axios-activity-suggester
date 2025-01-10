# Activity Suggestion App

This project is part of a course by **Angela Yu** and aims to create a web application that suggests random activities based on user preferences. The app allows users to choose activity types and the number of participants, fetching results from an external API. It is built using **Express**, **Axios**, and **EJS** for rendering dynamic content.

---

## Key Features

- **Random Activity Generation:**  
  The app fetches random activity suggestions from the [Bored API](https://bored-api.appbrewery.com) based on user-selected filters, such as activity type and number of participants.

- **User Input Handling:**  
  Users can select the type of activity (e.g., education, social, music) and the number of participants through a form.

- **Dynamic Content Rendering:**  
  Based on the API response, the app dynamically displays the selected activity, its type, and the number of participants using **EJS** templates.

- **Error Handling:**  
  If no matching activities are found, the app displays a user-friendly error message.

---

## Technologies Used

- **Express.js**: Backend framework for handling server requests and routing.
- **Axios**: HTTP client to interact with the Bored API.
- **EJS**: Templating engine for rendering dynamic HTML content.
- **Body-Parser**: Middleware to parse incoming request bodies.

---

## Course

This project was developed as part of a **JavaScript** course by **Angela Yu**. The course focuses on 