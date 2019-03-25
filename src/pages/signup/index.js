(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signUpButton = flatButton.render("Sign in", true);

  const $logoCollabcode = logoCollabode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome");

  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $labelCollabcodeUser = labelCollabcode.render("Username");
  const $inputCollabcodeUser = inputCollabcode.render();
  const $labelCollabcodeEmail = labelCollabcode.render("E-mail");
  const $inputCollabcodeEmail = inputCollabcode.render();
  const $labelCollabcodePassword = labelCollabcode.render("Password");
  const $inputCollabcodePassword = inputCollabcode.render();
  const $labelCollabcodeConfirmPassword = labelCollabcode.render(
    "Confirm Password"
  );
  const $inputCollabcodeConfirmPassword = inputCollabcode.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $labelCollabcodeUser);
  $root.insertAdjacentHTML("beforeend", $inputCollabcodeUser);
  $root.insertAdjacentHTML("beforeend", $labelCollabcodeEmail);
  $root.insertAdjacentHTML("beforeend", $inputCollabcodeEmail);
  $root.insertAdjacentHTML("beforeend", $labelCollabcodePassword);
  $root.insertAdjacentHTML("beforeend", $inputCollabcodePassword);
  $root.insertAdjacentHTML("beforeend", $labelCollabcodeConfirmPassword);
  $root.insertAdjacentHTML("beforeend", $inputCollabcodeConfirmPassword);
})();
