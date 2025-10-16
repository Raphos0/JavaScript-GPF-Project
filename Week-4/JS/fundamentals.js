/*commen xdx*/

//init
function initialise() 
{
    document.getElementById("printHere").innerHTML = "this works";
    window.alert("Don't give up, Skeleton!");


    let x = "20";
    let y = "69";

    document.getElementById("dataTypes").innerHTML = parseInt(x) + parseInt(y);

    //boolean and conditionals
    if(x != y){document.getElementById("booleans").innerHTML = "deepest lore" + x + "!+" + y;}

    //arrays
    an_array = ["item1", "item2", "item3"]
    document.getElementById("arrays").innerHTML = an_array[0] + " | length: " + an_array.length;

    //for loop
    let text = "number: "
    for(i=0; i<5; i++)
    {text += i + ", ";}
    document.getElementById("loops").innerHTML = text;

    //function
    document.getElementById("functions").innerHTML = forbiddenOne(x, y);
}


//functions
function dateTime() 
{
    document.getElementById("dateTime").innerHTML = Date();
}

function forbiddenOne(p1, p2)
{
    return p1 * p2;
}


