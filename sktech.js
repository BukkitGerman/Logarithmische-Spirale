var pvarray = [];

function setup(){
    createCanvas(1000, 1000);
    
    var t = 4;
    var r = 2;
    for(var i = 0; i < 800; i++){
   	var x, y;
   	x = (Math.exp(t)*Math.cos(t));
   	y = (Math.exp(t)*Math.sin(t));
   	pvarray.push(createVector(x,y));
   	t = t * 1.001;
   	if(t >= 360){
   		t = 2;
   	}	
   	print("R -> " + r);
   	print(pvarray[i].x);
	}

  

}

function draw(){
	background(51);

	translate(width/2, height/2);

	stroke(255);

	noFill();
	beginShape();
	for(var i = 0; i < pvarray.length; i++){
		//point(pvarray[i].x, pvarray[i].y, 5, 5);
		vertex(pvarray[i].x, pvarray[i].y);
	}
	
	endShape();
	



}