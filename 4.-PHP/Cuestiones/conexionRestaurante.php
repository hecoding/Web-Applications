<?php

	class DB{

		 var $host="localhost";
		 var $usuario="root";
		 var $contrasenha="";
		 var $nombre_db="restaurante";
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

		function msg(){
			return "funciona";
		}
}

?>