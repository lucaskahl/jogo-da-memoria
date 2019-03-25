const inputForm = (function() {
  const module = {};

  module.render = $content => {
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
