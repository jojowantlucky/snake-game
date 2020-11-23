// create an express app
const express = require("express");
const app = express();
const path = require("path");

// use the express-static middleware
app.use(express.static("/"));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

// start the server listening for requests
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));