
var diceArray = [6]

//init
function initialise() 
{
    diceArray[0] = new Image(); diceArray[0].src = "assets/dice1.png";
    diceArray[1] = new Image(); diceArray[1].src = "assets/dice2.png";
    diceArray[2] = new Image(); diceArray[2].src = "assets/dice3.png";
    diceArray[3] = new Image(); diceArray[3].src = "assets/dice4.png";
    diceArray[4] = new Image(); diceArray[4].src = "assets/dice5.png";
    diceArray[5] = new Image(); diceArray[5].src = "assets/dice6.png";

    // ALERT
    document.getElementById("printHere").innerHTML = "this works";
    window.alert("Don't give up, Skeleton!");
}

//Task 12
function rollWithRndNum(imgElement)
{
    console.log(diceArray[1].src)
    let chosenDiceFace = Math.floor(Math.random() * 6);
    imgElement.src = diceArray[chosenDiceFace].src;
}

//Task 6
function totup(form)
{
    let total = 0;
    for (let i = 0; i < form.elements.entry.length; i++) 
    {
        total += parseFloat(form.elements.entry[i].value);
    }
    console.log(total)
    total = total * (1-(form.elements.discount.value/100))
    console.log(total)

    document.getElementById("total").innerHTML = "£" + total.toFixed(2)
}

//Task 7
function totup2(form)
{
    let total = 0;
    for (let i = 0; i < form.elements.entry.length; i++) 
    {
        total += parseFloat(form.elements.entry[i].value);
    }
    console.log(total)
    total = total * (1-(form.elements.discount.value/100))
    console.log(total)

    document.getElementById("total2").innerHTML = "£" + total.toFixed(2)
}


