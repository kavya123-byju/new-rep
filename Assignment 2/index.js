const express = require("express");
const path = require("path");
const app = express();
const contentService = require("./content-service"); 

const HTTP_PORT = process.env.PORT || 4050; // Use a unique port number

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.redirect("/about");
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/articles", (req, res) => {
    contentService.getPublishedArticles()
        .then((articles) => {
            res.json(articles); 
        })
        .catch((err) => {
            res.status(500).send("Error: " + err);
        });
});

app.get("/categories", (req, res) => {
    contentService.getCategories()
        .then((categories) => {
            res.json(categories); 
        })
        .catch((err) => {
            res.status(500).send("Error: " + err);
        });
});

contentService.initialize()
    .then(() => {
        app.listen(HTTP_PORT, () => {
            console.log("Express HTTP server listening on port", HTTP_PORT);
        });
    })
    .catch((err) => {
        console.log("Failed to initialize content service:", err);
    });
