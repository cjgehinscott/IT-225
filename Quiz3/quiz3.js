var imageArray = ["image1.jpg","image2.jpg"];


function displayImage(){
	if(document.getElementById("image1").checked){
		document.getElementById("placeholder").src = imageArray[0];
	}else if(document.getElementById("image2").checked){
		document.getElementById("placeholder").src = imageArray[1];
	}
}