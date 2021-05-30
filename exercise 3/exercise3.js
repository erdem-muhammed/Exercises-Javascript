var nächste = document.getElementById("forward");
var letzte = document.getElementById("back");

function next()
{
    if(nächste)
    {
      document.getElementById("image1").style.opacity = "0";
      document.getElementById("image2").style.opacity = "1";
    }
}