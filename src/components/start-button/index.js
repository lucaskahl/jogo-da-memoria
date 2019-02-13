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
        z-index: 100;
        box-shadow: -2px 10px 5px -4px rgba(0,0,0,0.35);
        right: 10px;
        bottom: 1px;
      }
      
      .start {
        font-size: 35px;
        font-weight: bold;
        font-color: #3a4042;
        line-height: 50px;
      }

    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <div class="start-button">
        <span class="start">+</span>
      </div>
    `;
  };
  return {
    create: module.create
  };
})();
