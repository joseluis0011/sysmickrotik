     function guardardetaMob(){

      var idmob = $("#idMobi").val();
      var idpers= $("#idperso").val();
      var descripcion =$("#descripcioncon").val();
      var fecha = $("#fechacon").val();
      var catidad = $("#cantidadcon").val();
      var estado = $("#estadocon").val();
      
      if($("#cantidadcon").val().length !==0 && $("#estadocon").val().length !==0 && $("#descripcioncon").val().length !==0){
      var opc = "6";                      
                $.ajax({
                   url:"regist",
                   type: 'POST',
                   async: true,
                   data: {
                       'idmob' : idmob, 
                       'idpers' : idpers,
                       'descripcion': descripcion,
                       'fecha': fecha,
                       'catidad': catidad,
                       'estado': estado,
                       'opc': opc  
                   }                                    
                               });
                swal({
                  title: 'Registrado!',
                  text: "Tus datos fueron Registrado!",
                  type: 'success',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Ok',
                  showLoaderOnconfirm: true,
                  
                    preConfirm: function(){
                    return new Promise(function(resolve){                    
                        refresh();
                      });  
                    },
                   allowOutsideClick:  false
                   });
 
                   }else{
                    swal(
                      'Oops...',
                      'Por favor ingrese todos los datos!!',
                      'error'
                           );
                       
                   }   
     }
       function refresh(){
        location.reload(true);
            }
