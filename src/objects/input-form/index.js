const inputForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      label {
        display: block;
        margin-left: 20px;
        color: rgba(0,0,0, .5);
      }

      .input {
        color: #000;
        width: 85%;
        margin-left: 20px;
        margin-right: 20px;
        border: none;
        border-bottom: 1px solid black;
        padding-top: 10px;
        padding-bottom: 10px;
      }

    `;

    $head.insertBefore($style, null);
  };

  module.render = $content => {
    module._style();

    return `
      <label for="email">E-mail</label>
      <input class="input"
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
