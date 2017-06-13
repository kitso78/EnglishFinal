function Decision(c1, c2, g){
	this.c1 = c1;
	this.c2 = c2;
	this.g = g;
	this.x = 1600/(this.g + 1);
	this.y = this.g*70;
}
 
Decision.prototype.show = function(){
	ellipse(this.x, this.y, 50, 50);
	textAlign(CENTER, CENTER);
 
	if(this.c1){
		text("YES", this.x - 50, this.y);
	}
 
	if(this.c2){
		text("NO", this.x + 50, this.y);
	}
}
 
function setup(){
	createCanvas(1600, 1600);
}
 
var aaArr = []
aaArr[0] = new Decision(true, false, 1);
 
function draw(){
	background(51);
	fill(255);
	noStroke();
	aaArr[turn].show();
}
 
var turn = 0;
var choices = [[true, false], [false, true], [true, true]];
 
function mouseClicked(){
	if(aaArr[turn].c1){
		if(mouseX > aaArr[turn].x - 50 && mouseX < aaArr[turn].x){
			aaArr.push(new Decision(choices[turn][0], choices[turn][1], turn+1));
			turn++;
		}
	}else{
		if(mouseX < aaArr[turn].x + 50 && mouseX > aaArr[turn].x){
			aaArr.push(new Decision(choices[turn][0], choices[turn][1], turn+1));
			turn++;
		}
	}
}
 
