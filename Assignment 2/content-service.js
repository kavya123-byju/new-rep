const fs = require("fs");
const path = require("path");

let articles = [];
let categories = [];

function initialize() {
    return new Promise((resolve, reject) => {
        try {
            const articlesData = fs.readFileSync(path.join(__dirname, "data", "articles.json"), "utf8");
            articles = JSON.parse(articlesData);

            
            const categoriesData = fs.readFileSync(path.join(__dirname, "data", "categories.json"), "utf8");
            categories = JSON.parse(categoriesData);

            console.log("Content service initialized successfully.");
            resolve();
        } catch (err) {
            reject("Error initializing content service: " + err);
        }
    });
}

function getPublishedArticles() {
    return new Promise((resolve, reject) => {
        const publishedArticles = articles.filter(article => article.published === true);
        if (publishedArticles.length > 0) {
            resolve(publishedArticles);
        } else {
            reject("No published articles found");
        }
    });
}

function getCategories() {
    return new Promise((resolve, reject) => {
        if (categories.length > 0) {
            resolve(categories);
        } else {
            reject("No categories found");
        }
    });
}

module.exports = {
    initialize,
    getPublishedArticles,
    getCategories
};
