const pointBar = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    
      .point-bar {
        background-color: #3a4042;
        height: 40px;
        text-align: center;
        font-family: "Arial", sans-serif;
      }

      .number {
        color: #fff;
        line-height: 40px;
        font-weight: bold;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.incrementListener = () => {
    document.querySelector(".number").textContent = store.score;
  };

  module.create = () => {
    module._style();

    return `
      <header class="point-bar">
        <span class="number">0</span>
      </header>
    `;
  };

  return {
    create: module.create,
    listener: module.incrementListener
  };
})();
