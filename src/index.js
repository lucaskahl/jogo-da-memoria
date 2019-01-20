const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `
  <img
    src="./img/icon-collabcode.svg"
    alt="Gueio icon"
    class="icon"
  />
`;

$memoryCard.classList.add("memory-card");

$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
