// JavaScript Document

var movieDB = [
	{
		title: "Harry Potter",
		hasWatched: true,
		rating:  5
	},
	{
		title: "Lord of the Rings",
		hasWatched: false,
		rating: 1
	},
	{
		title: "Mickey Mouse",
		hasWatched: true,
		rating: 3.5
	}
];

for(var i = 0; i < movieDB.length; i++) {
	if(movieDB[i].hasWatched === true){
		console.log("You have seen " + movieDB[i].title + " - " + movieDB[i].rating + " stars!");
	} else {
		console.log("You have NOT seen " + movieDB[i].title + " - " + movieDB[i].rating + " stars!");
	}
}