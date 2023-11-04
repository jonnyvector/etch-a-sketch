const container = document.querySelector(".container");
const button = document.querySelector("button");
const clearGridButton = document.querySelector("#clear-grid");
let gridNumber = 0;

const colors = [
  "#ff2cdf",
  "#0014ff",
  "#00e1fd",
  "#fc007a",
  "#00ff5b",
  "#0014ff",
  "#ffe53b",
  "#ff005b",
  "#00ffff",
];

const clearGrid = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const gridCreator = (num) => {
  let width = (960 - gridNumber * 2) / gridNumber;
  let height = (960 - gridNumber * 2) / gridNumber;
  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = colors[Math.floor(Math.random() * 9)];
    });

    container.appendChild(div);
  }
};

clearGridButton.addEventListener("click", function () {
  clearGrid();
});

button.addEventListener("click", function () {
  const userInput = prompt(
    "What dimension grid would you like to set? Enter a number between 1 and 100."
  );
  gridNumber = parseInt(userInput);

  if (!Number.isNaN(gridNumber) && gridNumber >= 1 && gridNumber <= 100) {
    clearGrid();
    gridCreator(gridNumber * gridNumber);
  } else {
    alert("Please enter a valid number between 1 and 100");
  }
});
