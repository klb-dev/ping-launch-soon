const btn = document.getElementById('button');
const inputEl = document.getElementById('email');
const message = document.getElementById('message')

btn.addEventListener("click", function(){
  if(inputEl.value === ""){
    message.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else {
    ValidateEmail();
  }
  inputEl.value = "";
  console.log (message)
});

function ValidateEmail() {
  let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputEl.value.match(valid)){
    message.innerHTML = "Stay alert for our launch date";
  } else {
    message.innerHTML = "Please provide a valid email address";
  }
}
