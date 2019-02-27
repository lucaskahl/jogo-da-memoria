const layerWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    
      .layerWrapper {
        content: "";
        position: absolute;
        background-color: rgba(0,0,0, .2);
        z-index: 10;
        width: 100vw;
        height: 100vh;
        opacity: 100;
        transition: all 300ms 200ms linear;
      }

      .layerWrapper.-disable {
        opacity: 0;
        background-color: #badc58;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <div class="layerWrapper">
      </div>
    `;
  };

  return {
    create: module.create
  };
})();
