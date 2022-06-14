//dependencies
const cors = require("cors")
const express = require("express");
const app = express();


//Import JSON files
const projects = require("./projects.json");
const about = require("./about.json")

//Mount Middleware
app.use(cors());

//Mount Routes:

//Home- for testing
app.get("/", (req, res) => {
    res.send("Home Page")
})

//Route to About
app.get("/about", (req, res) => {
    res.json(about) //send about via json
})

//Route to Projects
app.get("/projects", (req, res) => {
    res.json(projects)
})

//PORT and event listener
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`All sailors to port ${PORT}`))