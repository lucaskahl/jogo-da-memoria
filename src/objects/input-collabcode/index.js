const inputCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode {
        display: block;
        width: 100%;
        color: #3a4042;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 1px solid rgba(58, 64, 66, .5);
        padding-top: 12px;
        padding-bottom: 12px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <input class="input-collabcode"
          type="email"
          name="email"
          id="email"
          placeholder="Digite aqui o seu email" 
      />
    `;
  };

  return {
    render: module.render
  };
})();
