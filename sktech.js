var pvarray = [];
var root;
function setup(){
    createCanvas(1000, 1000);
    
	root = new Branch(createVector(0, 0) ,createVector(0, 5));

	pvarray[0] = root;

    var t = 6;
    var r = 2;
    for(var i = 0; i < 800; i++){
   		
   	}


}

function mousePressed(){

			for(var i = pvarray.length-1; i < 300; i++){
				pvarray.push(pvarray[i].branch());
				console.log(pvarray.length);
				}	
}


function draw(){
	background(51);

	translate(width/2, height/2);

	stroke(255);
		noFill();
	beginShape(TRIANGLES);
	for(var i = 0; i < pvarray.length; i++){
		//pvarray[i].show();
		vertex(pvarray[i].begin.x, pvarray[i].begin.y)
		vertex(pvarray[i].end.x, pvarray[i].end.y)
	}
	
	endShape();
	



}