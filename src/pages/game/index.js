const $root = document.querySelector("#root");

const cards = {
  gueio: ["", "img/icon-collabcode.svg", "Gueio mascote da CollabCode"],
  c: ["-front", "img/icon-c.png", "Ícone de um livro de C"],
  javascript: ["-front", "img/icon-js.png", "Ícone de um livro de Javascript"],
  java: ["-front", "img/icon-java.png", "Ícone de um livro de Java"],
  php: ["-front", "img/icon-php.png", "Ícone de um livro de Php"]
};

const $cardsWrapper = createCardsWrapper();

const { gueio, c, javascript, java, php } = cards; // Desestruturação

const $memoryCard = createMemoryCard(...gueio);
const $cardPhp = createMemoryCard(...php);
const $cardJava = createMemoryCard(...java);
const $cardJavaScript = createMemoryCard(...javascript);
const $cardC = createMemoryCard(...c);

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
