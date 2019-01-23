const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-php.png",
  "Ícone de um livro de Php",
  "-front"
);

const $memoryCardFront = createMemoryCard(
  "img/icon-collabcode.svg",
  "Gueio mascote da CollabCode"
);

const $cardJava = createMemoryCard(
  "img/icon-java.png",
  "Ícone de um livro de Java",
  "-front"
);

const $cardJavaScript = createMemoryCard(
  "img/icon-js.png",
  "Ícone de um livro de Javascript",
  "-front"
);

const $cardC = createMemoryCard(
  "img/icon-c.png",
  "Ícone de um livro de C",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJavaScript);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJavaScript);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
