<?php
function isPrime($number) {
    if ($number <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($number); $i++) {
        if ($number % $i === 0) {
            return false;
        }
    }
    return true;
}

$numberToCheck = isset($_GET['numberToCheck']) ? (int)$_GET['numberToCheck'] : 13;
$isPrime = isPrime($numberToCheck);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Checker</title>
</head>
<body>
    <h1>Prime Number Checker</h1>
    <form action="" method="get">
        <label for="numberToCheck">Enter a number:</label>
        <input type="number" name="numberToCheck" id="numberToCheck" value="<?php echo $numberToCheck; ?>">
        <button type="submit">Check Prime</button>
    </form>
    <p><?php echo "$numberToCheck is " . ($isPrime ? "a prime" : "not a prime") . " number."; ?></p>
</body>
</html>
