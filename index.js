const singleClickValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
const dblClickValues = [
  [".", ",", "!"],
  ["a", "b", "c"],
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

function clickHandler(btn, btnIdx) {
  let clickCount = 0;
  let timeOut;
  btn.addEventListener("click", (e) => {
    if (timeOut) clearTimeout(timeOut);

    clickCount++;

    timeOut = setTimeout(() => {
      if (clickCount == 1) {
        console.log(singleClickValues[btnIdx]);
      } else {
        console.log({
          clickCount,
          len: dblClickValues[btnIdx].length,
          mod: (clickCount - 1) % dblClickValues[btnIdx].length,
        });
        console.log(
          dblClickValues[btnIdx][
            ((clickCount - 1) % dblClickValues[btnIdx].length) - 1
          ]
        );
        clickCount = 0;
      }
    }, 300);
  });
}
window.onload = function () {
  const btns = document.getElementsByClassName("btn");
  for (let btn = 0; btn < btns.length; btn++) {
    clickHandler(btns[btn], btn);
  }
};
