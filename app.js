console.log("workin?")

// will be collected from html form
let billAmount = 0;
let numPeople = 0;
let tipAmount = 0;
let customTipAmount = 0;
// // html outputs 


const percentageButtons = document.querySelectorAll(".percentages");
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetValues);


document.querySelector("#bill").addEventListener("input", updateValue);
document.querySelector("#people").addEventListener("input", updateValue);
document.querySelector("input[id='custom']").addEventListener("input", resetPercentage, updateValue);

percentageButtons.forEach(btn => {
    btn.addEventListener('click', updateValue); 
 });
 

function updateValue(){

    if (isNaN(customTipAmount) || customTipAmount === 0) {
        billAmount = parseInt(document.querySelector("#bill").value);
        tipAmount = parseInt(document.querySelector("input[name='tip']:checked").value);
        customTipAmount = parseInt(document.querySelector("input[id='custom']").value);
        numPeople = parseInt(document.querySelector("#people").value);
        let finalBill = billAmount * (tipAmount / 100) + billAmount;
        let tipPerPerson = billAmount * (tipAmount / 100) / numPeople;
        let billPerPerson = finalBill / numPeople;
        document.querySelector(".tip-person").innerHTML = `$${tipPerPerson.toFixed(2)}`;
        document.querySelector(".total-person").innerHTML = `$${billPerPerson.toFixed(2)}`;    
    } else {
        billAmount = parseInt(document.querySelector("#bill").value);
        tipAmount = parseInt(document.querySelector("input[name='tip']:checked").value);
        customTipAmount = parseInt(document.querySelector("input[id='custom']").value);
        numPeople = parseInt(document.querySelector("#people").value);
        let finalBill = billAmount * (customTipAmount / 100) + billAmount;
        let tipPerPerson = billAmount * (customTipAmount / 100) / numPeople;
        let billPerPerson = finalBill / numPeople;
        document.querySelector(".tip-person").innerHTML = `$${tipPerPerson.toFixed(2)}`;
        document.querySelector(".total-person").innerHTML = `$${billPerPerson.toFixed(2)}`;    
    }

};

function resetValues() {
    document.querySelector("#bill").value = "";
    document.querySelector("#people").value = "";
    document.querySelector(".tip-person").innerHTML = "$0.00";
    document.querySelector(".total-person").innerHTML = "$0.00";
    resetPercentage();
}

function resetPercentage() {
    if (document.querySelector("input[name='tip']:checked").checked === true) {
        document.querySelector("input[name='tip']:checked").checked = false;
    }
    customTipAmount = parseInt(document.querySelector("input[id='custom']").value);
}

// known bugs: 
// 1- Calculator displays NaN when you start typing manually until all of the inputs are completed. (Probably should start calculating after every input is down)
// 2- You cannot select tip percentage with 1 click, it gets activated after the second one. (No idea why.)
// 3- Managed to reset checked property on set percentages when you manually input tip percentage but couldn't manage to capture and calculate the overall thing.