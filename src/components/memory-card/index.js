let firstCard, secondCard;

const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `

  div {
    width: 155px;
    height: 155px;
    position: relative;
  }

   .memory-card > .card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f25a70;
    border-radius: 26px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: absolute;
  }

  .memory-card.-active .card {
    display: none;
  }

  .memory-card.-active .card.-front {
    display: flex;
  }

  
   .memory-card > .card.-front {
    background-color: #fff;
    display: flex;
  }

   .memory-card > .card.-front::before {
    content: "";
    width: 99px;
    height: 99px;
    background-color: #d4d4d4;
    position: absolute;
    border-radius: 50%;
  }

   .memory-card > .card > .icon {
    width: 100px;
  }

   .memory-card > .card.-front > .icon {
    position: absolute;
    transform: translateY(-10px);
  }

  `;

  $head.insertBefore($style, null);

  return ({ src, alt }) => `
    <div class="memory-card" onClick="handleClick(this)">
        <article class="card -front">
            <img 
                src="${src}" 
                alt="${alt}" 
                class="icon"
            />
        </article>
        <article class="card">
            <img 
                src="img/icon-collabcode.svg" 
                alt="O mascote da Collabcode: o Gueio" 
                class="icon"
            />
        </article>
      </div>
    `;
};

const handleClick = $component => {
  if (qtdActiveMemoryCard == 0) {
    firstCard = $component.children[0].children;
    console.log(firstCard);
    $component.classList.toggle("-active");
  } else if (qtdActiveMemoryCard < 2) {
    $component.classList.toggle("-active");
    secondCard = $component.children[0].children;
  }

  if (firstCard == secondCard) {
    console.log("Hi", firstCard);
  } else {
    console.log("as", secondCard);
  }

  if (qtdActiveMemoryCard === 1) {
    setTimeout(() => {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active"
      );

      $activeMemoryCards.forEach($memoryCard => {
        $memoryCard.classList.remove("-active");
      });
      qtdActiveMemoryCard = 0;
    }, 1000);
  }
};
