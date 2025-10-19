let x = 0;
let count20 = 20;
let count15 = 15;
let total15 = 0;
let list = "";
function countingNum()
{
    x = 0;
    list = "";

    for (let i = 0; i < count20; i++) 
    {
        x++;
        
        if (i != 19)
        {list = list + parseInt(x) + ", ";}
        else
        {list = list + parseInt(x);}

        console.log(list);
        document.getElementById("counting20").innerHTML = list;
    }
}

function sumOfNum()
{
    x = 0;
    list = "";

    for (let i = 0; i < count15; i++) 
    {
        x++;
        total15 += x;
        
        if (i != count15 - 1)
        {list = list + parseInt(x) + " + ";}
        else
        {list = list + parseInt(x);}

        console.log(list);
        console.log(total15);
        document.getElementById("sum15").innerHTML = list;
        document.getElementById("total15").innerHTML = total15;
    }
}