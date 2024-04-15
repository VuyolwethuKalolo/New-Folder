document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('emailInput').value;
    if (validateEmail(email)) {
        // Send email to server (not implemented in this example)
        document.getElementById('message').textContent = 'Subscription successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid email address. Please try again.';
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
