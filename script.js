const btn = document.getElementById("btn");
const text = document.getElementById("text");
const draws = document.getElementById("numbers-count");
const maxNumber = document.getElementById("max-number");
const combos = document.getElementById("combo");
const comboNumber = document.getElementsByClassName("combo-number");
const comboTitle = document.getElementById("combo-title");

const toto = () => {
  if (combos.hasChildNodes()) {
    while (combos.firstChild) {
      combos.removeChild(combos.lastChild);
    }
  }
  let minNumber = 1;
  let maxNumberValue = maxNumber.value;
  let drawsValue = draws.value;
  let numbers = [];
  let winningNumbers = [];

  for (let i = minNumber; i <= maxNumberValue; i++) {
    numbers.push(i);
  }

  for (let i = 0; i < drawsValue; i++) {
    let winningNumber = Math.floor(Math.random() * numbers.length);

    winningNumbers.push(numbers[winningNumber]);

    comboTitle.classList.add("active");

    let winningNumberEl = document.createElement("span");
    winningNumberEl.classList.add("combo-number");
    winningNumberEl.innerText = numbers[winningNumber];
    combos.appendChild(winningNumberEl);

    numbers.splice(winningNumber, 1);
  }
};

btn.addEventListener("click", toto);
