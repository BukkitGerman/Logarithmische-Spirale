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
		for(var c = 0; c < 20; c++){


			for(var i = pvarray.length-1; i >= 0 ; i--){
				pvarray.push(pvarray[i].branch());
				pvarray.push(pvarray[i].branch());
				console.log(pvarray[i]);	
			}
		}
}


function draw(){
	background(51);

	translate(width/2, height/2);

	stroke(255);

	noFill();
	beginShape();
	for(var i = 0; i < pvarray.length; i++){
		pvarray[i].show();
	}
	
	endShape();
	



}