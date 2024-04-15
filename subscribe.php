<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to_email = "your-email@example.com"; // Your email address where you want to receive emails
    $subject = "New subscription";
    $email = $_POST['email'];

    // Email content
    $message = "New subscription request from: " . $email;

    // Send email
    mail($to_email, $subject, $message);

    // Redirect back to the form with a success message
    header("Location: index.html?message=success");
    exit();
}
?>
