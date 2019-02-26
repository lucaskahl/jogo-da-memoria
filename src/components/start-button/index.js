const startButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .start-button {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: #FFF;
        border-radius: 50%;
        text-align: center;
        z-index: 15;
        box-shadow: -2px 10px 5px -4px rgba(0,0,0,0.35);
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        opacity: 100;
        transition: all 1s linear;
      }
      
      .start {
        font-size: 35px;
        font-weight: bold;
        font-color: #3a4042;
        line-height: 50px;
      }

      .start-button.-active {
        z-index: 0;
        opacity: 0;
      }

    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = () => {
    let button = document.querySelector(".start-button");
    let layer = document.querySelector(".layerWrapper");

    button.addEventListener("click", () => {
      button.classList.add("-active");
      layer.classList.add("-active");
    });
  };

  module.create = content => {
    module._style();

    return `
      <div onclick="startButton.handleClick()" class="start-button">
        <span class="start">${content}</span>
      </div>
    `;
  };
  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
