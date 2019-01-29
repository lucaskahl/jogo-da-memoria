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

    return ({ src, alt, nameClass }) => `
        <article class="memory-card ${nameClass}">
            <img 
                src="${src}" 
                alt="${alt}" 
                class="icon"
                onClick="handleClick()"
            />
        </article>
    `;
};

const handleClick = ($src, $alt) => {
  const imgElement = window.event.srcElement;
  if (imgElement.parentElement.classList.contains('-front')) {
      imgElement.setAttribute('onClick', `handleClick('${imgElement.src}', '${imgElement.alt}')`);
      imgElement.src = 'img/icon-collabcode.svg';
      imgElement.alt = 'Gueio collabcode';
      imgElement.parentElement.classList.toggle('-front');
  } else {
      imgElement.src = $src;
      imgElement.alt = $alt;
      imgElement.parentElement.classList.toggle('-front');
  }  
};
