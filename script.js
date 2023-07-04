function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var message = document.getElementById("message");
    
    if (enteredPassword === "crime") {
        var sentence = "A dark crime has been committed. You have been tasked to solve it if you choose to accept.";
        typeOutText(sentence, message);
    } else {
        var sentence = "DUDE WTF";
        typeOutText(sentence, message);
    }
}

function typeOutText(sentence, element) {
    element.textContent = ""; // Clear the existing content
    var words = sentence.split(" ");
    var i = 0;
  
    var timer = setInterval(function() {
        element.textContent += words[i] + " ";
        i++;
        if (i >= words.length) {
            clearInterval(timer);
        }
    }, 200); // Adjust the typing speed by changing the delay (in milliseconds)
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        checkPassword();
    }
}
