const logo = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .logo {
        display: block;
        width: 150px;
        margin: 0 auto;
        
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <img class="logo" src="./img/icon-collabcode.svg"/>
    `;
  };

  return {
    render: module.render
  };
})();
