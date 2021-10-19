
const loginForm = document.getElementById("loginForm");
const profile = document.getElementById("userProfile");
const us = document.getElementById("userName");
const pw = document.getElementById("password");
const cart = document.getElementById("shoppingCart");
const checkLoggedin = document.getElementById("checkLoggedin");
function login()
{
    if(us.value == "admin" && pw.value == "123456")
    {
        if(checkLoggedin.checked)
        {
            let date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            Cookies.set("Loggedin", 1, { expires: date });
        }
        else
        {
            Cookies.set("Loggedin", 1);
        }
        profile.style.display = "block";
        loginForm.style.display = "none";
    }
}