const layerStart = (function() {
  const module = {};

  module.handleClick = $component => $component.classList.add("-active");

  module.create = content => {
    const $transparencyLayer = layerWrapper.create();
    const $startButton = startButton.create(content);

    return `
      <div class="layer-start" onclick="layerStart.handleClick(this)">
        ${$transparencyLayer}
        ${$startButton}
      </div>
    `;
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
