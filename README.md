# 🧳 Tour Backend - Capstone Project

This is a backend server built using **Node.js**, **Express.js**, and **MongoDB** to manage tour data. The application demonstrates basic CRUD operations (Create, Read, Update, Delete) on tour entries.

- ## 📂 Project Structure

project-root/
│
├── config/
│ └── database.js
│
├── controllers/
│ └── tourController.js
│
├── routes/
│ └── tourRoutes.js
│
├── schema/
│ └── tour.js
│
├── app.js
└── index.js


- ## 🧭 API Endpoints

All routes are prefixed with `/api/tours`.

| Method | Route             | Description        | Controller Function |
|--------|------------------|--------------------|---------------------|
| GET    | `/`              | Get all tours      | `getTour`           |
| POST   | `/`              | Create a new tour  | `createTour`        |
| PUT    | `/:id`           | Update a tour      | `updateTour`        |
| DELETE | `/:id`           | Delete a tour      | `deleteTour`        |


## 📦 Controllers

### `getTour`
- Fetches all tour data from the database.
- Returns an array of tour objects.

### `createTour`
- Accepts tour details in the request body.
- Creates and stores a new tour in the database.

### `updateTour`
- Accepts a tour ID as a parameter and updated data in the request body.
- Modifies the corresponding tour in the database.

### `deleteTour`
- Accepts a tour ID as a parameter.
- Deletes the corresponding tour from the database.

