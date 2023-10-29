function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var message = document.getElementById("message");

    if (enteredPassword === "crime" || enteredPassword === "Crime" || enteredPassword === "CRIME") {
        var sentence = "A dark crime has been committed. I want you to read this before I can tell you more. After that, click here.";
        typeOutText(sentence, message);
    } else {
        var sentence = "DUDE WTF";
        typeOutText(sentence, message);
    }
}


function typeOutText(sentence, element) {
    element.innerHTML = ""; // Clear the existing content
    element.textContent = "";
    var words = sentence.split(" ");
    var i = 0;

    var timer = setInterval(function() {
        if (i === words.length) {
            clearInterval(timer);
        } else {
            var word = words[i];
            if (word.toLowerCase() === "this") {
                var link = document.createElement("a");
                link.textContent = word;
                link.href = "https://anonymousapparation.github.io/website1/"; // Replace with the URL you want for "this"
                link.target = "_blank";
                element.appendChild(link);
            } else if (word.toLowerCase() === "here.") {
                var link1 = document.createElement("a");
                link1.textContent = word;
                link1.href = "https://anonymousapparation.github.io/website2/"; // Replace with the URL you want for "here"
                link1.target = "_blank";
                element.appendChild(link1);
            } else {
                element.appendChild(document.createTextNode(word));
            }
            element.appendChild(document.createTextNode(" "));
            i++;
        }
    }, 100); // Adjust the typing speed by changing the delay (in milliseconds)
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        checkPassword();
    }
}
