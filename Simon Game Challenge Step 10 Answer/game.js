buttonColor = ["red", "blur", "green" , "yellow"];
gamesPattern = [];
userClickpattern=[];

$("btn").click(function(){
  
});
function nextSequence()
{
  var randomNumber = Math.floor(Math.random() * 4)+1;
  var randomChosenColor =buttonColor[randomNumber];
  gamesPattern.push(randomChosenColor);
}
