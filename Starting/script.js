
var zahl = Math.random()*100;
zahl = Math.floor(zahl);
//zahl = 15;
//var zahl = 15;

function raten()
{
    var input = document.getElementById("input");
    var span = document.getElementById("span");
    var eingegeben = parseInt(input.value);
    
    if(eingegeben == zahl)
    {
        span.innerHTML = "richtig!";
        span.style.color = "#02c729";
    }
    else if(eingegeben < zahl)
    {
        span.innerHTML = "zu wenig!";
    }
    else
    {
        span.innerHTML = "zu viel!";
    }
}
