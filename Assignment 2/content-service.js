function initialize() {
    return new Promise((resolve, reject) => {
        console.log("Content service initialized");
        resolve();
    });
}

module.exports = {
    initialize
};