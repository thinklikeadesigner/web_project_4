const path = require("path"); // connect path to webpack config

module.exports = {
    entry: { main: "./src/index.js" },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    }
}