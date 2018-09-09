document.getElementById('btn-form').onclick = function(e){
	var firstName = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var feedback = document.getElementById('feedback').value;
	if(firstName !== "" && lastName !== "" && email !== "" && feedback !== "") {
			alert("Dear "+firstName+" .Your feedback has been successfully recorded.");
	} else {
		alert("Empty fields found.Please fill out the all the fields and then click submit");
	}
}

document.getElementById('stay1').onclick = function(e){
var d1 = document.getElementById("stay1");
d1.className += "ratetit";
}

document.getElementById('stay2').onclick = function(e){
var d2 = document.getElementById("stay2");
d2.className += "ratetit";
}

document.getElementById('stay3').onclick = function(e){
var d3 = document.getElementById("stay3");
d3.className += "ratetit";
}

document.getElementById('stay4').onclick = function(e){
var d4 = document.getElementById("stay4");
d4.className += "ratetit";
}

document.getElementById('stay4').onclick = function(e){
var d4 = document.getElementById("stay4");
d4.className += "ratetit";
}