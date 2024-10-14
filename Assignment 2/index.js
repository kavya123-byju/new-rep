const express = require("express");
const path = require("path"); 
const app = express();
const content = require("./content-service"); 

const HTTP_PORT = process.env.PORT || 4050; // I did not use 8080, I used a unique port number

app.use(express.static('public'));

app.get("/", function (req, res) {
    res.redirect("/about"); 
});

app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "views", "about.html")); 
});

content.initialize().then(() => {
    app.listen(HTTP_PORT, () => {
        console.log("Express HTTP server listening on port", HTTP_PORT);
    });
}).catch(err => {
    console.log("Failed to initialize content service:", err);
});
