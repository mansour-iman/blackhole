var async= require("myasync-imansour");
var request= require("./libs/request.js");

var config = require("./config.json");

/*
var images=[
    {url: "http://static4.businessinsider.com/image/526eb9766bb3f7cd56e65a1d/the-most-beautiful-places-in-the-world-pictur "},
    {url: "http://www.planwallpaper.com/static/images/Free-Wallpaper-Nature-scenes.jpg "},
    {url: "http://www.planwallpaper.com/static/images/Beauty-of-nature-random-4884759-1280-8080_nqwrrog.jpg "}
];*/

async.map(config.images, request , function (err, results){
    if(err) console.error(err);
    var totalSize =0;
    for (var i=0; i<results.length;i++){
	totalSize += results[i].length;
    }
    console.log("All download ended, result:", totalSize);
});

