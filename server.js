const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { request } = require("http");
const { response } = require("express");

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static(path.join(__dirname, "website")));

// Require Express to run server and routes
//
// Get All data by the: http://localhost:4800/getAll
const getData = (request, response) => response.send(projectData);

app.get("/all", getData);

// POST route to add new data to the ProjectData endpoint
const addData = (request, response) => {
  projectData = request.body;
  console.log(projectData);
  response.send(projectData);
};

app.post("/add", addData);

// Setup Server
const port = 8000;
const hostname = "127.0.0.1";

// Listenning to the server
app.listen(port, () => {
  console.log(`Server running at: http://${hostname}:${port}/`);
});
