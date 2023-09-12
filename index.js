const express = require("express");
const app = express();

app.set('view engine', 'ejs');


app.get("/hello", (req, res) => {
    res.render("index", {
        mensage: "Hello, Cognum!"
    })
});



app.listen(3000, () => {
    console.log("App rolling");
});