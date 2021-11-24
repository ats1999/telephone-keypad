// the value of each button, when clicked
// it is indexed 0
const clickValues = [
  [1, ".", ",", "!"],
  [2, "a", "b", "c"],
  [3, "d", "e", "f"],
  [4, "g", "h", "i"],
  [5, "j", "k", "l"],
  [6, "m", "n", "o"],
  [7, "p", "q", "r", "s"],
  [8, "t", "u", "v"],
  [9, "w", "x", "y", "x"],
  ["*"],
  ["0"],
  ["#"],
];

/**
 * Handle click event. Depending on the number of click, insert values in input element.
 * @param {Object} btn HTML Button element
 * @param {Object} input HTML Input element
 * @param {Number} btnIdx the index of button element on page
 */
function clickHandler(btn, btnIdx, input) {
  // count continues click
  let clickCount = 0;
  let timeOut;

  btn.addEventListener("click", (e) => {
    // timeOut hold id of previous setTimeout
    // if the gap between first click and second click is less than 300ms,
    // then it can be treated as multi click
    if (timeOut) clearTimeout(timeOut);

    clickCount++;

    // run the code after 300ms
    // if there is another click within 300ms,
    // then do not execute this code
    timeOut = setTimeout(() => {
      const btnValues = clickValues[btnIdx];
      const text = btnValues[(clickCount - 1) % btnValues.length];
      input.value += text;
      clickCount = 0;
    }, 300);
  });
}
window.onload = function () {
  // get all buttons present on the page
  const btns = document.getElementsByClassName("btn");
  const input = document.getElementById("input");

  for (let btn = 0; btn < btns.length; btn++) {
    // assign a click handler to each button
    clickHandler(btns[btn], btn, input);
  }
};
