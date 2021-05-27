var box = document.getElementById("box");
var margin = 0;

var step1 = 0;
var step2 = 190;
var step3 = 400;
var step4 = 610;
var step5 = 800;

var step = 1;

function forward()
{
    step++;

    if(step == 2)
    {
      box.style.marginLeft = step2 + "px";
    }
    else if(step ==3)
    {
        box.style.marginLeft = step3 + "px";
    }
    else if(step == 4)
    {
        box.style.marginLeft = step4 + "px";
    }
    else if(step == 5)
    {
        box.style.marginLeft = step5 +"px";
    }
    else
    {
        step == 5;
    }
}

function back()
{
    step--

    if(step == 5)
    {
        box.style.marginLeft = step4 + "px";
    }
    else if(step == 4)
    {
        box.style.marginLeft = step4 + "px";
    }
    else if(step == 3)
    {
        box.style.marginLeft = step3 + "px";
    }
    else if(step == 2)
    {
        box.style.marginLeft = step2 +"px";
    }
    else if(step == 1)
    {
        box.style.marginLeft = step1 +"px";
    }
    else
    {
        step == 1;
    }
}