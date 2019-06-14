var pvarray = [];
var root;
function setup(){
    createCanvas(600, 600);
    
	root = new Branch(createVector(0, 0) ,createVector(0, 5));

	pvarray[0] = root;

    var t = 6;
    var r = 2;
    for(var i = 0; i < 800; i++){
   		
   	}


}

function mousePressed(){

			for(var i = pvarray.length-1; i < 5000; i++){
				pvarray.push(pvarray[i].branch());
				console.log(pvarray.length);
				}	
}


function draw(){
	background(51);

	translate(width/2+(width/20), height/2);

	stroke(255);
		noFill();
	beginShape();
	for(var i = 0; i < pvarray.length; i++){
		//pvarray[i].show();
		vertex(pvarray[i].begin.x, pvarray[i].begin.y)
		vertex(pvarray[i].end.x, pvarray[i].end.y)
	}
	
	endShape();
	



}