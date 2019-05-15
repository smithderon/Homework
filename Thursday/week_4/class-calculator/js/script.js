"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    button = document.getElementById("buttons")
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons

// adding click handlers to the operation buttons

// on click of 'equal' button

// clearing the input on press of clear

var decimal= document.getElementById(".")
var zero = document.getElementById("0")
var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var four = document.getElementById("4")
var five = document.getElementById("5")
var six = document.getElementById("6")
var seven = document.getElementById("7")
var eight = document.getElementById("8")
var nine = document.getElementById("9")
var plus = document.getElementById("+")
var minus = document.getElementById("-")
var times = document.getElementById("x")
var divide = document.getElementById("/")



button.addEventListener("click",function(nani){
    switch(event.target.id){
        case "1":
        input.textContent += 1
        break
        case "2":
        input.textContent += 2
        break
        case "3":
        input.textContent += 3
        break
        case "4":
        input.textContent += 4
        break
        case "5":
        input.textContent += 5
        break
        case "6":
        input.textContent += 6
        break
        case "7":
        input.textContent += 7
        break
        case "8":
        input.textContent += 8
        break
        case "9":
        input.textContent += 9
        break
        case "0":
        input.textContent += 0
        break
        case ".":
        input.textContent += "."
        break
        case "+":
        input.textContent += "+"
        break
        case "x":
        input.textContent += "x"
        break
        case "/":
        input.textContent += "/"
        break
        default:
        console.log("It no work")
        break
    }
})