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
				$host="localhost";
				$usuario="root";
				$contrasenha="";
				$nombre_db="restaurante";
				$conexion=mysqli_connect($host, $usuario, $contrasenha, $nombre_db);
				
				if(!$conexion){
					echo "conexion mala";
					exit;
				}
	
				$sql='SELECT * FROM DISPONIBLE';	
				$consulta=mysqli_query($conexion, $sql);
				echo "<select>";
				while($fila=mysqli_fetch_assoc($consulta)){
					echo "<option>",$fila['platos'],"</option>";
				}
				echo"</select>";
				mysqli_close($conexion);
			?>
			
		</form>
	</body>
</html>

	
