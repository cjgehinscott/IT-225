function conversion(){
	var x = document.getElementById("myForm");
	var c = x.celsius.value;
	var f = c * 9/5 + 32;
	alert(f);
}