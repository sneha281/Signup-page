const loginForm = document.getElementById("login-form");
const  loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventlistener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username == "user" && password == "gupta" )
{
    alert("you have successfully logged in");
    Location.reload();
}else {
    loginErrorMsg.style.opacity = 1;
}
})
