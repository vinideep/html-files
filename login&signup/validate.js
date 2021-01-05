// validation process

let username = document.getElementById("username");
let password = document.getElementById("password");
let login_btn = document.querySelector(".login-btn")

function validate(){
let user = localStorage.getItem("username");
let pass = localStorage.getItem("password");
    if(username.value===""){
        username.nextElementSibling.innerHTML="please enter username*";
        username.nextElementSibling.className= "validation";
        username.focus();
        return false;
    } else if(username.value !== user){
        username.nextElementSibling.innerHTML="please enter <strong>valid</strong> username*";
        username.nextElementSibling.className= "validation";
        username.focus();
        return false;
    }else{
        password.focus();
    }
    if(password.value===""){
        password.nextElementSibling.innerHTML="please enter password*";
        username.nextElementSibling.className= "validation";
        return false;
    }else if(password.value !==pass){
        password.nextElementSibling.innerHTML="please enter <strong>Correct</strong> password*";
        username.nextElementSibling.className= "validation";
        return false;
    }
}