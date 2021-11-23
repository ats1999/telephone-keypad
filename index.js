const singleClickValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
const dblClickValues = [
  [".", ",", "!"],
  ["1", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "x"],
  ["*"],
  ["0"],
  ["#"],
];

window.onload = function () {
  const btns = document.getElementsByClassName("btn");

  for (let btn = 0; btn < btns.length; btn++) {
    btns[btn].addEventListener("click", () => {
      console.log(singleClickValues[btn]);
    });

    btns[btn].addEventListener("dblclick", () => {
      console.log(dblClickValues[btn]);
    });
  }
};
