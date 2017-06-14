function Decision(c1, c2, g, w){
	this.c1 = c1;
	this.c2 = c2;
	this.g = g;
	this.x = 1600/2;
	this.y = 1000/2;
	this.h = 200;
	this.w = w;
}

var turn = 0;
var questions = ["Go to school?", "Get a job?", "Follow in employer's footsteps?", "You are not making enough money, ask for a raise?"]

Decision.prototype.show = function(){
	stroke(255);
	noFill();
	rectMode(CENTER);
	rect(this.x, this.y, this.w, this.h);
	textAlign(CENTER, CENTER);
	textSize(24);
	noStroke();
	fill(255);
	text(questions[turn], this.x, this.y);
 
	if(this.c1){
		text("YES", this.x - (this.w/2) - 50, this.y);
	}
 
	if(this.c2){
		text("NO", this.x + (this.w/2) + 50, this.y);
	}
}
 
function setup(){
	createCanvas(1600, 1000);
	aaImage = loadImage("http://i.imgur.com/1dSGN4Z.png")
}
 
var aaArr = []
aaArr[0] = new Decision(true, false, 1, 900);
 
function draw(){
	background(51);
	fill(255);
	noStroke();
	aaArr[turn].show();
	showChar();
}
 
var aaChoices = [[false, true, 900], [false, true, 900], [true, true, 900]];
 
function mouseClicked(){
	if(aaArr[turn].c1){
		if(mouseX > aaArr[turn].x - (aaArr[turn].w/2) - 100 && mouseX < aaArr[turn].x - (aaArr[turn].w/2)){
			aaArr.push(new Decision(aaChoices[turn][0], aaChoices[turn][1], turn+1, aaChoices[turn][2]));
			turn++;
		}
	}else{
		if(mouseX < aaArr[turn].x + (aaArr[turn].w/2) + 100 && mouseX > aaArr[turn].x - (aaArr[turn].w/2)){
			aaArr.push(new Decision(aaChoices[turn][0], aaChoices[turn][1], turn+1, aaChoices[turn][2]));
			turn++;
		}
	}
}

function showChar(){
	imageMode(CENTER);

	if(turn <= 4){
		image(aaImage, aaArr[turn].x, 250);
	}
}
