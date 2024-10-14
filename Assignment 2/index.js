const express = require('express');
const app = express();
const path = require('path');
const contentService = require('./content-service');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.send("Welcome to Kavya's Blogging!!n!");
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get("/articles", (req, res) => {
    contentService.getAllArticles()
        .then((articles) => {
            res.json(articles);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

app.get("/categories", (req, res) => {
    contentService.getCategories()
        .then((categories) => {
            res.json(categories);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

contentService.initialize()
    .then(() => {
        app.listen(4444, () => {
            console.log("Server is running on port 4444");
        });
    })
    .catch((err) => {
        console.error("Failed to initialize content service:", err);
    });