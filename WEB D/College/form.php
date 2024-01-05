<!-- process_form.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $namePattern = "/^[a-zA-Z-' ]+$/";
    $emailPattern = "/^\S+@\S+\.\S+$/";
    $phonePattern = "/^\d{10}$/";

    $errors = [];

    if (!preg_match($namePattern, $name)) {
        $errors[] = "Invalid name format";
    }

    if (!preg_match($emailPattern, $email)) {
        $errors[] = "Invalid email format";
    }

    if (!preg_match($phonePattern, $phone)) {
        $errors[] = "Invalid phone number format (10 digits)";
    }

    if (!empty($errors)) {
        echo "<div class='error'><ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul></div>";
    } else {
        // Process the valid data (e.g., store it in a database)
        echo "<p>Form submitted successfully!</p>";
    }
}
?>
