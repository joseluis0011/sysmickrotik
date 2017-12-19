<?php 
//Incluímos inicialmente la conexión a la base de datos
require "../config/Conexion.php";

Class Persona
{
	//Implementamos nuestro constructor
	public function __construct()
	{

	}

	//Implementamos un método para insertar registros
	public function insertar($nombre,$apellido,$celular,$direccion,$user,$pass,$telefono)
	{
		$sql="INSERT INTO persona (nombre,apellido,celular,direccion,user,pass,telefono)
		VALUES ('$nombre','$apellido','$celular','$direccion','$user','$pass','$telefono')";
		return ejecutarConsulta($sql);
	}

	//Implementamos un método para editar registros
	public function editar($idpersona,$nombre,$apellido,$celular,$direccion,$user,$pass,$telefono)
	{
		$sql="UPDATE persona SET nombre='$nombre',apellido='$apellido',celular='$celular',direccion='$direccion',user='$user',pass='$pass',telefono='$telefono' WHERE idpersona='$idpersona'";
		return ejecutarConsulta($sql);
	}

	//Implementamos un método para desactivar categorías
//	public function desactivar($idcategoria)
//	{
//		$sql="UPDATE categoria SET condicion='0' WHERE idcategoria='$idcategoria'";
//		return ejecutarConsulta($sql);
//	}

	//Implementamos un método para activar categorías
//	public function activar($idcategoria)
//	{
//		$sql="UPDATE categoria SET condicion='1' WHERE idcategoria='$idcategoria'";
//		return ejecutarConsulta($sql);
//	}

	//Implementar un método para mostrar los datos de un registro a modificar
	public function mostrar($idpersona)
	{
		$sql="SELECT * FROM persona WHERE idpersona='$idpersona'";
		return ejecutarConsultaSimpleFila($sql);
	}

	//Implementar un método para listar los registros
	public function listar()
	{
		$sql="SELECT * FROM persona";
		return ejecutarConsulta($sql);		
	}
	//Implementar un método para listar los registros y mostrar en el select
//	public function select()
//	{
//		$sql="SELECT * FROM persona where condicion=1";
//		return ejecutarConsulta($sql);		
//	}
}

?>