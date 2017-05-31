// Clicking a "SHOOT" button attempt to score against the opposing team.
(function() {
  window.onload = function(){
    var resetButton = document.querySelector("#reset");
    var numberOfResets = document.querySelector("#num-resets");
    var teamOneButton = document.querySelector("#teamone-shoot");
    var shotsTaken1 = document.querySelector("#teamone-numshots");
    var goalsTeamOne = document.querySelector("#teamone-numhits");
    var teamTwoButton = document.querySelector("#teamtwo-shoot");
    var shotsTaken2 = document.querySelector("#teamtwo-numshots");
    var goalsTeamTwo = document.querySelector("#teamtwo-numhits");
    var myAudio = new Audio("assets/sounds/Goal-horn-sound-effect.mp3");
    var myAudio2 = new Audio("assets/sounds/Crowd-booing-sound-effect.mp3")

// shots have a random chance of succeeding or failing
teamOneButton.addEventListener("click", function(){
      console.log("team one button clicked");

    var newShotsValue = parseInt(shotsTaken1.innerHTML) + 1;

      shotsTaken1.innerHTML = newShotsValue;

    var randomrange = 1000;
    var randomnumber = Math.floor((Math.random() * 1000) + 1);
    if (randomnumber % 2 == 0)
      { goalsTeamOne.innerHTML = parseInt(goalsTeamOne.innerHTML) + 1;
        myAudio.play();
      }


  })//closes teamoneButton

teamTwoButton.addEventListener("click", function(){
      console.log("team two button clicked");

    var newShotsValue = parseInt(shotsTaken2.innerHTML) + 1;
      shotsTaken2.innerHTML = newShotsValue;

    var randomrange = 1000;
    var randomnumber = Math.floor((Math.random() * 1000) + 1);
    if (randomnumber % 2 == 0)
      {goalsTeamTwo.innerHTML = parseInt(goalsTeamTwo.innerHTML) + 1;
        myAudio2.play();
      }
    })//closes teamTwoButton

resetButton.addEventListener("click",function(){
      console.log("reset button clicked");

      shotsTaken1.innerHTML = 0;
      goalsTeamOne.innerHTML = 0;
      shotsTaken2.innerHTML = 0;
      goalsTeamTwo.innerHTML = 0;

    var newResetsValue = parseInt(numberOfResets.innerHTML) + 1;
      numberOfResets.innerHTML = newResetsValue;

    })// closes the resetButton

  }
})();
