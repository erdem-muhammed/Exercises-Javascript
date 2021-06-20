var  current = 0;
var forms = document.getElementsByClassName("forms")
var container = document.getElementById("container");
var allInputs = container.getElementsByTagName("input");


function nav(n)
{
    if(stepCheck(n))
       return;

    forms[current].getElementsByClassName.display = "none";
    current += n;
    forms[current].style.display = "flex";
    document.getElementById("step").innerHTML = "Step: " + current;

    buttonUpdate(n);
}

function stepCheck(z)
{
    if(current == forms.length-1 && z == 1) //at the last step and want to go further
    {
        submit();
        return true;
    }

    if(current == 0 && z == -1)  //at the first Step and want to go back
    {
        return true;
    }

    return false;  //NP

}

function buttonUpdate(n)
{
     if(current == 0)  //First Step
     {
        document.getElementById("before").style.opacity = "0";
     }
     else
     {
         document.getElementById("before").style.opacity = "1";
     }

     if(current == forms.length-1)  //Last Step
     {
         document.getElementById("next").innerHTML = "Submit";
     }
     else
     {
         document.getElementById("next").innerHTML = "Next";
     }
}
function submit()
{
    //Checnking whether all input fields was filled out!!
    for(var i = 0; i < allInputs.length; i++)
    {
        if(allInputs[i].value == "")
        {
            alert("All fields must be filled out!!")
            return;
        }
    }
    forms[current].style.display = "none";
    document.getElementById("step").style.display = "none";
    document.getElementById("before").style.display = "none";
    document.getElementById("next").style.display = "none";
    
    document.getElementById("submitted").style.display = "block";
}