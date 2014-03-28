var Object3D = {

var geometry = {
	//shared by all renderers
	var vertices : [],
	var indices : Uint16Array(),
	var colors : [],
	var uv : []
}

var material = {
	texture: "",
	shader: {vertex: "", fragment: ""}
}

var transform = {
	//Shared by all renderers
	matrix: new Matrix4x4(),
	position: new Pvector(),
	scale: new Pvector(),
	rotation: new Pvector() //Should probbaly require something else
}

var GLData = {
	
	//here goes a colletion of blending mode, backface culling, etc.
}


}

