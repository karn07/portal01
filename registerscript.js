var input = document.getElementById("Password");
var input2 = document.getElementById("CPassword");
var username = document.getElementById("Username");
var button = document.getElementsByClassName("submit")[0];

button.addEventListener("click",function()
{
  if( username.value == "" )
  {
      alert("Error: Username cannot be blank!");
  }
  re = /[0-9]/;
  if(!re.test(input.value))
  {
      alert("Error: password must contain at least one number (0-9)!");
  }
  re = /[a-z]/;
  if(!re.test(input.value))
  {
      alert("Error: password must contain at least one lower case !");
  }
  re = /[A-Z]/;
  if(!re.test(input.value))
  {
      alert("Error: password must contain at least one lower case!");
  }
  if( input.value.length < 8)
  {
      alert("Error: password must contain at least 8 characters!");
  }
  if( input.value != input2.value)
  {
      alert("Error: password and confirm password did not match !");
  }

})
