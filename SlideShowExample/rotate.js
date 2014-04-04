//rotate.js
var imageArray = new Array(5);
var imageCounter = 0;

for(i=0; i<imageArray.length; i++){
	imageArray[i] = "image" + (i+1) + ".jpg";
	}	

function startRotation(){
	document.getElementById('placeholder').src = imageArray[0];
	setInterval('rotate()', 2000);
}

function rotate(){
	var imageObject = document.getElementById("placeholder");
	imageObject.src = imageArray[imageCounter];
	++imageCounter;
	if(imageCounter == 4){ imageCounter == 0; }
}
	