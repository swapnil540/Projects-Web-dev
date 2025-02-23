// O --> #547aa5 ,  X --> #79E2E2

let boxes = document.querySelectorAll(".box");
let winnerMsg = document.querySelector(".winnerMsg");
let showWinner = document.querySelector(".show-winner");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");

let turnO = true; //for changing alternate players 
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


for(let box of boxes )  {

box.addEventListener("click", () => {

    if(turnO) {
        box.innerText = "O";
        box.style.color = "#70d6ff";
        turnO = false;
        box.disabled = true;
    }
    else {
        box.innerText = "X";
        box.style.color = "#ff7b00";
        turnO = true;
        box.disabled = true; //once player click on box then it will disbled
    }

    checkWinner();
    checkDraw();
    
})};

let Draw = 0;

const checkDraw = () => {
    
    for(let box of boxes ) {
    
        if(box.innerText != "" && winner == "") {

        Draw++;
    }
}

  if(Draw == 45) {
    winnerMsg.innerText = "Game is Draw ..." ;
    showWinner.classList.remove("hide");
     Draw = 0;
 }
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

let winner="";
const displayWinner = (winner) => {
   
    winnerMsg.innerText =`Congratulations, Winner is ${winner}`;
     showWinner.classList.remove("hide");
     disableBoxes();
};


const checkWinner = () => {

    for(let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
           
            if(pos1Val == pos2Val && pos2Val == pos3Val) {

                displayWinner(pos1Val);
            }
        }
    }
};


const resetGame = () => {
    
    turnO = true;
    enableBoxes();
    showWinner.classList.add("hide");

}

resetBtn.addEventListener("click" , resetGame);
newGameBtn.addEventListener("click" , resetGame);






