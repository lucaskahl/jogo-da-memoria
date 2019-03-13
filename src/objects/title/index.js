const title = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .title {
        text-align: center;
        text-transform: uppercase;
        font-size: 25px;
        color: #f25a70;
        margin-top: 20px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = $content => {
    module._style();

    return `
      <h1 class="title">${$content}</h1>
    `;
  };

  return {
    render: module.render
  };
})();
