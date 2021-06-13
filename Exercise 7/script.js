var list = document.getElementById("list");
var inp = document.getElementById("inp");
var add = document.getElementById("add");
var listElement = [];
var light = true;

add.onclick = function add()
{
    var div = document.createElement("div");
    var iconTimes = document.createElement("i");
    iconTimes.classList.add("fal", "fa-times-circle");
    
    iconTimes.onclick = function remove()
    {
       iconTimes.parentNode.remove();
    }
    
    var iconCheck = document.createElement("i");
    iconCheck.classList.add("fal", "fa-check-circle");
    iconCheck.onclick = function linethrough()
    {
        var parent = iconCheck.parentNode;
        parent.style.backgroundColor = "#8b4000";
        parent.childNodes[1].style.textDecoration = "line-through";
    }
    
    var span = document.createElement("span");
    span.innerHTML = inp.value;
   
    div.appendChild(iconTimes);
    div.appendChild(span);
    div.appendChild(iconCheck);

    if(light)
    {
            div.style.backgroundColor = "#c4732e";
            light = false;
    }
    else
    { 
            div.style.backgroundColor = "#f4a460";
            light = true;
    }
  
    list.appendChild(div);
    listElement[listElement.length] = div;
   
}


    /*iconCheck.onclick = function linethrough()
    {
        var parent = iconCheck.parentNode;
        parent.style.backgroundColor = "#c4732e";
        parent.childNodes[1].style.textDecoration = "line-through";
    }*/