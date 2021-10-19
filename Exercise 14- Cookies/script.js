const loginForm = document.getElementById("loginForm");
const profile = document.getElementById("userProfile");
const us = document.getElementById("userName");
const pw = document.getElementById("password");
const cart = document.getElementById("shoppingCart");
const checkLoggedin = document.getElementById("checkLoggedin");

const shoppingCart = [];

if(Cookies.get("Loggedin" == "1"))
{
    loginForm.style.display = "none";
    if(Cookies.get("cart"))
    {
        const list = JSON.parse(Cookies.get("cart"));
        for(p of list)
        {
            cart.push(p);
            cart.innerHTML += p.name + " - " + p.price + "<br>";
        }
    }
}
else
{
    profile.style.display = "none";
}
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

function add(product, price)
{
    shoppingCart.push({
        name: product,
        price
    });
    cart.innerHTML += product + " - " + price + "<br>";

    Cookies.set("cart", JSON.stringify(shoppingCart)); ////JSON.stringify for security
}