const inputSlider = document.querySelector("[data-lenghtSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]"); 
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


let password = "";
let passwordLength = 10;
let checkCount = 1;
//Set strength color to grey

