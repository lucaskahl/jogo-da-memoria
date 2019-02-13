const startButton = (function() {
  const module = {};

  module.create = () => {
    return `
      <div class="start-button">
        <span class="start">+</span>
      </div>
    `;
  };
  return {
    create: module.create
  };
})();
