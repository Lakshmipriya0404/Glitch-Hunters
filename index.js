var answers = $("input:not(:disabled)"); //retrieve all able inputs

let tagArr = document.getElementsByTagName("input");
      for (let i = 0; i < tagArr.length; i++) {
        tagArr[i].autocomplete = 'off';
      }

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
var ar=[];
var i=0;
//array of answers
//var arr = ["c", "l", "o", "v", "e", "p", "a", "s", "a", "y", "t", "w"];

var arr = ["f", "l", "o", "a", "t", "u", "r", "n", "r", "b", "c", "a","o", "t", "y", "o", "i", "l", "d", "o", "w", "h", "i", "l","e", "n", "a", "n"];

//timing
var seconds = 0;
var floatc=0;
var functionc=0;
var booleanc=0;
var dowhilec=0;
var arrayc=0;
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
    if(myInput=='f'&& myIndex==0){
     floatc++;
     functionc++;
    }
    if(myInput=='l'&& myIndex==1){
      floatc++;
     }
     if(myInput=='0'&& myIndex==2){
      floatc++;
     }
     if(myInput=='a'&& myIndex==3){
      floatc++;
      arrayc++;
     }
     if(myInput=='u'&& myIndex==5){
      functionc++;
     }
     if(myInput=='n'&& myIndex==7){
      functionc++;
     }
     if(myInput=='c'&& myIndex==10){
      functionc++;
     }
     if(myInput=='t'&& myIndex==13){
      functionc++;
     }
     if(myInput=='i'&& myIndex==16){
      functionc++;
     }
     if(myInput=='o'&& myIndex==19){
      functionc++;
      dowhilec++;
     }
     if(myInput=='r'&& myIndex==6){
      arrayc++;
     }
     if(myInput=='r'&& myIndex==8){
      arrayc++;
     }
     if(myInput=='a'&& myIndex==11){
      arrayc++;
     }
     if(myInput=='d'&& myIndex==18){
      dowhilec++;
     }
     if(myInput=='w'&& myIndex==20){
      dowhilec++;
     }
     if(myInput=='h'&& myIndex==21){
      dowhilec++;
     }
     if(myInput=='i'&& myIndex==22){
      dowhilec++;
     }
     if(myInput=='l'&& myIndex==23){
      if(booleanc==5 || booleanc==6)
       {
        const list=document.getElementById("myId67");
        list.removeChild(list.firstElementChild);
        var paragraph = document.createElement("P");
        paragraph.innerHTML = "O";
        list.appendChild(paragraph);
       }
      else
        dowhilec++;
     }
     if(myInput=='b'&& myIndex==9){
      booleanc++;
     }
     if(myInput=='o'&& myIndex==12){
      booleanc++;
     }
     if(myInput=='o'&& myIndex==15){
      booleanc++;
     }
     if(myInput=='l'&& myIndex==18){
      booleanc++;
     }
     if(myInput=='a'&& myIndex==26){
      booleanc++;
     }

    if(myInput=='t'&& myIndex==4 && floatc==3){
      const list=document.getElementById("myId65");
      list.removeChild(list.firstElementChild);
      var paragraph = document.createElement("P");
      paragraph.innerHTML = "A";
      list.appendChild(paragraph);
    }
    if(myInput=='n' && myIndex===25 && functionc==7)
      {
        const list=document.getElementById("myId64");
        list.removeChild(list.firstElementChild);
        var paragraph = document.createElement("P");
        paragraph.innerHTML = "C";
        list.appendChild(paragraph);
      }
    if(myInput=='y' && myIndex===14 && arrayc==4)
      {
        const list=document.getElementById("myId66");
        list.removeChild(list.firstElementChild);
        var paragraph = document.createElement("P");
        paragraph.innerHTML = "R";
        list.appendChild(paragraph);
      }
    if(myInput=='e' && myIndex===24 )
      {
        if(dowhilec==6){
          const list=document.getElementById("myId67");
        list.removeChild(list.firstElementChild);
        var paragraph = document.createElement("P");
        paragraph.innerHTML = "O";
        list.appendChild(paragraph);
        booleanc++;
        }
       else
        booleanc++;
      }
    if(myInput=='n' && myIndex===27 && booleanc==5 || booleanc== 6)
      {
        const list=document.getElementById("myId68");
        list.removeChild(list.firstElementChild);
        var paragraph = document.createElement("P");
        paragraph.innerHTML = "L";
        list.appendChild(paragraph);
      }
    $(this).attr("disabled", "true");
  } else {
    this.style.backgroundColor = "red";
    complete--; //if wrong, it cancels _0
  }
  if (complete == 28) {
    clearInterval(timer);
    $("#timer").text("Puzzle completed in " + seconds);
    
    alert("Hurray!!!\nChallenge complete");
    //there are 28 answers, if all are right!!!
  }
});
$("button").click(function(){
  seconds += 60;
})
