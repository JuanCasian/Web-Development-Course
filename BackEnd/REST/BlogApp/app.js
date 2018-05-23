var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");

// APP CONFIG
mongoose.connect("mongodb://localhost/BlogApp");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());
//MONGOOSE MODEL CONFI
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default:Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "Test Blog",
//   image: "https://images.pexels.com/photos/7720/night-animal-dog-pet.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   body: "THIS  A TEST BLOG POST FOR MY PROJECT BLOGSAPP"
// });

//RESTFUL ROUTES

app.get("/", function(req, res){
  res.redirect("/blogs");
});

//index
app.get("/blogs", function(req, res){
  Blog.find({}, function (err, blogs){
    if (err){
      console.log("ERROR");
    } else {
      res.render("index", {blogs:blogs});
    }
  })
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
  res.render("new")
})

//CREATE ROUTE
app.post("/blogs", function(req, res){
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function(err, blog){
    if(err){
      console.log("Error creating new blogs post");
      res.render("new");
    } else {
        res.redirect("/blogs");
    }
  });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      console.log("Error at show route");
    } else {
      res.render("show", {blog: foundBlog});
    }
  });
});

//EDIT ROUTE
app.get("/blogs/:id/edit",function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      console.log("ERROR IN EDIT");
    } else{
        res.render("edit", {blog: foundBlog});
    }
  });
});

// UPDATE ROUTE

app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog){
    if(err){
      console.log("ERROR PERRO UPDATE ROUTE");
    }else{
      res.redirect("/blogs/" + req.params.id);
    }
  });
})

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
  Blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      console.log("DAAAMN ERROR IN DELETE ROUTE");
    } else {
      res.redirect("/blogs");
    }
  });
});

app.listen(3000, function(){
  console.log("Server for blog is running");
})
