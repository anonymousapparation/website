function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var message = document.getElementById("message");
    
    if (enteredPassword === "password") {
        message.textContent = "You entered the correct '" + enteredPassword + "', congratulations!";
    } else {
        message.textContent = "Sorry, the password you entered is incorrect.";
    }
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        checkPassword();
    }
}
