var last = null; //burada baska bir seye de esit olabilir null olmak zorunda degil mesela 10 olabilir,buna göre if last null yerine yazilan degere esit olmak zorunda, yani if((last != 10) gibi
var searchBox = document.getElementById("searchBox");

var isActive = false;

function selected(el)
{
    console.log(el)
    if(el.classList.contains("active") == false)
    {
        el.classList.add("active");
          if(last != null)
        {
              last.classList.remove("active");
        }

         last = el;
    }

    const isSearchClassExist = el.classList.contains("search")
    if(isSearchClassExist)
    {
        isActive = !isActive;
    }
    if(isActive)
    {
        searchBox.style.opacity = "0";
    }
    else 
    {
        searchBox.style.opacity = "1";
    }
}

