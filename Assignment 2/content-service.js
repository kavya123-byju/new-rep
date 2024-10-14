const fs = require("fs");

let articles = [];
let categories = [];

function initialize() {
    return new Promise((resolve, reject) => {
        
        fs.readFile("./data/articles.json", "utf8", (err, data) => {
            if (err) {
                reject("unable to read articles file");
                return;
            }
            try {
                articles = JSON.parse(data); 
            } catch (err) {
                reject("error parsing articles data");
                return;
            }

            
            fs.readFile("./data/categories.json", "utf8", (err, data) => {
                if (err) {
                    reject("unable to read categories file");
                    return;
                }
                try {
                    categories = JSON.parse(data); 
                } catch (err) {
                    reject("error parsing categories data");
                    return;
                }

                resolve(); 
            });
        });
    });
}

function getAllArticles() {
    return new Promise((resolve, reject) => {
        if (articles.length > 0) {
            resolve(articles); 
        } else {
            reject("no results returned"); 
        }
    });
}

function getPublishedArticles() {
    return new Promise((resolve, reject) => {
        const publishedArticles = articles.filter(article => article.published);
        if (publishedArticles.length > 0) {
            resolve(publishedArticles); 
        } else {
            reject("no results returned"); 
        }
    });
}

function getCategories() {
    return new Promise((resolve, reject) => {
        if (categories.length > 0) {
            resolve(categories); 
        } else {
            reject("no results returned"); 
        }
    });
}

module.exports = {
    initialize,
    getAllArticles,
    getPublishedArticles,
    getCategories
};