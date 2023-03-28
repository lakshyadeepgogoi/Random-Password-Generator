const inputSlider = document.querySelector("[data-lenghtSlider]");
const lengthDisplay = document.querySelector("[data-lenghtNumber]"); 
const passwordDisplay = document.querySelector("[data-passwordDisplay]")
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]")
const symbols = '~`!@#$%^&*()_-=+{}[]|\:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();
//Set strength color to grey


//Set passwordLength
function handleSlider(){
    inputSlider.value= passwordLength;
    lengthDisplay.innerText = passwordLength;
    //anything Else

}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //Shadow
}

function getRndInteger(min,max){
    return Math.floor(Math.random() = (max - min)) + min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return string.fromCharCode( getRndInteger(97,123));

}

function generateUpperCase(){
    return string.fromCharCode( getRndInteger(65,90));

}
function generateSymbol(){
    const random = getRndInteger(0, symbols.length);
    return symbols.charAt(random);

}