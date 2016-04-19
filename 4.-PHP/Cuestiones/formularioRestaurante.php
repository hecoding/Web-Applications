<!DOCTYPE html>
<html>
	<head>
		<title>Restaurante</title>
	</head>
	<body>
		<form>
			<label for="nombre">Introduce un restaurante</label>
			<input type="text" name="nombre"></input>
			<label for="platos">Elige plato</label>
			
			<?php
				require_once ("conexionRestaurante.php");

				$db = new DB();
				echo $db->msg();
				$conection = $db->conectar();
				
				$sql='SELECT * FROM DISPONIBLE';	
				$consulta=mysqli_query($conection, $sql);
				echo "<select>";
				while($fila=mysqli_fetch_assoc($consulta)){
					echo "<option>",$fila['platos'],"</option>";
				}
				echo"</select>";
				$db->desconectar();
			?>
			
		</form>
	</body>
</html>

	