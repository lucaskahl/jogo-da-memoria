const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    const $children = $component.children;

    for (let $c of $children) {
      $c.classList.add("-disable");
    }
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains("layerWrapper")) {
      $component.remove();
    }
  };

  module.create = content => {
    const $transparencyLayer = layerWrapper.create();
    const $startButton = startButton.create(content);

    return `
      <div class="layer-start" onclick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
        ${$transparencyLayer}
        ${$startButton}
      </div>
    `;
  };

  return {
    create: module.create,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
