// Require the express module
const express = require("express");
// module called path
const path = require('path');
// Getting  app object
const app = express();
// Setting up a port
const HTTP_PORT = process.env.HTTP_PORT || 8080;

// HTML file and root route
app.get("/", (req, res) => {
    var htmlPath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(htmlPath); 
});

// Starting the server
app.listen(HTTP_PORT, () => console.log(`Server running at http://localhost: ${HTTP_PORT}`));
