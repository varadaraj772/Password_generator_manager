function getReq() {
  var passwordLength = document.getElementById("plen").value;
  var password = generatePassword(passwordLength);
  var webname = document.getElementById("wname").value;
  document.getElementById("gp").textContent = "Your Password";
  document.getElementById("generated_passowrd").value = password;
}

function generatePassword(length) {
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}
function clearall() {
  document.getElementById("passform").reset();
}
