document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('password-form');
    var input = document.getElementById('password-input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        checkPassword();
    });

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkPassword();
        }
    });

    function checkPassword() {
        var enteredPassword = input.value.trim();
        var message = '';

        if (enteredPassword === 'password') {
            message = 'Congratulations! You entered the correct password.';
        } else {
            message = 'Sorry, the password you entered is incorrect.';
        }

        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<h1>' + message + '</h1>';
        document.getElementById('terminal').appendChild(resultDiv);

        form.style.display = 'none';
        input.value = '';
    }
});
