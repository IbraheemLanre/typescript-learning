let buttons: HTMLElement | any = document.querySelectorAll(".buttons");
let inputDisplay: HTMLElement| any = document.querySelector("#input");
let isDecimal: boolean = false;
let operators: string[] = ["+", "-", "x", "÷"] ;


buttons.forEach((btn) => btn.addEventListener("click", calculator));

function calculator(e: any): void{
    console.log(e.target.innerText);
    let btnVal: string = e.target.innerHTML;
    let inputVal:string = inputDisplay.innerHTML;
  
    // if C is pressed, erase what's on the screen
    if (btnVal === "C") {
      inputDisplay.innerHTML = "";
      isDecimal = false;
    } else if (btnVal === "=") {
      // calculate and display results
      let total:string = inputVal;
      // replace x and ÷ with * and / respectively
      total = total.replace(/x/g, "*").replace(/÷/g, "/");
  
      // check if the last character is an operator or a decimal then remove it
      let lastChar:string = total[total.length - 1];
      if (operators.indexOf(lastChar) > -1 || lastChar === ".") {
        total = total.replace(/.$/, "");
      }
  
      if (total) {
        inputDisplay.innerHTML = eval(total);
      }
      isDecimal = false;
    } else if (operators.indexOf(btnVal) > -1) {
      let lastChar = inputVal[inputVal.length - 1];
  
      //add operator if input is not empty and there is no operator at the last
      if (inputVal != "" && operators.indexOf(lastChar) === -1) {
        inputDisplay.innerHTML += btnVal;
      } else if (inputVal === "" && btnVal === "-") {// allow minus if the string is empty
        inputDisplay.innerHTML += btnVal;
      }
  
      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {// replace the last operator (if exists) with the newly pressed operator
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
        //append any other key pressed
      inputDisplay.innerHTML += btnVal;
    }
    e.preventDefault();
  };



