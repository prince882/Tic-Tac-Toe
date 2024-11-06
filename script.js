console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
// Change The turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
// Check For Win
const CheckWin = () => {};
// Logic
let boxes = document.getElementsByClassName("Box");
console.log(Array.from(boxes));
Array.from(boxes).forEach((element, index) => {
  let boxtext = element.querySelector(".Boxtext");
  console.log(boxtext);
  element.addEventListener("click", () => {
    if (boxtext.innerText == "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioturn.play();
      CheckWin();
      document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    } else {
    }
  });
});
