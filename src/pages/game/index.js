const $root = document.querySelector("#root");

const cards = {
  default: ["img/icon-collabcode.svg", "Gueio mascote da CollabCode"],
  c: ["img/icon-c.png", "Ícone de um livro de C", "-front"],
  javascript: ["img/icon-js.png", "Ícone de um livro de Javascript", "-front"],
  java: ["img/icon-java.png", "Ícone de um livro de Java", "-front"],
  php: ["img/icon-php.png", "Ícone de um livro de Php", "-front"]
};

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard(...cards.default);
const $cardPhp = createMemoryCard(...cards.php);
const $cardJava = createMemoryCard(...cards.java);
const $cardJavaScript = createMemoryCard(...cards.javascript);
const $cardC = createMemoryCard(...cards.c);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJavaScript);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJavaScript);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
