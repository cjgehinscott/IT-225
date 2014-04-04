function convertEU(){
	var x = document.getElementById("conversionEU");
	var eu = x.euro.value;
	if(isNaN(eu)){
		alert("Ooops, Please enter a number");
		}else{
		    var total = eu * 1.37; //Using a euro to dollar conversion ratio of 1.37
			alert(eu + " Euros = " + "$" + total + " US Dollars");
	}
}

function convertAussie(){
	var x = document.getElementById("conversionAussie");
	var au = x.aussie.value;
	if(isNaN(au)){
		alert("Oooops, Please enter a number");
		}else{
			var total = au * .90; //Using a Australian Dollar to US Dollar conversion ration of .90
			alert(au + " Australian Dollars = " + "$" + total + " US Dollars");
	}
}