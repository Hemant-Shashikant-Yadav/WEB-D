<!-- start_session.php -->
<?php
session_start();

// Setting session variables
$_SESSION['username'] = 'JohnDoe';
$_SESSION['email'] = 'johndoe@example.com';

echo "Session started and variables set.";
?>

<!-- access_session.php -->
<?php
session_start();

// Accessing session variables
if (isset($_SESSION['username']) && isset($_SESSION['email'])) {
    $username = $_SESSION['username'];
    $email = $_SESSION['email'];

    echo "Username: $username <br>";
    echo "Email: $email";
} else {
    echo "Session variables not set.";
}
?>

<!-- destroy_session.php -->
<?php
session_start();

// Unset all session variables
session_unset();

// Destroy the session
session_destroy();

echo "Session destroyed.";
?>
