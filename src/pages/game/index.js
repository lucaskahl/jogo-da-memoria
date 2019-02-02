const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
var counter = 0;


const createMemoryCard = memoryCard();

const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.svg",
  alt: "Gueio mascote da CollabCode"
});

const $cardPhp = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Ícone de um livro de Php"
});

const $cardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Ícone de um livro de Java"
});

const $cardJavaScript = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Ícone de um livro de Javascript"
});

const $cardC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "Ícone de um livro de C"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $cardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJavaScript);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJavaScript);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
