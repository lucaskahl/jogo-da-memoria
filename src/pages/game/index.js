(function() {
  const $root = document.querySelector("#root");
  const $cardsWrapper = createCardsWrapper();

  const createMemoryCard = memoryCard.create();
  const $pointBar = pointBar.create();

  const $memoryCard = createMemoryCard({
    src: "img/icon-collabcode.svg",
    alt: "Gueio mascote da CollabCode"
  });

  const $cardBug = createMemoryCard({
    src: "img/icon-bug.png",
    alt: "Ícone do livro de bug"
  });

  const $cardCabeca = createMemoryCard({
    src: "img/icon-cabeca.png",
    alt: "Ícone do livro da Cabeca"
  });

  const $cardCelular = createMemoryCard({
    src: "img/icon-celular.png",
    alt: "Ícone do livro de um Celular"
  });

  const $cardResponsivo = createMemoryCard({
    src: "img/icon-Responsivo.png",
    alt: "Ícone do livro de Responsivo"
  });

  const $cardSettings = createMemoryCard({
    src: "img/icon-settings.png",
    alt: "Ícone do livro de settings"
  });

  const $cardWoman = createMemoryCard({
    src: "img/icon-woman.png",
    alt: "Ícone do livro de Woman"
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

  $cardsWrapper.insertAdjacentHTML("beforeend", $cardSettings);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardSettings);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardPhp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardJavaScript);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardPhp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardJavaScript);
  $cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);

  $root.insertAdjacentHTML("beforebegin", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
})(); // IIFE
