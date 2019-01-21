const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $iconCollab = `
  <img
    src="./img/icon-collabcode.svg"
    alt="Gueio icon"
    class="icon"
  />
`;

const $iconPhp = `
  <img
    src="./img/icon-php.png"
    alt="Icon php"
    class="icon"
  />
`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card", "-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconPhp);
