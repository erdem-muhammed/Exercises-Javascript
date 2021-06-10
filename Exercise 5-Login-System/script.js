var signinsForm = document.getElementById("signin-form");
var registrationsForm = document.getElementById("registration-form");
var spanSignin = document.getElementById("spanSignin");
var spanRegister = document.getElementById("spanRegister");
var info = document.getElementById("info");
var reg_mail;
var reg_pass;

function register()
{
    reg_mail = document.getElementById("reg_e").value;
    reg_pass = document.getElementById("reg_p").value;
    info.style.backgroundColor = "#32e347";
    info.innerHTML = "Successfully registered";
    signinform();
}


function login()
{
    var log_mail = document.getElementById("log_e").value;
    var log_pass = document.getElementById("log_p").value;
       if (log_mail == reg_mail)
       {
           if(log_pass == reg_pass)
           {
               info.style.backgroundColor = "#32e347";
               info.innerHTML = "Successfully signed in";
           }
       }
       else
       {
           info.style.backgroundColor = "#ff2b2b";
           info.innerHTML = "Email or Password wrong";
       }
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