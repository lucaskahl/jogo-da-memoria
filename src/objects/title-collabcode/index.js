const titleCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .title {
        text-transform: uppercase;
        font-size: 24px;
        color: #f25a70;

        letter-spacing: 0.6px;
        transform: translateY(-40%);
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
