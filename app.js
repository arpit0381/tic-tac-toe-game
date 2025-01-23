let welcome = prompt("Welcome to Tic Tac Toe game, Enter your Name:");
console.log("Player Name:", welcome);

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn"); // Changed to querySelector
let newGameBtn = document.querySelector("#new-btn"); // Changed to querySelector
let msgContainer = document.querySelector(".msg-container"); // Changed to querySelector
let msg = document.querySelector("#msg");

let turnO = true; // Player X and Player O

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide"); // Fixed to classList
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnO) {
      // Player O
      box.innerText = "O";
      turnO = false;
    } else {
      // Player X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner:", pos1Val);
        showWinner(pos1Val);
        return; // Exit the function after finding a winner
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the winner is ${winner}!`;
  msgContainer.classList.remove("hide"); // Fixed to classList
  disableBoxes();
};

newGameBtn.addEventListener("click", resetGame); // Fixed event listener
resetBtn.addEventListener("click", resetGame); // Fixed event listener
