document.getElementById("btn_submit").addEventListener("click", function () {
  const emailField = document.getElementById("user_email");
  const email = emailField.value;

  const passwordField = document.getElementById("user_password");
  const password = passwordField.value;

  if (email === "jack@test.com" && password === "admin123") {
    window.location.href = "bank.html";
  } else {
    alert("invalid");
  }
});
