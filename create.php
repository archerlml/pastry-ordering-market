<html>
<body>

<?php
extract($_POST);

$servername="mysql";
$username="archerlml";
$password="081152016";
$database="givemefive";


$con = new mysqli($servername, $username, $password, $database);
if($con->connect_error){
	die("unable to connect to database");
}

$sql = "INSERT INTO user (firstName, lastName, email, password) VALUES('$firstName', '$lastName','$email','$password')";
if($con->query($sql)==true){
	echo "new user created";
} else{
	echo "error".$sql."<br>".$con->error;
}
$con->close();
?>
</body>
</html>