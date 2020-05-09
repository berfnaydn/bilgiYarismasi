
const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 20;
let timeStart = false;
var x=1;
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

var quiz = "Bilgi Yarışması";
$("#nav-text").append(quiz);

var question = ['Uluslararası Emmy En İyi Erkek Oyuncu Ödülü Alan İlk Türk Oyuncu Kimdir?','Tanıtımdaki filmin yönetmeni kimdir?',' Yalnızca bilimkurgu türünde filmler izleyen biri, hangi filmi izlemiş olabilir?','Oscar ödüllerinin provası olarak anılan ödül töreninin adı nedir?'];
var answers = ['Haluk BİLGİNER','Can Ulkay', 'Azınlık Raporu','Altın Küre'];
var choices = [
['Haluk BİLGİNER','Aras Bulut İynemli'],
 ['Nisan Akman','Fatih Akın','Can Ulkay','Ezel Akay'],
  ['Azınlık Raporu','Forrest Gump','Schindlerin Listesi','Akıl Oyunları'],
  ['Altın Küre','Altın Ayı','Altın Palmiye','Altın Lale']
  
];
var qnum = 0;
$("#nav-q").html(qnum + " / "+question.length);

var images = [
 './assets/e.jpg','./assets/f.mp4'
];


var right = 0;
var wrong = 0;

$("#start").click(function() {
	timer();
  $("#starts").css("margin-top", "-100vh");
});

function answer(x,y){

  if(x == y){
   
    return "a"; 
	
  } else {
    return "w";
  }
}
if(x==1){
 $("#main").append(''+
  '<div id="q'+x+'" class="screen">'+
  '<div class="question">'+
  '<div class="question-text">'+question[x-1]+'</div>'+
  '<div style="background: URL('+images[x-1]+'); background-size: 100%;" class="gif"></div>'+
  '<div class="question-answers">'+
  '<div class="button q'+x + answer(choices[x-1][0],answers[x-1])+'">'+choices[x-1][0]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][1],answers[x-1])+'">'+choices[x-1][1]+'</div>'+
  
  
   '</div>'+
  '</div>'+
  '</div>');
}
	x+=1;
if(x==2){
 $("#main").append(''+
  '<div id="q'+x+'" class="screen">'+
  '<div class="question">'+
  '<div class="question-text">'+question[x-1]+'</div>'+
  '<video width="400" height="300" controls="controls"> <source src="./assets/f.mp4" type="video/mp4"> </video> '+
  '<div class="question-answers">'+
  '<div class="button q'+x + answer(choices[x-1][0],answers[x-1])+'">'+choices[x-1][0]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][1],answers[x-1])+'">'+choices[x-1][1]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][2],answers[x-1])+'">'+choices[x-1][2]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][3],answers[x-1])+'">'+choices[x-1][3]+'</div>'+
  
  
   '</div>'+
  '</div>'+
  '</div>');
}
	x+=1;

for (x=3 ; x <= question.length;x++) {
  
  $("#main").append(''+
  '<div id="q'+x+'" class="screen">'+
  '<div class="question">'+
  '<div class="question-text">'+question[x-1]+'</div>'+
  
  '<div style="background: URL('+images[x-1]+'); background-size: 100%;" class="gif"></div>'+
  '<div class="question-answers">'+
  '<div class="button q'+x + answer(choices[x-1][0],answers[x-1])+'">'+choices[x-1][0]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][1],answers[x-1])+'">'+choices[x-1][1]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][2],answers[x-1])+'">'+choices[x-1][2]+'</div>'+
  '<div class="button q'+x + answer(choices[x-1][3],answers[x-1])+'">'+choices[x-1][3]+'</div>'+
  
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
	seconds=20;
    setTimeout(function() {
      $("#q" + i +"").css("margin-top", "-100vh");
	  
    }, 500);
  });
  
  $(".q" + i + "w").click(function() {
   
    $("#nav-q").html(qnum + " / "+question.length);
    $("#q" + i +"").css("background", "tomato");
    wrong++;
	seconds=20;
    setTimeout(function() {
      $("#q" + i +"").css("margin-top", "-100vh");
    }, 500);
  });
}

$("#q"+(question.length)+" .button").click(function(){

  $("#right").html(right);
  $("#wrong").html(wrong);

 
});