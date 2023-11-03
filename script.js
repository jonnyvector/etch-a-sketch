const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  prompt("how many squares would you like?");
});

const gridCreator = (num) => {
  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = "58px";
    div.style.height = "58px";
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "blue";
    });

    container.appendChild(div);
  }
};

gridCreator(256);
