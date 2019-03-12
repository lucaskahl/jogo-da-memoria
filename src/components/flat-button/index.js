const flatButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .flat-button {
      background-color: #eae6da;
      color: #FFFcee;
      font-size: 24px;
      font-weight: bold;
      width: 186px;
      height: 176px;
      text-transform: uppercase;
    }

    .flat-button.-active {
      background-color: red;
    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ($content, type) => {
    module._style();

    return `
      <button class='flat-button ${type}'>${$content}</button>
    `;
  };

  return {
    render: module.render
  };
})();
