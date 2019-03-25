const buttonCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .button-collabcode {
        display: block;
        text-decoration: none;
        background-color: #f25a70;
        border-radius: 24px;
        width: 300px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #FFF;
        margin: 0 auto;
        margin-top: 30px;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = $content => {
    module._style();

    return `
    <a class="button-collabcode" href="#">
      ${$content}
    </a>
  `;
  };
  return {
    render: module.render
  };
})();
