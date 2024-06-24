const express = require("express");
const app = express();

app.get("/",function(request,response){
response.send("<h1>hello my name is yash</h1>");
});
app.get("/about",function(req,res){
  res.send("<p>I,m from city called shahada village sulwada.</p> ")
});

app.get("/hobbies",function(req,res){
  res.send("<ul>my hobbie is to play cricket and watch cricket</ul> ")
});
app.listen(3000,function(){
  console.log("server started on port 3000");
});
