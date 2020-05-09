
var quiz = "Computer Components Quiz";
$("#nav-text").append(quiz);

var question = ['What is CPU speed measured in?','Which of these are non-volatile','Who is awesome?'];
var answers = ['GHz','SSD','Adam'];
var choices = [
  ['GHz','Ms','GB/s'],
  ['RAM','Cache','SSD'],
  ['Wrong answer','Adam','Wrong answer']
];
var qnum = 0;
$("#nav-q").html(qnum + " / "+question.length);

var images = [
  'https://i.imgur.com/wxzCZSr.jpg',
  'https://i.imgur.com/tf8VOVz.jpg',
  'https://i.imgur.com/FVr5UQm.png'
];

var right = 0;
var wrong = 0;

$("#start").click(function() {
  $("#starts").css("margin-top", "-100vh");
});

function answer(x,y){
  if(x == y){
    return "a"; 
  } else {
    return "w";
  }
}

for (var x = 1; x <= question.length;x++) {
  $("#main").append(''+
  '<div id="q'+x+'" class="screen">'+
  '<div class="question">'+
  '<div class="question-text">'+question[x-1]+'</div>'+
  '<div style="background: URL('+images[x-1]+'); background-size: 100%;" class="gif"></div>'+
  '<div class="question-answers">'+
  '<div class="button q'+x + answer(choices[x-1][0],answers[x-1])+'">'+choices[x-1][0]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][1],answers[x-1])+'">'+choices[x-1][1]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][2],answers[x-1])+'">'+choices[x-1][2]+'</div>'+
  '</div>'+
  '</div>'+
  '</div>');
}

for (let i = 1; i <= question.length; i++) {
  $(".q" + i + "a").click(function() {
    qnum++;
    $("#nav-q").html(qnum + " / "+question.length);
    $("#q" + i +"").css("background", "#00E640");
    right++;
    setTimeout(function() {
      $("#q" + i +"").css("margin-top", "-100vh");
    }, 500);
  });
  
  $(".q" + i + "w").click(function() {
    qnum++;
    $("#nav-q").html(qnum + " / "+question.length);
    $("#q" + i +"").css("background", "tomato");
    wrong++;
    setTimeout(function() {
      $("#q" + i +"").css("margin-top", "-100vh");
    }, 500);
  });
}

$("#q"+(question.length)+" .button").click(function(){
  $("#right").html(right);
  $("#wrong").html(wrong);
});
/*
const deckCards = ["turk.jpg", "turk.jpg", "almanya.jpg", "almanya.jpg","ispanya.jpg","ispanya.jpg", "ingiltere.jpg", "ingiltere.jpg", "italya.jpg", "italya.jpg", "fransa.jpg","fransa.jpg"];
const deck = document.querySelector(".deck");
let opened = [];
let matched = [];
const modal = document.getElementById("modal");
const playAgain = document.querySelector(".play-again-btn");
const movesCount = document.querySelector(".moves-counter");
let moves = 0;
const star = document.getElementById("star-rating").querySelectorAll(".star");
let starCount = 0;
const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 20;
let timeStart = false;
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

function startGame() {
	const shuffledDeck = shuffle(deckCards); 
	for (let i = 0; i < shuffledDeck.length; i++) {
		const liTag = document.createElement('LI');
		liTag.classList.add('card');
		const addImage = document.createElement("IMG");
		liTag.appendChild(addImage);
		addImage.setAttribute("src", "./assets/" + shuffledDeck[i] + "?raw=true");
		addImage.setAttribute("alt", "image of vault boy from fallout");
		deck.appendChild(liTag);
	}
}
startGame();
function removeCard() {
	while (deck.hasChildNodes()) {
		deck.removeChild(deck.firstChild);
	}
}
function timer() {
	time = setInterval(function() {
		
			if (seconds != 0) {
				seconds--;
				
			}else{
				seconds = 0;
			}
		timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
	}, 1000);
}
function stopTime() {
	clearInterval(time);
}

function movesCounter() {
	movesCount.innerHTML ++;
	moves ++;
}
function starRating() {

		star[2].firstElementChild.classList.remove("fa-star");
		starCount++;
		AddStats();
}
function compareTwo() {
	if (opened.length === 2) {
  		document.body.style.pointerEvents = "none";
  }
	if (opened.length === 2 && opened[0].src === opened[1].src) {
		starRating();
		match();
		
	} else if (opened.length === 2 && opened[0].src != opened[1].src) {
		noMatch();
		
	}
} 
function match() {
	setTimeout(function() {
		opened[0].parentElement.classList.add("match");
		opened[1].parentElement.classList.add("match");
		matched.push(...opened);
		document.body.style.pointerEvents = "auto";
		
		opened = [];
	}, 600);
	movesCounter();

}
function noMatch() {
	setTimeout(function() {
		opened[0].parentElement.classList.remove("flip");
		opened[1].parentElement.classList.remove("flip");
		document.body.style.pointerEvents = "auto";
		opened = [];
	}, 700);
	movesCounter();
	
}

function AddStats() {
	const stats = document.querySelector(".modal-content1");
	
		const statsElement = document.createElement("p");
		statsElement.classList.add("stats");
		stats.appendChild(statsElement);
	
	let p = stats.querySelectorAll("p.stats");
		
		p[0].innerHTML = "Yıldız: " + starCount +"/"+ deckCards.length;
}
function displayModal() {
const modalClose = document.getElementsByClassName("close")[0];
	modal.style.display= "block";
	modalClose.onclick = function() {
		modal.style.display = "none";
		
	};
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
	
}

function winGame() {
	if (matched.length === 12) {
		stopTime();
		
		displayModal();
	}
}
deck.addEventListener("click", function(evt) {
	AddStats();
	if (evt.target.nodeName === "LI") {
		console.log(evt.target.nodeName + " Was clicked");
		if (timeStart === false) {
			timeStart = true; 
			timer();
		}
		flipCard();
	}
	function flipCard() {
		evt.target.classList.add("flip");
		addToOpened();
		
	}
	function addToOpened() {
		if (opened.length === 0 || opened.length === 1) {
			opened.push(evt.target.firstElementChild);
			
		}
		compareTwo();
	}
}); */
