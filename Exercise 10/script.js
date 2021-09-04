const number = document.getElementById("number");
const message = document.getElementById("message");

function update()
{
    let count = message.value.length;
    number.innerHTML = count + " / 100";

    if(count == 100)
    {
        number.style.color = "rgb(255, 0, 0)";
    }
    else if(count >= 80)
    {
        number.style.color = "#3d7dfc";
    }
    else if(count >= 60)
    {
        number.style.color = "#3d7dfc";
    }
    else
    {
        number.style.color = "black";
    }
}