const express = require("express");
const https = require("https")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){

  const query = req.body.cityName;
  const apikey = "f2d3ae08179594e7e3049ee5455910a4&units";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apikey + "&units=" +unit;
  https.get(url, function(response){
   console.log(response.statusCode);
   response.on("data", function(data){
   const weatherData = JSON.parse(data)
   const temp = weatherData.main.temp
   const weatherDiscription = weatherData.weather[0].description
   res.write("<h1>The Temperature in " + query +" is " + temp  + " Degrees Celcius. <h1>");
  res.write("<p>The wetaher is currently " + weatherData + "<p>");
   const icon = weatherData.weather[0].icon
   const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
  res.write("<img src="+ imageURL + ">")
   res.send()
 });
});
})

app.listen(3000, function(){
  console.log("server is running on port 3000.")
})
