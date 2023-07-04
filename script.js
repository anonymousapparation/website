function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    if (enteredPassword === "password") {
        document.getElementById("message").textContent = "Congratulations! You entered the correct password.";
    } else {
        document.getElementById("message").textContent = "Sorry, the password you entered is incorrect.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("passwordInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkPassword();
        }
    });
});
