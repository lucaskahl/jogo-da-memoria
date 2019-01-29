const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
  .memory-card {
    width: 155px;
    height: 155px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f25a70;
    border-radius: 26px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
  }
  
  .memory-card .hidden {
    content: "";
    background: url(img/icon-collabcode.svg);
    background-size: 100px;
    position: absolute;
    width: 100px;
    height: 100px;
  }

  .memory-card.-front {
    background-color: #fff;
  }

  .memory-card.-front img {
    background-image: none;
  }

  .memory-card.-front::before {
    content: "";
    width: 99px;
    height: 99px;
    background-color: #d4d4d4;
    position: absolute;
    border-radius: 50%;
  }

  .memory-card > .icon {
    width: 100px;
  }

  .memory-card.-front > .icon {
    position: absolute;
    transform: translateY(-10px);
  }

  .memory-card .-hide {
    opacity: 0;
  }
  `;

  $head.insertBefore($style, null);

  return ({ nameClass, src, alt }) => `
    <figure class="memory-card ${nameClass}" onClick="handleClick(this)">
      <img class="hidden -hide"/>
      <img
        src="${src}"
        alt="${alt}"
        class="icon"
      />
    </figure>
  `;
};

const handleClick = $card => {
  $card.classList.toggle('-front');
  let $img = $card.querySelector("img")

  if(!$card.classList.contains('-front')) {
    $img.classList.toggle("-hide");
  }
};
