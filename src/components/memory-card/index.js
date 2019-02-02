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

<<<<<<< HEAD
const handleClick = ($src, $alt) => {
  const imgElement = window.event.srcElement;

  if (imgElement.parentElement.classList.contains("-front")) {
    imgElement.setAttribute(
      "onClick",
      `handleClick('${imgElement.src}', '${imgElement.alt}')`
    );
    imgElement.src = "img/icon-collabcode.svg";
    imgElement.alt = "Gueio collabcode";
    imgElement.parentElement.classList.toggle("-front");
  } else {
    imgElement.src = $src;
    imgElement.alt = $alt;
    imgElement.parentElement.classList.toggle("-front");
  }
};

// Aula 29 será realizado a troca para no handleClick receber os cards e comparar
=======
const handleClick = $component =>  {
  
  $component.classList.toggle('-active');

  if($component.classList.contains('-active')) {
    counter++;
  }

  if(counter === 2) {
    let clickedCards = document.querySelectorAll('.-active');
    setTimeout(() => {
      clickedCards.forEach(c => c.classList.toggle('-active'))
    }, 1000)
    counter = 0;
  }
}
>>>>>>> 9f786d1a106282079c1748879a3219b240f5d81d
