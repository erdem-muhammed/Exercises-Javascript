

let a = new Promise(function(success, error)
{
    let x = 10;

    if(x == 10)
        success(x);
    else
        error();
    
})