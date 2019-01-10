var username = prompt("Enter your username:", "Username");
var newString = '';
if (username == null || username == "") {
  newString = "User cancelled the prompt.";
} else {
  if (/[0-9]/.test(username)) {
    for (i = 0; i < username.length; i++) {
      if (username[i] == username[i].toUpperCase()) {
        newString = newString + username[i].toLowerCase()
      } else {
        newString = newString + username[i].toUpperCase()
      }
    }

  } else {
    newString = username.split('').reverse().join('');
  }
}
document.getElementById("text").innerHTML = newString;