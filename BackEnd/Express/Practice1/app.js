// Practice app.js
var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal.toLowerCase();
	var sounds = {
		dog: "Woof",
		cat: "Meow",
		sheep: "beeh",
		cow: "Mooh"
	}
	
	var sound = sounds[animal];
	
	res.send(animal + " makes a sound of " + sound);
	
	
});

app.get("/repeat/:message/:times", function(req, res){
	var message = req.params.message;
	var times = Number(req.params.times);
	var finalMessage = "";
	for (var i = 0; i < times; i++){
		finalMessage = finalMessage + " " + message;
	}
	res.send(finalMessage);
})

app.get("*", function(req, res){
	res.send("Sorry the page was not found!");
});

app.listen(3000, function(){
	console.log("Server has started");
});