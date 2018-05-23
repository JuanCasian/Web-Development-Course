var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


//Method to create a new obj in db in one step
Cat.create({
  name: "NEPE",
    age: 1,
    temperament: "NEPE"
}, function(err, cat){
  if (err){
    console.log("Hubo error");
  } else {
    console.log("We just save a cat to db:");
    console.log(cat);
  }
});

//Method to create a new obj in db in two step
// var george = new Cat({
//   name: "Pepe",
//   age: 1,
//   temperament: "Evil"
// });
//
// george.save(function(err, cat){
//   if (err){
//     console.log("Hubo error");
//   } else {
//     console.log("We just save a cat to db:");
//     console.log(cat);
//   }
// });


////Method to find a new obj in db in one step
Cat.find({}, function(err, cats){
  if(err){
    console.log("Oh NO error!");
    console.log(err);
  } else {
    console.log("All the cats");
    console.log(cats);
  }
});
