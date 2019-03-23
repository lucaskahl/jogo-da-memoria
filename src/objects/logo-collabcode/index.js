const logoCollabode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .logo-collabcode {
        background-color: #FFF;
        display: inline-block;
        border: solid 30px #FFF;
        border-radius: 50%;
      }

      .logo {
        width: 150px;
      }

    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <figure class="logo-collabcode">
        <img class="logo" src="./img/icon-collabcode.svg"/>
      </figure>
    `;
  };

  return {
    render: module.render
  };
})();
