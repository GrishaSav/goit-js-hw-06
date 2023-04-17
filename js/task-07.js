const inputChange = document.querySelector("input#font-size-control");
const abracadabra = document.querySelector("span#text");

inputChange.addEventListener("change", (size) => {
  abracadabra.style.fontSize = `${size.target.value}px`;
});
