            function getper1(id){
                var url = 'BuscarPer';
                var data = 'idper='+id; 
                
                 $.post(url,data, function(obj){
                     var listR = obj.ls;
                           var f='';
                           if (listR.length > 0) {
                              for(var i = 0; i< listR.length ; i++){

                             f +=   '<div class="principal item form-group">';
                             f +=      '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Nombre<span class="required">*</span>';
                             f +=      '</label>';
                             f +=       '<div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=          '<input id="nombreper2" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name=""  required="required" type="text" value="'+listR[i].nombre_Per+'">';
                             f +=          '<input id="idper2" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name=""  required="required" type="hidden" value="'+listR[i].idPersona+'">';
                             f +=       '</div>';
                             f +=   '</div>';
                             f +=   '<div class="item form-group">';
                             f +=       '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Apellido Paterno<span class="required">*</span>';
                             f +=       '</label>';
                             f +=       '<div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=           '<input id="apellP2" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" required="required" type="text" value="'+listR[i].apellidoPater_Per+'">';
                             f +=       '</div>';
                             f +=   '</div>';
                             f +=   '<div class="item form-group">';
                             f +=       '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Apellido Materno<span class="required">*</span>';
                             f +=       '</label>';
                             f +=       '<div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=            '<input id="apellM2" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" required="required" type="text" value="'+listR[i].apellidoMater_Per+'">';
                             f +=        '</div>';
                             f +=    '</div>';
                             f +=    '<div class="item form-group">';
                             f +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12">Fecha_Cumpleaños</label>';
                             f +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=            '<input id="fecha2" type="text" class="form-control col-md-7 col-xs-12" value="'+listR[i].fechaCumpl_Date+'">';
                             f +=       ' </div>';
                             f +=   ' </div>';
                             f +=   ' <div class="item form-group">';
                             f +=       ' <label class="control-label col-md-3 col-sm-3 col-xs-12">DNI</label>';
                             f +=       ' <div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=            '<input id="dni2" type="text" class="form-control col-md-7 col-xs-12" value="'+listR[i].dni_Per+'">';
                             f +=        '</div>';
                             f +=    '</div>';
                             f +=    '<div class="item form-group">';
                             f +=       ' <label class="control-label col-md-3 col-sm-3 col-xs-12">Telefono</label>';
                             f +=       ' <div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=           ' <input id="telef2" type="text" class="form-control" value="'+listR[i].telefono_Per+'">';
                             f +=        '</div>';
                             f +=   ' </div>';
                             f +=   ' <div class="item form-group">';
                             f +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Correo Electronico<span class="required">*</span>';
                             f +=        '</label>';
                             f +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=            '<input id="corre2" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" required="required" type="text" value="'+listR[i].correo_Per+'">';
                             f +=       ' </div>';
                             f +=   ' </div>';
                             f +=   ' <div class="item form-group">';
                             f +=       ' <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Nombre Usuario<span class="required">*</span>';
                             f +=       ' </label>';
                             f +=       ' <div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=            '<input id="user2" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" required="required" type="text" value="'+listR[i].usuario+'">';
                             f +=        '</div>';
                             f +=    '</div>';
                             f +=    '<div class="item form-group">';
                             f +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Contraseña<span class="required">*</span>';
                             f +=        '</label>';
                             f +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=            '<input id="pass2" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" required="required" type="password" value="'+listR[i].contra+'">';
                             f +=        '</div>';
                             f +=    '</div>';
                             f +=        '<div class="form-group">';
                             f +=           ' <label class="control-label col-md-3 col-sm-3 col-xs-12">Rol</label>';
                             f +=            '<div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=                '<select id="rol2" class="form-control">';
                             f +=                   ' <option value="">Eliga una Opcion</option>'; 
                             f +=                   ' <option value="1">Administrador</option>';
                             f +=                   ' <option value="2">Docente</option>';
                             f +=               ' </select>';
                             f +=           ' </div>';
                             f +=       ' </div>   ';
                             f +=        '<div class="form-group">';
                             f +=           ' <label class="control-label col-md-3 col-sm-3 col-xs-12">Departamento</label>';
                             f +=            '<div class="col-md-6 col-sm-6 col-xs-12">';
                             f +=                '<select id="depar2" class="form-control">';
                             f +=                   ' <option value="">Eliga una Opcion</option>';
                             f +=                   ' <option value="1">Dirección</option>';
                             f +=                   ' <option value="2">Secretaría</option>';
                             f +=                   ' <option value="3">Tesorería</option>';
                             f +=                   ' <option value="4">Caja</option>';
                             f +=                   ' <option value="5">Dirección Académica</option>';
                             f +=                   ' <option value="6">Sala Profesores</option>';
                             f +=                   ' <option value="7">Capellanía</option>';
                             f +=                   ' <option value="8">Psicología</option>';
                             f +=                   ' <option value="9">Regencia</option>';
                             f +=                   ' <option value="10">Lab.Computo</option>';
                             f +=                   ' <option value="11">Lab.Fisica y Quimica</option>';
                             f +=                   ' <option value="12">Almacen-Limpiez</option>';
                             f +=                   ' <option value="13">Almacen general</option>';
                             f +=                   ' <option value="14">Almacen-Educación Física</option>';
                             f +=                   ' <option value="15">Inicial 3 años</option>';
                             f +=                   ' <option value="16">Inicial 4 años</option>';
                             f +=                   ' <option value="17">Inicial 5 años</option>';
                             f +=                   ' <option value="18">Primer grado</option>';
                             f +=                   ' <option value="19">Segundo grado</option>';
                             f +=                   ' <option value="20">Tercer grado</option>';
                             f +=                   ' <option value="21">Cuarto grado</option>';
                             f +=                   ' <option value="22">Quinto grado</option>';
                             f +=                   ' <option value="23">Sexto Grado</option>';
                             f +=                   ' <option value="24">Primer año</option>';
                             f +=                   ' <option value="25">Segundo año</option>';
                             f +=                   ' <option value="26">Tercer año</option>';
                             f +=                   ' <option value="27">Cuarto año</option>';
                             f +=                   ' <option value="28">Quinto año</option>';
                             f +=               ' </select>';
                             f +=           ' </div>';
                             f +=       ' </div>   ';     
                             
                              }
                              $(".model5").empty();
                              $(".model5").append(f);

                           }
                 });     
            }
            function updateAll(){
              var idper2 =$("#idper2").val();
              var nombreper2 = $("#nombreper2").val();
              var apellP2 =$("#apellP2").val();
              var apellM2 =$("#apellM2").val();
              var fecha2 =$("#fecha2").val();
              var dni2 = $("#dni2").val();
              var telef2 =$("#telef2").val();
              var corre2 =$("#corre2").val();
              var user2 =$("#user2").val();
              var pass2 =$("#pass2").val();
              var rol2 =$("#rol2").val();
              var depar2 =$("#depar2").val();
            if($("#nombreper2").val().length !==0 && $("#apellP2").val().length !==0 && $("#apellM2").val().length !==0 &&
               $("#user2").val().length !==0 && $("#pass2").val().length !==0 && $("#rol2").val().length !==0 && $("#depar2").val().length !==0 ){
                      var opc = "4";                      
                                $.ajax({
                                   url:"guardar",
                                   type: 'POST',
                                   async: true,
                                   data: {
                                       'idper2' : idper2, 
                                       'nombreper2' : nombreper2,
                                       'apellP2': apellP2,
                                       'apellM2': apellM2,
                                       'fecha2': fecha2,
                                       'dni2': dni2,
                                       'telef2': telef2,
                                       'corre2': corre2,
                                       'user2': user2,
                                       'pass2': pass2,
                                       'rol2': rol2,
                                       'depar2': depar2,
                                       'opc': opc  
                                   }                                    
                               });
                swal({
                  title: 'Actualizado!',
                  text: "Tus datos fueron actualizado!",
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
            
            function deletePer(id){
                swal({
                  title: '¿Estás seguro?',
                  text: "No podrás revertir esto!",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, Bórralo!',
                  showLoaderOnconfirm: true,
                  
                    preConfirm: function(){
                    return new Promise(function(resolve){
                    var opc = "5"; 
                    $.ajax({
                         url: 'guardar',
                         type: 'POST',
                         async: true,
                         data: {
                            'idup':id,
                            'opc' : opc
                         }
                      }).done(function(response){
                         refresh();
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
