'use strict'
/**
 * Thinking in Javascript before Typescript
 */
// Get all keys and input value from document
let buttons = document.querySelectorAll(".buttons");
let inputDisplay = document.querySelector("#input");
let isDecimal = false;
let operators = ["+", "-", "x", "÷"];

const calculator = (e) => {
    console.log(e.target.innerText);
    let btnVal = e.target.innerHTML;
    let inputVal = inputDisplay.innerHTML;
  
    // if C is pressed, erase what's on the screen
    if (btnVal === "C") {
      inputDisplay.innerHTML = "";
      isDecimal = false;
    } else if (btnVal === "=") {
      // calculate and display results
      let total = inputVal;
      // replace x and ÷ with * and / respectively
      total = total.replace(/x/g, "*").replace(/÷/g, "/");
  
      // check if the last character is an operator or a decimal then remove it
      let lastChar = total[total.length - 1];
      if (operators.indexOf(lastChar) > -1 || lastChar === ".") {
        total = total.replace(/.$/, "");
      }
  
      if (total) {
        inputDisplay.innerHTML = eval(total);
      }
      isDecimal = false;
    } else if (operators.indexOf(btnVal) > -1) {
      let lastChar = inputVal[inputVal.length - 1];
  
      if (inputVal != "" && operators.indexOf(lastChar) === -1) {
        // equation doesn't start except with a minus
        inputDisplay.innerHTML += btnVal;
      } else if (inputVal === "" && btnVal === "-") {
        inputDisplay.innerHTML += btnVal;
      }
  
      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        inputDisplay.innerHTML = inputVal.replace(/.$/, btnVal);
      }
  
      isDecimal = false;
    } else if (btnVal === ".") {
      //No more than one decimal in a number
      if (!isDecimal) {
        inputDisplay += btnVal;
        isDecimal = true;
      }
    } else {
      inputDisplay.innerHTML += btnVal;
    }
    e.preventDefault();
  };

buttons.forEach((btn) => btn.addEventListener("click", calculator));

