// HAMBURGER
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// EMAIL

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text("An email has been sent for confimation! If you did not enter a name you will be asked to select one in the confirmation link.");
    $result.css("color", "green");
  } else {
    $result.text("Email is not valid");
    $result.css("color", "red");
  }
  return false;
}

document.getElementById("joinBtnClick").onclick = function() {validate()};

//$("#email").on("input", validate);