var express = require ("express");
var app = express();

app.get("/", function(req, res){
	res.render("home.ejs");
});


app.get("/prueba/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("prueba.ejs", {
		thingVar: thing
	});
});

app.get("/posts", function (req, res){
	var posts = [
		{title: "Post1", author: "susy"},
		{title: "Post2", author: "Pepe"},
		{title: "Post3", author: "Juan"}
	];
	res.render("posts.ejs", {posts:posts});
})

app.listen(3000, function(){
	console.log("Server has started");
});
