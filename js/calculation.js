var firstNumber = "";
var secondNumber = "";
var operator = "";

//###################### Numbers from 0 to 9 ##########################//
function zero(){
	document.getElementById("answer").innerHTML += 0;
}

function one(){
        document.getElementById("answer").innerHTML += 1;
}

function two(){
    document.getElementById("answer").innerHTML += 2;
}

function three(){
	document.getElementById("answer").innerHTML += 3;
}

function four(){
	document.getElementById("answer").innerHTML += 4;
}

function five(){
	document.getElementById("answer").innerHTML += 5;
}

function six(){
	document.getElementById("answer").innerHTML += 6;
}

function seven(){
	document.getElementById("answer").innerHTML += 7;
}

function eight(){
	document.getElementById("answer").innerHTML += 8;
}

function nine(){
	document.getElementById("answer").innerHTML += 9;
}

function decimalPoint(){
    document.getElementById("answer").innerHTML +=".";
}


//###################### Numbers from 0 to 9 end ##########################//



//###################### Operations ##########################//
function add(){
    firstNumber = document.getElementById("answer").textContent;
    operator = "+";
    document.getElementById("answer").innerHTML = "";
}

function subtract(){
    firstNumber = document.getElementById("answer").textContent;
    operator = "-";
    document.getElementById("answer").innerHTML = "";
}

function divide(){
    firstNumber = document.getElementById("answer").textContent;
    operator = "/";
    document.getElementById("answer").innerHTML = "";
}

function multiply(){
    firstNumber = document.getElementById("answer").textContent;
    operator = "x";
    document.getElementById("answer").innerHTML = "";
}
//###################### Operations end ##########################//


//###################### Display the answer ##########################//
function equals(){
	secondNumber = document.getElementById("answer").textContent;
        if(firstNumber === "" || secondNumber === "" || operator === ""){
            firstNumber = "";
            secondNumber = "";
            operator = "";
            document.getElementById("answer").innerHTML = "";
        }else{
            if(operator === "+"){
            let answer;
            answer = parseInt(firstNumber) + parseInt(secondNumber);
            document.getElementById("answer").innerHTML = answer;
            firstNumber = answer;
            }else if(operator === "-"){
                let answer;
                answer = parseInt(firstNumber) - parseInt(secondNumber);
                document.getElementById("answer").innerHTML = answer;
                firstNumber = answer;
            }else if(operator === "x"){
                let answer;
                answer = parseInt(firstNumber) * parseInt(secondNumber);
                document.getElementById("answer").innerHTML = answer;
                firstNumber = answer;
            }if(operator === "/"){
                if(secondNumber === "0"){
                    firstNumber = "";
                    secondNumber = "";
                    operator = "";
                    document.getElementById("answer").innerHTML = "";
                }else{
                let answer;
                answer = parseInt(firstNumber) / parseInt(secondNumber);
                document.getElementById("answer").innerHTML = answer;
                firstNumber = answer;
                }
            }
        }
}
//###################### Display the answer end ##########################//

//###################### clear the field ##########################//
function erase(){
    firstNumber = 0;
    secondNumber = 0;
    answer = 0;
    operator = "";
    document.getElementById("answer").innerHTML = "";
}
//###################### clear the field end ##########################//