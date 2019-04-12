<?php


    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

echo "OK";
die();

//    echo "INSERT INTO requests (name, email, message) VALUES (\"$name\", \"email\", \"message\");";
//    die();


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "abfx";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

//    $sql = "INSERT INTO requests (name, email, message) VALUES ('name', 'email', 'message')";
    $sql = "INSERT INTO requests (name, email, message) VALUES (\"$name\", \"$email\", \"$message\");";

    if ($conn->query($sql) === TRUE) {
        echo "OK";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
