// Require the express module
const express = require("express");

// Get the app object
const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 8080;

app.get("/", (req, res) => 
    {
        res.send("Kavya Byju - 155142227"); 
    });
// Start the server
app.listen(HTTP_PORT, () => console.log(`Server running at http://localhost:${HTTP_PORT}`));
