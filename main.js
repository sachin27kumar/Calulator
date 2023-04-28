const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

// arrey is made to store result
let calculation = [];
// accumlator do arthmatic calculatons
let accumlativeCalculation;

// function to perform the task
function calculate(button){
    const value = button.textContent;
    if(value == "CLEAR"){
        calculation = [];
        screenDisplay.textContent = "0";
    } 
    else if(value == "="){
        screenDisplay.textContent = eval(accumlativeCalculation);
        calculation = [];
        accumlativeCalculation ="";
    }
    else{
        calculation.push(value);
        accumlativeCalculation = calculation.join("");
        screenDisplay.textContent = accumlativeCalculation;
    }
}

// eventlistner added
buttons.forEach(button => button.addEventListener("click", () => calculate(button)));