<?php

$mysqli = new mysqli("localhost", "root", "sa", "azulejos");

if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql="SELECT * FROM colecciones WHERE id = ? ";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $name, $ancho, $largo);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>ID</th>";
echo "<td>" . $id . "</td>";
echo "<th>Name</th>";
echo "<td>" . $name . "</td>";
echo "<th>Ancho Azulejo</th>";
echo "<td>" . $ancho . "</td>";
echo "<th>Largo Azulejo</th>";
echo "<td>" . $largo . "</td>";
echo "</tr>";
echo "</table>";