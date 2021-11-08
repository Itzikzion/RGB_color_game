var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var audio = null;
var gameLevel = 0;
var userLevel = 0;
var isGameOn = false;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var chosenColor = buttonColours[randomNumber];
  gamePattern.push(chosenColor);
  updateMessage("Level " + (gameLevel + 1));
  animateElement("#" + chosenColor, "pressed", 250);
  playSound(chosenColor);
  userLevel = 0;
  userPattern = [];
  gameLevel++;
}

function playSound(fileName) {
  audio = new Audio('sounds/' + fileName + '.mp3');
  audio.play();
}

$(".btn").on("click", function(event) {
  if (isGameOn) {
    playSound(this.id);
    animateElement("#" + this.id, "pressed", 100);
    userPattern.push(this.id);
    checkAnswer();
  }
});

function checkAnswer() {
  if (userLevel <= gameLevel) {
    if (gamePattern[userLevel] === userPattern[userLevel]) {
      userLevel++;
      if (gamePattern.length === userPattern.length) {
        setTimeout(function() {
        nextSequence()
        }, 2000);
      }
    } else {
      updateMessage("Game over - press A Key to Start");
      animateElement("body", "game-over", 1000);
        playSound("wrong");
      isGameOn = false;
      gamePattern = [];
      gameLevel = 0;
    }
  }
}

$("body").on("keydown", function(event) {
  if (!isGameOn) {
    isGameOn = true;
    nextSequence();
  }
});

function updateMessage(text) {
  $("#level-title").html(text);
}

function animateElement(elementName, className, time) {
  $(elementName).addClass(className);
  setTimeout(function() {
    $(elementName).removeClass(className);
  }, time);
}
