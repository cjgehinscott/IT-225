function processForm()
{
	var formObj = document.getElementById("myForm");
	var firstName = formObj.firstName.value;
	var lastName = formObj.lastName.value;
	var email = formObj.userEmail.value;
	var phone = formObj.phone.value;
	var checkbx = formObj.check1.checked;
	var day = formObj.day.options[formObj.day.options.selectedIndex].text;
	alert(firstName + " " + lastName + " " + "\n" + email + "\n" + phone + "\nCheck Box checked: " + checkbx
		+ "\nDay Selected: " + day);
	if(isNaN(phone) && isNaN(lastName)){
		alert("Both values are NOT numbers");
	}else{
		alert("Both values ARE numbers");
	}	
}
