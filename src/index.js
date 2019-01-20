const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardSide = document.createElement("article");
const $icon = `
  <img
    src="./img/icon-collabcode.svg"
    alt="Gueio icon"
    class="icon"
  />
`;

const $iconPhp = `
      <div class="side">
        <img src="./img/icon-php.png" alt="Gueio icon" class="icon" />
      </div>
`;

$memoryCard.classList.add("memory-card");
$memoryCardSide.classList.add("memory-card", "-active");

$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCardSide, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
$memoryCardSide.insertAdjacentHTML("afterbegin", $iconPhp);
