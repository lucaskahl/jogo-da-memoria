const $root = document.querySelector("#root");

function createCard(type) {
  if (type == "back") {
    const $memoryCard = document.createElement("article");

    const $iconCollab = `
      <img
        src="./img/icon-collabcode.svg"
        alt="Gueio icon"
        class="icon"
      />
    `;

    $memoryCard.classList.add("memory-card");
    $root.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
  } else if (type == "front") {
    const $memoryCardFront = document.createElement("article");

    const $iconPhp = `
      <img
        src="./img/icon-php.png"
        alt="Icon php"
        class="icon"
      />
    `;

    $memoryCardFront.classList.add("memory-card", "-front");
    $root.insertBefore($memoryCardFront, null);

    $memoryCardFront.insertAdjacentHTML("afterbegin", $iconPhp);
  }
}

createCard("front");
createCard("back");
createCard("back");
createCard("back");
createCard("back");
createCard("back");
createCard("back");
createCard("back");
