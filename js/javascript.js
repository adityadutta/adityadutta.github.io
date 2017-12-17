function validateForm() {
    var firstname = document.forms["form1"]["firstname"].value;
    if (firstname == "") {
        alert("First Name must be filled out");
        return false;
    }
    var lastname = document.forms["form1"]["lastname"].value;
    if (lastname == "") {
        alert("Last Name must be filled out");
        return false;
    }
}

function onSubmit(){
  if(validateForm == true){
    alert("Thank you for contacting!");
  }
  else{
    alert("Please complete the form!");
  }
}
