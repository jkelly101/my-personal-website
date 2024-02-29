// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const list = document.querySelector("ul");

list.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.color = "purple";

    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

list.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.color = "pink";

    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);
