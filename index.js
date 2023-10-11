const btn = document.getElementById('button');
const inputEl = document.getElementById('email');
const message = document.getElementById('message')

btn.addEventListener("click", function(){
  if(inputEl.value === " "){
    message.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if(inputEl.value === "@"){
    message.innerHTML = "Please provide a valid email address"
  } else {
    message.innerHTML = "Look for information of our launch date."
  }
  inputEl.value = "";
  console.log (message)
});
