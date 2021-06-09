var signinsForm = document.getElementById("signin-form");
var registrationsForm = document.getElementById("registration-form");
var spanSignin = document.getElementById("spanSignin");
var spanRegister = document.getElementById("spanRegister");

var reg_mail;
var reg_pass;

function register()
{

}


function login()
{
    var mail = document.getElementById("log_e").value;
    var pass = document-getElementById("log_p").value;
       if
}



function registrationform()
{
    spanRegister.style.borderBottom = "2px solid black";
    spanRegister.style.fontWeight = "bold";
    spanRegister.style.color = "#344d78";

    spanSignin.style.fontWeight = "light";
    spanSignin.style.color = "#cdced1";
    spanSignin.style.border = "none";

    signinsForm.style.display = "none";
    registrationsForm.style.display = "flex";
}
function signinform()
{
    spanSignin.style.borderBottom = "2px solid black";
    spanSignin.style.fontWeight = "bold";
    spanSignin.style.color = "#344d78";

    spanRegister.style.fontWeight = "light";
    spanRegister.style.color = "#cdced1";
    spanRegister.style.border = "none";

    registrationsForm.style.display = "none";
    signinsForm.style.display = "flex";
}