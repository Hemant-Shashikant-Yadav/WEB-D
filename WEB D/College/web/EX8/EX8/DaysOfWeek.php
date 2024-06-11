<?php
function findDayOfWeek($dayNumber)
{
    switch ($dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}

$dayNumber = isset($_GET['dayNumber']) ? (int) $_GET['dayNumber'] : 1;
$result = findDayOfWeek($dayNumber);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day of the Week Finder</title>
</head>

<body>
    <h1>Day of the Week Finder</h1>
    <form action="" method="get">
        <label for="dayNumber">Enter a day number (1-7):</label>
        <input type="number" name="dayNumber" id="dayNumber" min="1" max="7" value="<?php echo $dayNumber; ?>">
        <button type="submit">Find Day</button>
    </form>
    <p>Result:
        <?php echo $result; ?>
    </p>
</body>

</html>