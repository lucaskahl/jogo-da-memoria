(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signUpButton = flatButton.render("Sign in", true);

  const $logoCollabcode = logoCollabode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome");

  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
})();
