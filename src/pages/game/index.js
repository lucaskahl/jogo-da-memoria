createMemoryCard("front", "icon-php.png");
createMemoryCard("back", "icon-collabcode.svg");

const $card = document.querySelectorAll(".memory-card");

$card.forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle("-front");
    if (element.classList.contains("-front")) {
      element.children[0].src = "http://127.0.0.1:5500/img/icon-php.png";
    } else {
      element.children[0].src = "http://127.0.0.1:5500/img/icon-collabcode.svg";
    }
  });
});

console.log($card);
