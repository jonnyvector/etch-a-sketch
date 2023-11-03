const container = document.querySelector(".container");
const button = document.querySelector("button");
let gridNumber = 0;

const gridCreator = (num) => {
  let width = (960 - gridNumber * 2) / gridNumber;
  let height = (960 - gridNumber * 2) / gridNumber;
  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "blue";
    });

    container.appendChild(div);
  }
};

button.addEventListener("click", function () {
  gridNumber = prompt("how many squares would you like?");
  gridCreator(gridNumber * gridNumber);
});
