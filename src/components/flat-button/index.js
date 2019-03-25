const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .flat-button-${module._id} {
      display: inline-block;
      box-sizing: border-box;
      background-color: ${active ? "#f25a70" : "#eae6da"};
      color: ${active ? "#FFF" : "#FFFcee"};
      font-size: 24px;
      font-weight: bold;
      display: inline-block;
      width: 49%;
      padding-top: 60px;
      height: 176px;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
    }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ($content = "", active = false) => {
    module._id++;
    module._style(active);

    return `
      <a href="#" class='flat-button-${module._id}'>${$content}</a>
    `;
  };

  return {
    render: module.render
  };
})();
