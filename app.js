const form = document.getElementById("form"),
  firstName = document.getElementById("first-name"),
  lastName = document.getElementById("last-name"),
  email = document.getElementById("email"),
  password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstnameValue = firstName.value.trim(),
    lastnameValue = lastName.value.trim(),
    emailValue = email.value.trim(),
    passwordValue = password.value.trim();

  if (firstnameValue === "") {
    setError(firstName, "First name cannot be empty");
  } else {
    setSuccess(firstName);
  }
  if (lastnameValue === "") {
    setError(lastName, "Last name cannot be empty");
  } else {
    setSuccess(lastName);
  }
  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else {
    setSuccess(password);
  }
  if (emailValue === "") {
    setError(email, "email cannot be empty");
  } else if(!emailValidation(emailValue)){
    setError(email ,'Looks like this is not an email' )
  }else{
    setSuccess(email);
  }
}
 function emailValidation(email){
   const emailTest =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return emailTest.test(email);
 }
function setError(input, message) {
  const formElement = input.parentElement,
    span = formElement.querySelector("span");
  span.innerText = message;
  formElement.className = "alert-error";
}
function setSuccess(input) {
  const formElement = input.parentElement;
  formElement.className = "alert-success";
}


