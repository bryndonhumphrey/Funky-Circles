var express = require("express");

var app = express();

app.use(express.static("./"))

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("circles");
});

app.get("*", function(req, res){
    res.render("circles");
});


app.listen(process.env.PORT, process.env.IP);