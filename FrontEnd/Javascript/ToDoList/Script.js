// JavaScript Document
var todos = ["hole", "in one"];

console.log("Runnning smooth");
window.setTimeout(function() {

	var input = prompt("What would yo like to do?");
	
	while (input !== "quit"){
	
	if(input === "list"){
			console.log("**********");
	   		todos.forEach(function(todo, i){
				console.log(i + ": " + todo);
			});
			console.log("**********");
	   } else if (input === "new"){
			var newToDo = prompt("Enter new To Do");
			todos.push(newToDo);
		} else if (input === "delete") {
			var index = prompt("Enter index of todo to delete");
			todos.splice(index,1);
		}
	
		input = prompt("What would yo like to do?");
	}
	
	console.log("OKAY SEE YA");
	
	

}, 500);