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

var port = process.env.PORT || 80;
app.listen(port, function(){
    console.log("Funky Circles server is running");
});