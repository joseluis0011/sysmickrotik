                    
                      function cargarbox(){
                          
                          $('#selecionar').on('change',function(){
                           var selectValor = '#'+$(this).val();
                           
                           $('#pai').children('div').hide();
                           $('#pai').children(selectValor).show();
                           $("#selecionar2").val("");
                            

                           //console.log(selectValor);
     
                       });
                          
                      } 
                      //inicio de registro----------------------------------
                      function registro(){
                        $("#btnRegistro").click(function(){  //inicio de la funcion
                               var categoria = $("#selecionar").val();
                               var idmobiliario = $("#selecionar2").val();
                               var departamento = $("#departamento").val();
                               var nombreMob = $("#nombreMob").val();                               
                               var marcaMob = $("#marcaMob").val();
                               var serieMob = $("#serieMob").val();
                               var cantiMob = $("#cantiMob").val();
                               var select3 = $("#selecionar3").val();
                               var fechaMob = $("#fechaMob").val();
                               var comentaMob = $("#comentaMob").val();
                      if($("#selecionar").val().length !==0 && $("#nombreMob").val().length !==0 && 
                         $("#cantiMob").val().length !==0 && $("#comentaMob").val().length !==0 && 
                         $("#selecionar3").val().length !==0 && $("#departamento").val().length !==0 && $("#selecionar2").val().length ===0){
                              var opc = "1";                               
                                $.ajax({
                                   url:"regist",
                                   type: 'POST',
                                   async: true,
                                   data: {
                                       'categoria' : categoria, 
                                       'departamento' : departamento,
                                       'nombreMob' : nombreMob,
                                       'marcaMob' : marcaMob,
                                       'serieMob' : serieMob,
                                       'cantiMob' : cantiMob,
                                       'select3' : select3,
                                       'fechaMob' : fechaMob,
                                       'comentaMob' : comentaMob,
                                       'opc' : opc
                                   },
                                   success: function (data) {
                               listTable();
                               $("#selecionar2").val("");
                               $("#nombreMob").val("");
                               $("#marcaMob").val("");
                               $("#serieMob").val("");
                               $("#cantiMob").val("");
                               $("#selecionar3").val("");
                               $("#comentaMob").val("");
                                    }                                    
                               });
                             console.log(categoria,departamento,nombreMob,marcaMob,serieMob,cantiMob,select3,fechaMob,comentaMob);
                             
                                                 
                              swal(
                                         'Registrado!',
                                         'Los datos han sido registrado correctamente!',
                                         'success'
                                  );  

                           }
                           //inico del segundo registro
                           else if ($("#selecionar2").val().length !==0){
                               var idmobiliario = $("#selecionar2").val();
                               var nombreMob2 = $("#nombreMob").val();
                               var marcaMob2 = $("#marcaMob").val();
                               var serieMob2 = $("#serieMob").val();
                               var cantiMob2 = $("#cantiMob").val();
                               var select32 = $("#selecionar3").val();
                               var fechaMob2 = $("#fechaMob").val();
                               var comentaMob2 = $("#comentaMob").val();
                             if($("#departamento").val().length !==0 && $("#nombreMob").val().length !==0 && $("#cantiMob").val().length !==0 && 
                                $("#comentaMob").val().length !==0 && $("#selecionar3").val().length !==0){ 
                               var opc = "2";                               
                                $.ajax({
                                   url:"regist",
                                   type: 'POST',
                                   async: true,
                                   data: {
                                       'idmobiliario' : idmobiliario,
                                       'nombreMob2' : nombreMob2,
                                       'marcaMob2' : marcaMob2,
                                       'serieMob2' : serieMob2,
                                       'cantiMob2' : cantiMob2,
                                       'select3' : select32,
                                       'fechaMob2' : fechaMob2,
                                       'comentaMob2' : comentaMob2,
                                       'opc' : opc
                                   },
                                   success: function (data) {
                               listTable();
                               $("#selecionar2").val("");
                               $("#nombreMob").val("");
                               $("#marcaMob").val("");
                               $("#serieMob").val("");
                               $("#cantiMob").val("");
                               $("#selecionar3").val("");
                               $("#comentaMob").val("");
                                    }                                    
                               });
                                 console.log(idmobiliario,nombreMob2,marcaMob2,serieMob2,cantiMob2 ,select32,fechaMob2,comentaMob2 );
                                                                                                              
                              swal(
                                         'Registrado!',
                                         'Los datos han sido registrado correctamente!',
                                         'success'
                                          );  
                             }else{
                               swal(
                              'Oops...',
                              'Por favor ingrese todos los datos. Para mas informacion pulse\n\
                               el boton informacion',
                              'error'
                                   );
                               
                           }

                           //fin del else if
                           }else{
                               swal(
                              'Oops...',
                              'Por favor ingrese todos los datos. Para una informacion detallada pulse\n\
                               el boton informacion',
                              'error'
                                   );
                               
                           }
                               
                            //inico del segundo registro
                                 
                            
                        }); //fin de la funcion
                          
                      }
                //fin de registro----------------------------------
                    $(document).ready(function () {
                        cargarbox();
                        registro();
                        
                    });