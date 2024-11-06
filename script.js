alert;

let res = Math.random();
let toss = confirm("Do You Want To Toss A Coin");
let cointoss = () => {
  if (res < 0.5) {
    alert("Heads");
  } else {
    alert("tails");
  }
};
if (toss === true) {
  cointoss();
}
let n1 = prompt("Enter The Name Of The First person");
let n2 = prompt("Enter The Name Of The Second person");

console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
document.getElementsByClassName("info")[0].innerText = `Turn For ${n1}-${turn}`;

let Gameover = false;
// Change The turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
// Check For Win
const CheckWin = () => {
  let wins;
  if (screen.width < 950) {
    [
      [0, 1, 2, 15, 15, 0],
      [3, 4, 5, 15, 45, 0],
      [6, 7, 8, 15, 75, 0],
      [0, 4, 8, 15, 45, 45],
      [2, 4, 6, 15, 45, 135],
      [0, 3, 6, -15, 45, 90],
      [1, 4, 7, 15, 45, 90],
      [2, 5, 8, 45, 45, 90],
    ];
  } else {
    wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
    ];
  }
  let boxtexts = document.getElementsByClassName("Boxtext");
  wins.forEach((e) => {
    let ab = 0;
    let a = 0;
    Array.from(boxtexts).forEach((e) => {
      if (e.innerText !== "") {
        ab = ab + 1;
      }
    });
    console.log(ab);
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      a = 1;
      if (boxtexts[e[0]].innerText == "X") {
        document.getElementsByClassName("info")[0].innerText = `${n1} Won`;
      } else {
        document.getElementsByClassName("info")[0].innerText = `${n2} Won`;
      }
      Gameover = true;
      document
        .getElementsByClassName("imgbox")[0]
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.transform =
        `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      if (screen.width < 950) {
        document.querySelector(".line").style.width = "60vw";
      }
      document.querySelector(".line").style.width = "20vw";
      gameover.play();
    }
    if (ab == 9 && Gameover === false) {
      document.getElementsByClassName("info")[0].innerText =
        `The Match Was Draw`;
    }
  });
};
// Logic
let boxes = document.getElementsByClassName("Box");
console.log(Array.from(boxes));
Array.from(boxes).forEach((element, index) => {
  let boxtext = element.querySelector(".Boxtext");
  console.log(boxtext);
  element.addEventListener("click", () => {
    document.querySelector(".line").style.transition = "width 1s ease-in-out";
    if (boxtext.innerText == "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioturn.play();
      if (Gameover === false) {
        if (turn === "X") {
          document.getElementsByClassName("info")[0].innerText =
            `Turn For ${n1}-${turn}`;
        } else {
          document.getElementsByClassName("info")[0].innerText =
            `Turn For ${n2}-${turn}`;
        }
      }
      CheckWin();
    }
  });
});
//Reset Button
reset.addEventListener("click", (ev) => {
  Gameover = false;
  let boxtexts = document.querySelectorAll(".Boxtext");
  Array.from(boxtexts).forEach((elem) => {
    elem.innerHTML = "";
  });
  document
    .getElementsByClassName("imgbox")[0]
    .getElementsByTagName("img")[0].style.width = "0px";
  turn = "X";
  document.querySelector(".line").style.transform =
    `translate(0vw,0vw) rotate(0deg)`;
  document.querySelector(".line").style.transition = "none";
  document.querySelector(".line").style.width = "0";
  document.getElementsByClassName("info")[0].innerText =
    `Turn For ${n1}-${turn}`;
});
