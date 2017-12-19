                    $(document).ready(function () {
                        cargarNotificacion();
                        
                    });
                    
                    function cargarNotificacion() {
                        $("#info2").click(function () {
                            swal(
                                    'Informacion!!',
                                    'Se recomienda rellenar todos los campos pero\n\
                                     si no cuenta con todos, rellene los campos \n\
                                     como por ejemplo: Categoria, Departamento, \n\
                                     Nombre, Cantidad, Estado y agregue un comentario',
                                    'question'
                                    );
                        });
                     }
                    function deleteData(id){
                 swal({
                  title: 'Estas seguro?',
                  text: "No podras revertir esto!",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, Borralo!',
                  showLoaderOnconfirm: true,
                  
                    preConfirm: function(){
                    return new Promise(function(resolve){
                    var opc = "5"; 
                    $.ajax({
                         url: 'regist',
                         type: 'POST',
                         async: true,
                         data: {
                            'idMob2':id,
                            'opc' : opc
                         }
                      })
                      .done(function(response){
                         swal('Deleted!', response.message, response.status);
                         volver();
                             })
                       .fail(function(){
                           swal(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                               );
                       });                     
                          
                      });  
                    },
                   allowOutsideClick:  false
                });
         }

                     
                     
 