function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    if (enteredPassword === "password") {
        document.getElementById("message").textContent = "Congratulations! You entered the correct password.";
    } else {
        document.getElementById("message").textContent = "Sorry, the password you entered is incorrect.";
    }
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        checkPassword();
    }
}
