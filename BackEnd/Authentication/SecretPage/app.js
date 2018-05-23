var express               = require("express"),
    mongoose              = require ("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")
    User                  = require("./models/user");

mongoose.connect("mongodb://localhost/SecretPageApp");

var app = express();
app.set("view engine", "ejs");
app.use(require("express-session")({
  secret: "Rusty a mi no se me hace guapo",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}))
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//+=============================================
//Routes
//+=============================================
//  REGISTER FORM
app.get("/register", function(req, res){
  res.render("register");
});

//HANDLING USER SIGN UP
app.post("/register", function(req, res){
  User.register(new User({username: req.body.username}), req.body.password, function (err, user){
      if (err){
        console.log(err);
        res.render("register");
      } else {
        passport.authenticate("local")(req, res, function(){
          res.redirect("/secret");
        });
      }
  });
});

//  HOME PAGE ROUTE
app.get("/", function (req, res){
  res.render("home");
});

//SECRET PAGE ROUTE
app.get("/secret", isLoggedIn, function(req, res){
  res.render("secret");
});

//RENDER LOGIN PAGE
app.get("/login", function(req, res){
  res.render("login");
});
//LOGIN POST
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}) ,function(req, res){
});

//LOGOUT ROUTE
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

//SERVER INITIALIZATION
app.listen(3000, function(){
  console.log("server initialized");
});

//FUCNTION TO CHECK login
function isLoggedIn (req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    res.redirect("/login");
  }
}
