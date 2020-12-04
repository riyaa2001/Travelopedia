var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('public'));

var travelsites = [
	{name: "Taj Mahal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCa1IVGT3MfZsO4OgWro7lj2aaw-Mn68rJ5Q&usqp=CAU", details:"https://en.wikipedia.org/wiki/Taj_Mahal"},
	{name: "Golden Temple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKoHOj1Jkbbkel500wFE4MpF1W3bziGkMoQw&usqp=CAU", details: "https://en.wikipedia.org/wiki/Golden_Temple"},
	{name: "Gateway Of India", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR12usbHsPU__kR6qdfOOKZsl7csV6mIDi7OQ&usqp=CAU", details: "https://en.wikipedia.org/wiki/Gateway_of_India"},
	{name: "Clock Tower", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFKDqQJBT9rWKGRVcy28xPQlnxC4PJADFPXA&usqp=CAU", details: "https://en.wikipedia.org/wiki/Clock_Tower"},
	{name: "Haridwar", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Evening_view_of_Har-ki-Pauri%2C_Haridwar.jpg", details: "https://en.wikipedia.org/wiki/Haridwar"},
	{name: "Ladakh", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Shyok_river_ladahak.jpg/280px-Shyok_river_ladahak.jpg", details: "https://en.wikipedia.org/wiki/Ladakh"},
	{name: "Manali", image: "https://static.toiimg.com/photo/msid-72520428,width-96,height-65.cms", details: "https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh"},
    {name: "Udaipur", image: "https://static.toiimg.com/photo/48582448.cms", details: "https://en.wikipedia.org/wiki/Udaipur"},
    {name: "Kasauli", image: "https://www.hlimg.com/images/deals/360X230/deals_201907181563446243-0.jpg?w=480&dpr=2.6", details: "https://en.wikipedia.org/wiki/Kasauli"},
    {name: "Shimla", image: "https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/03/14/Pictures/saturday-himachal-pradesh-snowfall-hindustan-covered-shimla_edae9882-65ec-11ea-b9c4-de60b7b69f97.jpg", details: "https://en.wikipedia.org/wiki/Shimla"},	
    {name: "Dehradun", image: "https://blog.railyatri.in/wp-content/uploads/2018/12/Quick-trip-to-Dehradun.png", details: "https://en.wikipedia.org/wiki/Dehradun"},	
    {name: "Nainital", image: "https://www.india.com/wp-content/uploads/2016/08/Nainital7.jpg", details: "https://en.wikipedia.org/wiki/Nainital"},	
    {name: "Munnar", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Munnar_hillstation_kerala.jpg/1200px-Munnar_hillstation_kerala.jpg", details: "https://en.wikipedia.org/wiki/Munnar"},	
    {name: "Kapaleeshwar Temple", image: "https://www.tamilnadutourism.com/images/chennai/card/kapaleeshwarar-temple.jpg", details: "https://en.wikipedia.org/wiki/Kapaleeshwarar_Temple"}	
]

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/travelsites", function(req,res){
	res.render("travelsites", {travelsites:travelsites});
});

app.post("/travelsites", function(req,res){
	var name = req.body.name;
    var image = req.body.image;
    var details = req.body.details;
	var newCampground = {name: name, image: image, details: details};
	travelsites.push(newCampground);
	res.redirect("/travelsites");
});

app.get("/travelsites/new", function(req,res){
	res.render("new.ejs");
});

app.listen(3000, function(){
	console.log("The Travelopedia Server Has Started!");
});