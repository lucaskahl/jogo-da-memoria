const signup = (function() {
  const module = {};
  const $logo = logo.render();

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .signup {
        
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <div class="signup">
        ${$logo}
      </div>
    `;
  };

  return {
    render: module.render
  };
})();
