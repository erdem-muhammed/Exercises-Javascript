var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");


var slide = 1;

function next()
{
  slide++;   
  
  
    if(slide == 2)
    {
      image1.style.opacity = "0";
      image2.style.opacity = "100%";

      text1.style.opacity = "0";
      text2.style.opacity = "100%";
    }
    else if(slide == 3)
    {
      image2.style.opacity = "0";
      image3.style.opacity = "100%";

      text2.style.opacity = "0";
      text3.style.opacity = "100%";
    }
    else
    {
      image3.style.opacity = "0";
      image1.style.opacity = "100%";

      text3.style.opacity = "0";
      text1.style.opacity = "100%";
      slide = 1;
    }
 
}

function prev()
{
  slide--;

    if(slide == 0)
     {
       image1.style.opacity = "0";
       image3.style.opacity = "100%";

       text1.style.opacity = "0";
       text3.style.opacity = "100%";

       slide = 3;
     }
     else if(slide == 1)
     {
       image2.style.opacity = "0";
       image1.style.opacity = "100%";

       text2.style.opacity = "0";
       text1.style.opacity = "100%";
     }
     else if(slide == 2)
     {
       image3.style.opacity = "0";
       image2.style.opacity = "100%";

       text3.style.opacity = "0";
       text2.style.opacity = "100%";
     }
    
}
