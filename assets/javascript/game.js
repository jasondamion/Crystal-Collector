//Variables for Counting
var countWin = 0;
var countLoss = 0;
var totalScore = 0;
var ran;
var crysNumR;
var crysNumB;
var crysNumY;
var crysNumG;

//Saying to start when a user clicks something
document.onkeyup = function(event) {


 //Setting the random numbers   
ran = Math.floor(Math.random() * 120) + 19;
crysNumR = Math.floor(Math.random() * 12) + 1;
crysNumB = Math.floor(Math.random() * 12) + 1;
crysNumY = Math.floor(Math.random() * 12) + 1;
crysNumG = Math.floor(Math.random() * 12) + 1;

function reset(){
    ran = Math.floor(Math.random() * 120) + 19;
    crysNumR = Math.floor(Math.random() * 12) + 1;
    crysNumB = Math.floor(Math.random() * 12) + 1;
    crysNumY = Math.floor(Math.random() * 12) + 1;
    crysNumG = Math.floor(Math.random() * 12) + 1;
    totalScore = 0;
    $("#random").text(ran);
    $("#totalScore").text(totalScore);
    $("#Wins").text(countWin);
    $("#Losses").text(countLoss);
}

//Increases total score and put the 
$( "#Red-Crystal" ).click(function() {
    totalScore = totalScore + crysNumR;
    console.log(crysNumR);
    console.log("totalscore: " + totalScore)
    $("#totalScore").text(totalScore);
    if(totalScore === ran){
        countWin++;
        $("#Wins").text(countWin);
    }
    if(totalScore > ran){
        countLoss++;
      $("#Losses").text(countLoss);
    }
});

$( "#Blue-Crystal" ).click(function() {
    totalScore = totalScore + crysNumB;
    console.log(crysNumB);
    console.log("totalscore: " + totalScore)
    $("#totalScore").text(totalScore);
    if(totalScore === ran){
        countWin++;
        $("#Wins").text(countWin);
    }
    if(totalScore > ran){
        countLoss++;
      $("#Losses").text(countLoss);
    }
  });

  $( "#Yellow-Crystal" ).click(function() {
    totalScore = totalScore + crysNumY;
    console.log(crysNumY)
    console.log("totalscore: " + totalScore)
    $("#totalScore").text(totalScore);

    if(totalScore === ran){
        reset();
        countWin++;
        $("#Wins").text(countWin);
    
    }
    if(totalScore > ran){
        reset();
        countLoss++;
      $("#Losses").text(countLoss);
    }
});

$( "#Green-Crystal" ).click(function() {
    totalScore = totalScore + crysNumG;
    console.log(crysNumG)
    console.log("totalscore: " + totalScore)
    $("#totalScore").text(totalScore);
    if(totalScore === ran){
        reset();
        countWin++;
        $("#Wins").text(countWin);
      
    }
    if(totalScore > ran){
        reset();
        countLoss++;
      $("#Losses").text(countLoss);
      
    }
});

if(totalScore === ran){
  reset(); 
   countWin++;
   totalScore = 0;

}
if(totalScore > ran){
    reset();
    countLoss++;
    totalScore = 0;

}
$("#random").text(ran);
$("#totalScore").text(totalScore);
$("#Wins").text(countWin);
$("#Losses").text(countLoss);


}