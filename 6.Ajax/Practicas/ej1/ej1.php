<?php
$user = $_REQUEST["user"];

$db = mysqli_connect('localhost', 'eniweb', 'web', 'eni');
$sql = "select * from usuarios where usuario = " . $user;
$consulta = mysqli_query( $db, $sql );
