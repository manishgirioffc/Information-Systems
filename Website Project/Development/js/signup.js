document.getElementById('btn-form').onclick = function(e){
	var firstName = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var username = document.getElementById('username').value;
	
	if(firstName !== "" && lastName !== "" && email !== "" && userName !== "" && password !== "" ) {
			alert("Dear "+firstName+" .Your feedback has been successfully recorded.");
	} else {
		alert("Empty fields found.Please fill out the all the fields and then click submit");
	}
}

