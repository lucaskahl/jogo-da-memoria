const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard({
  nameClass: "",
  src: "img/icon-collabcode.svg",
  alt: "Gueio mascote da CollabCode"
});

const $cardPhp = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-php.png",
  alt: "Ícone de um livro de Php"
});

const $cardJava = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-java.png",
  alt: "Ícone de um livro de Java"
});

const $cardJavaScript = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-js.png",
  alt: "Ícone de um livro de Javascript"
});

const $cardC = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-c.png",
  alt: "Ícone de um livro de C"
});

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
