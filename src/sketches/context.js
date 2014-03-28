function context(func){
	return function(){
		pushMatrix();
		pushStyle();

		func();

		popStyle();
		popMatrix();
	};
}

