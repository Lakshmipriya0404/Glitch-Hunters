var answers = $("input:not(:disabled)"); //retrieve all able inputs

//array of ids
var myarr = [
  "myId02",
  "myId03",
  "myId04",
  "myId05",
  "myId06",
  "myId09",
  "myId12",
  "myId16",
  "myId19",
  "myId21",
  "myId23",
  "myId26",
  "myId28",
  "myId30",
  "myId33",
  "myId35",
  "myId37",
  "myId42",
  "myId43",
  "myId44",
  "myId45",
  "myId46",
  "myId47",
  "myId48",
  "myId49",
  "myId51",
  "myId56",
  "myId63"
];

//array of answers
//var arr = ["c", "l", "o", "v", "e", "p", "a", "s", "a", "y", "t", "w"];

var arr = ["f", "l", "o", "a", "t", "u", "r", "n", "r", "b", "c", "a","o", "t", "y", "o", "i", "l", "d", "o", "w", "h", "i", "l","e", "n", "a", "n"];

//timing
var seconds = 0;
var timer = setInterval(function(){
  seconds++;
  $("#timer").text(seconds);
}, 1000)
var complete = 0; //to check if the answers is complete

//check inputs
answers.keyup(function(e) {
  var temp = e.target.id;
  var myIndex = myarr.indexOf(temp); //check for index of ids
  var answer = arr[myIndex]; //check for answer
  var myInput = this.value.toLowerCase(); //check for user input
  complete++; //after every input increase the amount of rights _0
  if (myInput == answer) {
    this.style.backgroundColor = "#03C988";
    $(this).attr("disabled", "true");
  } else {
    this.style.backgroundColor = "red";
    complete--; //if wrong, it cancels _0
  }
  if (complete == 28) {
    clearInterval(timer);
    $("#timer").text("Puzzle completed in " + seconds);
    
    alert("Hurray!!!\nChallenge complete");
    //there are 12 answers, if all are right!!!
  }
});
$("button").click(function(){
  seconds += 60;
})