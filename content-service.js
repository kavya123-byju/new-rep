// Name: Kavya Byju
// Student ID: 155142227
// Email: kbyju@myseneca.ca
// Created on: 2024-10-14
// Last Modified: 2024-10-14

// Import the 'fs' module for file system operations
const fs = require("fs");

// Initialize empty arrays to hold articles and categories
let articles = [];
let categories = [];

// Function to initialize the content service
function initialize() {
    return new Promise((resolve, reject) => {
        // Read the articles.json file
        fs.readFile("./data/articles.json", "utf8", (err, data) => {
            if (err) {
                // Reject the promise if there's an error reading the file
                reject("unable to read articles file");
                return;
            }
            try {
                // Parse the JSON data and assign it to the articles array
                articles = JSON.parse(data); 
            } catch (err) {
                // Reject the promise if there's an error parsing the data
                reject("error parsing articles data");
                return;
            }

            // Read the categories.json file
            fs.readFile("./data/categories.json", "utf8", (err, data) => {
                if (err) {
                    // Reject the promise if there's an error reading the file
                    reject("unable to read categories file");
                    return;
                }
                try {
                    // Parse the JSON data and assign it to the categories array
                    categories = JSON.parse(data); 
                } catch (err) {
                    // Reject the promise if there's an error parsing the data
                    reject("error parsing categories data");
                    return;
                }
                resolve(); 
            });
        });
    });
}

// Function to get all articles
function getAllArticles() {
    return new Promise((resolve, reject) => {
        if (articles.length > 0) {
            resolve(articles); 
        } else {
            // Reject the promise if there are no articles
            reject("no results returned"); 
        }
    });
}

// Function to get only published articles
function getPublishedArticles() {
    return new Promise((resolve, reject) => {
        const publishedArticles = articles.filter(article => article.published);
        if (publishedArticles.length > 0) {
            resolve(publishedArticles); 
        } else {
            // Reject the promise if there are no published articles
            reject("no results returned"); 
        }
    });
}

// Function to get all categories
function getCategories() {
    return new Promise((resolve, reject) => {
        if (categories.length > 0) {
            resolve(categories); 
        } else {
            // Reject the promise if there are no categories
            reject("no results returned"); 
        }
    });
}

// Export the functions to be used in other modules
module.exports = {
    initialize,
    getAllArticles,
    getPublishedArticles,
    getCategories
};
