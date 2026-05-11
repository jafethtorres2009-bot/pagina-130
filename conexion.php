<?php

$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "escuela";

$conn = new mysqli($servidor,$usuario,$password,$bd);

if($conn->connect_error){
    die("Error de conexión");
}

?>