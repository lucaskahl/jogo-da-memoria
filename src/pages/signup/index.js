(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render();
  const $flatButton2 = flatButton.render();

  $root.insertAdjacentHTML("beforeend", $flatButton);
  $root.insertAdjacentHTML("beforeend", $flatButton2);
})();
