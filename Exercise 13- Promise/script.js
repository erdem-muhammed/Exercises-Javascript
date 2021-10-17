

let a = new Promise(function(success, error)
{
    let x = 10;

    if(x == 10)
        success(x);
    else
        error();
})
.then(function(data)
{
    return data;
})
.then(function(data)
{
    return data * 2;
    console.log(data);
})
.then(function(data)
{
    console.log(data); //result
});


fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then(function(data)
{
    return data.json();
})
.then(function(data)
{
    console.log(data);
});