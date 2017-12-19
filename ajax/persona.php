<?php 
require_once "../modelos/Persona.php";

$persona=new Persona();

$idpersona=isset($_POST["idpersona"])? limpiarCadena($_POST["idpersona"]):"";
$nombre=isset($_POST["nombre"])? limpiarCadena($_POST["nombre"]):"";
$apellido=isset($_POST["apellido"])? limpiarCadena($_POST["apellido"]):"";
$celular=isset($_POST["celular"])? limpiarCadena($_POST["celular"]):"";
$direccion=isset($_POST["direcciion"])? limpiarCadena($_POST["direcciion"]):"";
$user=isset($_POST["user"])? limpiarCadena($_POST["user"]):"";
$pass=isset($_POST["pass"])? limpiarCadena($_POST["pass"]):"";
$telefono=isset($_POST["telefono"])? limpiarCadena($_POST["telefono"]):"";

switch ($_GET["op"]){
	case 'guardaryeditar':
		if (empty($idpersona)){
			$rspta=$persona->insertar($nombre,$apellido,$celular,$direccion,$user,$pass,$telefono);
			echo $rspta ? "Persona registrada" : "Persona no se pudo registrar";
		}
		else {
			$rspta=$persona->editar($idpersona,$nombre,$apellido,$celular,$direccion,$user,$pass,$telefono);
			echo $rspta ? "Persona actualizada" : "Persona no se pudo actualizar";
		}
	break;

//	case 'desactivar':
//		$rspta=$categoria->desactivar($idcategoria);
// 		echo $rspta ? "Categoría Desactivada" : "Categoría no se puede desactivar";
//	break;

//	case 'activar':
//		$rspta=$categoria->activar($idcategoria);
// 		echo $rspta ? "Categoría activada" : "Categoría no se puede activar";
//	break;

	case 'mostrar':
		$rspta=$persona->mostrar($idpersona);
 		//Codificar el resultado utilizando json
 		echo json_encode($rspta);
	break;

	case 'listar':
		$rspta=$persona->listar();
 		//Vamos a declarar un array
 		$data= Array();

 		while ($reg=$rspta->fetch_object()){
 			$data[]=array(
// 				"0"=>($reg->condicion)?'<button class="btn btn-warning" onclick="mostrar('.$reg->idcategoria.')"><i class="fa fa-pencil"></i></button>'.
// 					' <button class="btn btn-danger" onclick="desactivar('.$reg->idcategoria.')"><i class="fa fa-close"></i></button>':
// 					'<button class="btn btn-warning" onclick="mostrar('.$reg->idcategoria.')"><i class="fa fa-pencil"></i></button>'.
// 					' <button class="btn btn-primary" onclick="activar('.$reg->idcategoria.')"><i class="fa fa-check"></i></button>',
// 				"1"=>$reg->nombre,
// 				"2"=>$reg->descripcion,
// 				"3"=>($reg->condicion)?'<span class="label bg-green">Activado</span>':
// 				'<span class="label bg-red">Desactivado</span>'
                            "0"=>$reg->idpersona,
                            "1"=>$reg->nombre,
                            "2"=>$reg->apellido,
                            "3"=>$reg->celular,
                            "4"=>$reg->direccion,
                            "5"=>$reg->user,
                            "6"=>$reg->pass,
                            "7"=>$reg->telefono
 				);
 		}
 		$results = array(
 			"sEcho"=>1, //Información para el datatables
 			"iTotalRecords"=>count($data), //enviamos el total registros al datatable
 			"iTotalDisplayRecords"=>count($data), //enviamos el total registros a visualizar
 			"aaData"=>$data);
 		echo json_encode($results);

	break;
}
?>