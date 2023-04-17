let counterValue = 0;

const currentCounter = document.querySelector("#value");
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonMinus.addEventListener("click", () => {
  counterValue--;
  currentCounter.textContent = counterValue;
});

buttonPlus.addEventListener("click", () => {
  counterValue++;
  currentCounter.textContent = counterValue;
});
