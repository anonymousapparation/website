function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var message = document.getElementById("message");

    if (enteredPassword === "password") {
        var output = "You entered the correct '" + enteredPassword + "', congratulations! ";
        output += "This is the additional sentence on a new line.";
        typeOutText(output, message);
    } else {
        var output = "Sorry, the password you entered is incorrect.";
        typeOutText(output, message);
    }
}

function typeOutText(output, element) {
    element.textContent = ""; // Clear the existing content

    var words = output.split(" ");
    var i = 0;

    var timer = setInterval(function() {
        element.innerHTML += words[i] + " ";
        i++;
        if (i >= words.length) {
            clearInterval(timer);
        }
    }, 100); // Adjust the typing speed by changing the delay (in milliseconds)
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        checkPassword();
    }
}
