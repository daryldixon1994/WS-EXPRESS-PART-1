// import Express JS
const express = require("express");
const app = express();
const path = require("path");
//READ => GET
const logger = (req, res, next) => {
    const test = true;
    if (test) {
        return next();
    }
    res.send("request failed");
};
// app.use(logger);
app.get("/", (req, res) => {
    res.send("this is the response");
});
app.use(express.static("content"));
app.get("/gmc", logger, (req, res) => {
    res.sendFile(path.resolve("content", "index.html"));
});
app.get("/about", (req, res) => {
    res.send("about page");
});
//CREATE => POST

//UPDATE => PUT

//DELETE => DELETE

// CREATE SERVER
app.listen(5000, () => {
    console.log("server is up and running");
});
