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

  .memory-card.-active .card,
  .memory-card.-score .card {
    display: none;
  }

  .memory-card.-active .card.-front,
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
    <div class="memory-card" onClick="cardLogic.handleClick(this)">
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

const cardLogic = (function() {
  function activeMemoryCard($component) {
    if (store.qtdActiveMemoryCard < 2) {
      $component.classList.add("-active");
    }
  }

  function checkCard() {
    if (store.qtdActiveMemoryCard === 1) {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active"
      );
      if (
        $activeMemoryCards[0]
          .querySelector(".-front .icon")
          .getAttribute("src") ===
        $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        store.score++;
        console.log("Score: ", store.score);
        $activeMemoryCards.forEach($memoryCard => {
          $memoryCard.classList.add("-score");
          $memoryCard.classList.remove("-active");
        });
      } else {
        setTimeout(() => {
          const $activeMemoryCards = document.querySelectorAll(
            ".memory-card.-active"
          );
          $activeMemoryCards.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });
          store.qtdActiveMemoryCard = 0;
        }, 1000);
      }
    }
  }

  return {
    handleClick: function($component) {
      if (!$component.classList.contains("-active")) {
        activeMemoryCard($component);
        checkCard();
      }
    }
  };
})();

// Foi mantido o check card pois na minha lógica, game inicializa as coisas, wrapper cuida do card no todo e o memory-card cuida da sua prop. lógica.
