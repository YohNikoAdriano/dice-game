let input1Filled = false;
let input2Filled = false;
let score1 = 0;
let score2 = 0;

let inputLoc = document.getElementsByTagName("input");
let validation1Loc = document.querySelector(".validation1");
let Player1NameLoc = document.querySelector(".player1Name");
let validation2Loc = document.querySelector(".validation2");
let Player2NameLoc = document.querySelector(".player2Name");
let dice1Loc = document.querySelector(".img1");
let dice2Loc = document.querySelector(".img2");
let score1Loc = document.querySelector(".score1");
let score2Loc = document.querySelector(".score2");
let winnerBoardLoc = document.querySelector(".winnerBoard");
let crownLoc = document.querySelectorAll(".crown");

function checkingInput(){
    if(input1Filled === false && input2Filled == false){
        validationMessage(validation1Loc);
        validationMessage(validation2Loc);
    }else if(input1Filled === false){
        validationMessage(validation1Loc);
    }else if(input2Filled == false){
        validationMessage(validation2Loc);
    }else{
        return true;
    }
}

function checkingInput1(){
    if(inputLoc[0].value === ""){
        validationMessage(validation1Loc);
    }
    else{
        Player1NameLoc.innerHTML = inputLoc[0].value;
        input1Filled = true;
    }
}

function checkingInput2(){
    if(inputLoc[1].value === ""){
        validationMessage(validation2Loc);
    }
    else{
        Player2NameLoc.innerHTML = inputLoc[1].value;
        input2Filled = true;
    }
}

function validationMessage(validationLoc){
    validationLoc.classList.remove("d-none");
    setTimeout(function(){
        validationLoc.classList.add("d-none");
    }, 500);
}

function playGame(){
    checkingInput();
    if(checkingInput() === true){
        let random1 = Math.floor(Math.random()*6)+1;
        let random2 = Math.floor(Math.random()*6)+1;
        dice1Loc.setAttribute("src", "images/dice" + random1 + ".png");
        dice2Loc.setAttribute("src", "images/dice" + random2 + ".png");
        if(random1 > random2){
            score1++;
            score1Loc.innerHTML = score1;
            winnerBoardLoc.classList.add(".gold");
            winnerBoardLoc.innerHTML = "Player 1 Win 👑";
        }else if(random2 > random1){
            score2++;
            score2Loc.innerHTML = score2;
            winnerBoardLoc.classList.add(".gold");
            winnerBoardLoc.innerHTML = "Player 2 Win 👑";
        }else{
            winnerBoardLoc.innerHTML = "Seri";
        }
        if(score1 > score2){
            crownLoc[0].classList.remove("d-none");
            crownLoc[1].classList.add("d-none");
        }else if(score2 > score1){
            crownLoc[0].classList.add("d-none");
            crownLoc[1].classList.remove("d-none");
        }else{
            crownLoc[0].classList.remove("d-none");
            crownLoc[1].classList.remove("d-none");
        }
    }
}


