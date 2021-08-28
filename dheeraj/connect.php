
<?php
	$firstName = $_POST['firstName'];

$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

	// Database connection
	$conn = new mysqli('localhost','root','','demo');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(firstName, email, number, message) values(?, ?, ?, ?)");
		$stmt->bind_param("ssis", $firstName, $email, $number, $message);
		$execval = $stmt->execute();
		echo $execval;

		header('location:succesfully.html');
		$stmt->close();
		$conn->close();
	}
?>

