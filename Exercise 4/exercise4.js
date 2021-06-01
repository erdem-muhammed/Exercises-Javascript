
function calc()
{
    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);
    c = a + b;
    document.getElementById("total").innerHTML = c;
}


function blue()
{
    document.getElementById("box").style.backgroundColor = "blue";
}
function red()
{
    document.getElementById("box").style.backgroundColor = "red";
}