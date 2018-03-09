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

//$sql1 = "UPDATE `cake` SET count = count + 1 WHERE name = 'Chocolate Cake'";
//$sql1 = "UPDATE `cake` SET count = count + 1 WHERE name LIKE '%$detail%'";


$sql = "INSERT INTO test (firstName, lastName, address, city, state, zipcode, total, detail) VALUES('$firstName','$lastName', '$address', '$city', '$state', '$zipcode', '$total', '$detail')";
if($con->query($sql)==true){
	echo "new order made";

}else{
	echo "error: ".$sql."<br>".$con->error;
}

$con->close();
?>
</body>
</html>