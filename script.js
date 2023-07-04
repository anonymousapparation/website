function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var message = document.getElementById("message");
    
    if (enteredPassword === "crime") {
        message.textContent = "A dark crime has been committed...";
    } else {
        message.textContent = "DUDE WTF";
    }
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        checkPassword();
    }
}
