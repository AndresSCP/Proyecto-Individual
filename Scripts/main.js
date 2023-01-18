function validateForm() {
	var x = document.forms["Formulario"]["Usuario"].value;
	var y = document.forms["Formulario"]["password"].value;
	if (x == "") {
    	alert("Name must be filled out.");
    	return false;
	}
	else if (y.length < 8)
   	 {
    	alert("Password must be at least 8 characters long.");
    	return false;
}
}
function validacion(){
    alert("presione el boton");
}