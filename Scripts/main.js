function validate()
{
  var inputs = new Array();
  inputs[0] = document.getElementById('Usuario').value;
  inputs[1] = document.getElementById('Email').value;
  inputs[2] = document.getElementById('Password').value;
  inputs[3] = document.getElementById('RPassword').value;
  
  var errors = new Array();
  errors[0] = "<span style='color:red'>Porfavor ingresa tu Usuario!</span>";
  errors[1] = "<span style='color:red'>Porfavor ingresa tu Email!</span>";
  errors[2] = "<span style='color:red'>Porfavor ingresa tu contraseña!</span>";
  errors[3] = "<span style='color:red'>Porfavor vuelve a ingresar tu contraseña!</span>";

  for (i in inputs)
  {
    var errMessage = errors[i];
    var div = divs[i];
    if (inputs[i] == "")
        document.getElementById(div).innerHTML = errMessage;
    else if (i==2)
    {
      var atpos=inputs[i].indexOf("@");
      var dotpos=inputs[i].lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
        document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
      else
        document.getElementById(div).innerHTML = "OK!";
    }
    else if (i==5)
    {
      var first = document.getElementById('password').value;
      var second = document.getElementById('confirm').value;
      if (second != first)
        document.getElementById('errConfirm').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
      else
           document.getElementById(div).innerHTML = "OK!";
    }
    else
        document.getElementById(div).innerHTML = "OK!";
   }
 }
    function finalValidate()
    {
      var count = 0;
      for(i=0;i<6;i++)
      {
        var div = divs[i];
        if(document.getElementById(div).innerHTML == "OK!")
        count = count + 1;
      }
      if(count == 6)
          document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
    }