var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there");
});

app.get("/bye", function(req, res){
	res.send("Good Bye");
});

app.get("/dog", function(req, res){
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
	res.send("Welcome to subreddit");
});


app.get("*", function(req, res){
	res.send("PAGE NOT FOUND JUANPE");
});

app.listen(3000, function(){
	console.log("Server has started");
});