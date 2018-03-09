<html>
<body>
<?php
            session_start();
            extract($_POST);

              $servername="mysql";
              $username="archerlml";
              $password="081152016";
              $database="givemefive";
              $con = new mysqli($servername, $username, $password, $database);  
              if($con->connect_error){
                die("unable to connect to database");
              }

              $sql="SELECT * FROM user WHERE email='$email' AND password='$password'";
              $result = $con->query($sql);
              $rows = $result->num_rows;

              if ($rows > 0) {
                echo "login sucessfully";
                //header("Location: http://www.archerlml.com/givemefive/");
              }
              else{
                echo "user not found".$con->error;
              }
              
              ?>


</body>
</html>