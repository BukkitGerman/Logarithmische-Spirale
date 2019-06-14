class Branch{
	constructor(begin, end){
		this.begin = begin;
		this.end = end;
		this.finished = false;
	}

	show = function(){
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	branch = function(rl){
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.rotate(PI / 4);
		dir.mult(1.09);					
		var newEndPoint = p5.Vector.add(this.end, dir);
		var branch = new Branch(this.end, newEndPoint);
		return branch;
	}
}