<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="UTF-8">
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$("table th").css("background", "blue");
			$("table td").css("background", "green");
			$("table").css("border", "1px solid black");
		});
	</script>
</head>
<body>
	<?php if(!isset($_REQUEST["precioMinimo"])) { ?>
	<form method="get">

		Categorías <select name="categoria" id="categoria">
			<?php
			
			class DB{

				 var $host="localhost";
				 var $usuario="root";
				 var $contrasenha="";
				 var $nombre_db="libreria";
				 var $conexion;

				function DB(){

				}

				function conectar(){
					$this->conexion=mysqli_connect($this->host, $this->usuario, $this->contrasenha, $this->nombre_db);		
					if(!$this->conexion){
						echo "conexion mala";
						exit;
					}
					return $this->conexion;
				}

				function desconectar(){
					mysqli_close($this->conexion);
				}

				function getConexion(){
					return $this->conexion;
				}

				function getDB(){
					return $this->nombre_db;
				}

			}

			$db = new DB();
			$conection = $db->conectar();
			
			$sql='SELECT * FROM categoria';	
			$consulta=mysqli_query($conection, $sql);
			while($fila=mysqli_fetch_assoc($consulta)){
				echo "<option>",$fila['categorias'],"</option>";
			}
			$db->desconectar();
			?>
		</select>
		<br>
		Precio mínimo <input type="text" name="precioMinimo" id="precioMinimo"><br>
		Precio máximo <input type="text" name="precioMaximo" id="precioMaximo"><br>

		<input type="submit">
	</form>

	<?php } else { ?>
	<table>
		<?php
		function clean_input($data) {
		    $data = trim($data);
		    $data = stripslashes($data);
		    $data = htmlspecialchars($data);
		    return $data;
		}
		class DB{

			 var $host="localhost";
			 var $usuario="root";
			 var $contrasenha="";
			 var $nombre_db="libreria";
			 var $conexion;

			function DB(){

			}

			function conectar(){
				$this->conexion=mysqli_connect($this->host, $this->usuario, $this->contrasenha, $this->nombre_db);		
				if(!$this->conexion){
					echo "conexion mala";
					exit;
				}
				return $this->conexion;
			}

			function desconectar(){
				mysqli_close($this->conexion);
			}

			function getConexion(){
				return $this->conexion;
			}

			function getDB(){
				return $this->nombre_db;
			}

		}

		$preciomin = clean_input($_REQUEST["precioMinimo"]);
		$preciomax = clean_input($_REQUEST["precioMaximo"]);
		$categor = clean_input($_REQUEST["categoria"]);

		$db = new DB();
		$conection = $db->conectar();
		
		$sql="SELECT * FROM libros WHERE categoria = '$categor' && precio >= '$preciomin' && precio <= '$preciomax'";	
		$consulta=mysqli_query($conection, $sql);
		
		echo "<tr><th>Título</th><th>Precio</th></tr>";
		while($fila=mysqli_fetch_assoc($consulta)){
			echo "<tr>";
			echo "<td>",$fila['titulo'],"</td>","<td>",$fila['precio'],"</td>";
			echo "</tr><br>";
		}
		$db->desconectar();
		?>
	</table>
	<?php } ?>
</body>
</html>