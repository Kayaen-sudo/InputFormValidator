
function emptyField(myName,myStudentID,myEmail) { 

if (myName.value.length == 0 ) {
  alert("Please enter a Name in the first field");
  return false;
}
if (myStudentID.value.length == 0)  {
  alert("Please enter a Student ID in second field");
  return false;
}
if(myEmail.value.length == 0 ) {
   alert("Please enter an Email Address in third field");
   return false;

} 
 return checkName();
}



  function checkName() {
    var myName = document.getElementById("name");
    var pos = myName.value.search(/^[A-Z][a-z]+/);
    if (pos != 0) {
      alert("The name you entered (" + myName.value + 
            ") is not in the correct form. \n" +
            "The correct form is:" +
            "Abcdefg \n" +
            "Please go back and fix your name");
      return false;
    } else
      return true;
    
  }

  function checkID() {
    var myStudentID = document.getElementById("studentID");
    var pos = myStudentID.value.search(/^\d{9}$/);  
    if (pos != 0) {
      alert("The phone number you entered (" + myStudentID.value +
            ") is not in the correct form. \n" +
            "The correct form is: xxxxxxxxx \n" +
            "Please go back and fix the student number");
      return false;
    } else
      return true;
      

  }

  function checkEmail() {
    var myEmail = document.getElementById("email");
    var pos = myEmail.value.search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (pos != 0) {
      alert("The email you entered (" + myEmail.value +
            ") is not in the correct form. \n" +
            "The correct form is: xyz@abc.com \n" +
            "Please go back and fix your email");
      return false;
    } else
      return true;
  }
