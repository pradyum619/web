

var gamePattern = [];
var userClickPattern = [];
var level = 0;
var colors = ["red","yellow","blue","green"];
var started = false;

$(document).keypress(function () {
	if(!started){
		$("#level-title").text("Level " + level);
    	nextSequence();
    	started = true;
	}	
});

//random number  0123
function nextSequence(){

	var random = Math.floor(Math.random() * 4);	
	var randomChosenColor = colors[random];
	gamePattern.push(randomChosenColor);

	$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);
	level++;
	$("h1").text("level "+level);
}

$("div.btn").click(function () {
	var userChosenColor = $(this).attr("id");
	userClickPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);

	checkAnswer(userClickPattern.length-1);
});

function startOver(){
	level = 0;
	gamePattern = [];
	userClickPattern = [];
	started = false;
}

function checkAnswer(currentLevel) {
	// console.log(currentLevel);
	if (userClickPattern[currentLevel] == gamePattern[currentLevel]) {
		// console.log("success");
	} else {
		// console.log("failed");
		var audio = new Audio("sounds/wrong.mp3");
		audio.play();
		$("body").addClass("game-over");
		setTimeout(() => {
			$("body").removeClass("game-over");
			startOver();
		}, 300);
		$("h1").text("Game Over. Press any key to restart.");
		
	}
	
	if ((currentLevel+1) == level) {
		setTimeout(() => {
			nextSequence();
			userClickPattern = [];
		}, 1000);
	}
}

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(color) {
	$("div."+color).addClass("pressed");
	setTimeout(() => {
		$("div."+color).removeClass("pressed");
	}, 100);
	
}