import Player from "./players";

function make(rows) {
  for (i = 1; i <= rows; i++) {
    const r = document.createElement("div");
    container.appendChild(r).className = "make";
    for (j = 1; j <= rows; j++) {
      const c = document.createElement("div");

      c.setAttribute("class", "cell");
      r.appendChild(c);

      c.addEventListener("click", () => {});
    }
  }
}

function initializeGame() {}
