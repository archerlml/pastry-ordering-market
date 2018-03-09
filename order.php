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

// $sql = "INSERT INTO order (firstName, lastName, address, city, state, zipcode, total, detail) VALUES('$firstName','$lastName', '$address', '$city', '$state', '$zipcode', '$total', '$detail')";
// if($con->query($sql)==true){
// 	echo "new order made";
// }else{
// 	echo "error: ".$sql."<br>".$con->error;
// }

$sql = "INSERT INTO order (firstName, lastName, address, city, state, zipcode) VALUES('$firstName','$lastName', '$address', '$city', '$state', '$zipcode')";
if($con->query($sql)==true){
	//echo "new order made";
	echo "Here is your order info:"+'$firstName'+'$lastName'+ '$address'+ '$city'+ '$state'+ '$zipcode';
}else{
	echo "error: ".$sql."<br>".$con->error;
}

echo "Here is your order info:"+'$firstName'+'$lastName'+ '$address'+ '$city'+ '$state'+ '$zipcode';

$con->close();
?>
</body>
</html>