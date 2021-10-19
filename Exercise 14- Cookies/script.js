const loginForm = document.getElementById("loginForm");
const profile = document.getElementById("userProfile");
const us = document.getElementById("userName");
const pw = document.getElementById("password");

function login()
{
    if(us.value == "admin" && pw.value == "123456")
    {
        profile.style.display = "block";
        loginForm.style.display = "none";
    }
}