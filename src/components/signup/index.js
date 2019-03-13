const signup = (function() {
  const module = {};
  const $logo = logo.render();
  const $title = title.render("Welcome");

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .signup {
        margin-top: -70px;
      }
    `;

    $head.insertBefore($style, null);
  };

  // position absolute o componente de baixo ( inputs subiriam.)

  module.render = () => {
    module._style();

    return `
      <div class="wrapper">
        <div class="signup" >
          ${$logo}
          ${$title}
        </div>
        <p>Oi</p>
      </div>
    `;
  };

  return {
    render: module.render
  };
})();
