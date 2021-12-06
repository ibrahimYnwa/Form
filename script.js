const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    checkInpust();
})

function checkInpust() {
   const usernameValue= username.value.trim()
   const emailValue= email.value.trim() 
   const passwordValue=password.value.trim() 
   const password2Value=password2.value.trim()

   if (username==="") {
       setErrorFor(username,"Username can not be blank")
   }
   else{
    setSuccessFor(username)
   }

   if (email==="") {
    setErrorFor(email,"Username can not be blank")
}
   else{
    setSuccessFor(username)
   }

}
function setErrorFor(input, message){
    const formControl=input.parentElement;
    const small = formControl.querrySelector("small") ;

    small.innerText =message ;

    formControl.className = "form-control error"
}
function setSuccessFor(input) {
    const formControl=input.parentElement;
    formControl.className = "form-control success"
}