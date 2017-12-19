
   function getData(id) {
            $("#verMobi").show(); 
            $("#verMobi").animatescroll();
            var url = 'vistaMob';
            var data = 'idMob=' + id;//datos a enviar
            try {
                 $.post(url, data, function (obj) {
                    var listaD = obj.ls;
                    if (listaD.length > 0) {
                        $("#myalert").hide('fade');
                        var l = "";
                        for (var i = 0; i < listaD.length; i++) {
                            l += '<tr>';
                            l += '<td>'+listaD[i].nombre_Mob2+'</td>';
                            l += '<td>'+listaD[i].marca_Mob2+'</td>';
                            l += '<td>'+listaD[i].serie_Mob2+'</td>';
                            l += '<td>'+listaD[i].cantidad2+'</td>';
                            l += '<td>'+listaD[i].estado+'</td>';
                            l += '<td>'+listaD[i].fechaReg_Mob2+'</td>';
                            l += '<td>'+listaD[i].comentario2+'</td>';
                            l += '<td><a class="btn btn-info btn-xs"><i class="fa fa-pencil"></i> Editar </a>';
                            l += '<td><a id='+listaD[i].idMobPartes+' onclick="deleteData(this.id)"; class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Eliminar </a>';
                            l += '</tr>';
                        }
                        $(".conTable2").empty();
                        $(".conTable2").append(createTable2());
                        $(".mbody2").empty();
                        $(".mbody2").append(l);
                        $("#datatable2-responsive").dataTable();
            } else {               
                $("#myalert").show('fade');
                $("#datatable2-responsive").empty();
                    }
                });

            } catch (e) {
                console.error("Error al listar : " + e);
                        }
         }
               
            function createTable2() {
            var l = '<table id="datatable2-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">';
                l += '<thead>';
                l += '<tr>';
                l += '<th>Nombre Mobiliario</th>';
                l += '<th>Marca</th>';
                l += '<th>Modelo/Serie</th>';
                l += '<th>Cantidad</th>';
                l += '<th data-hide="phone">Estado</th>';
                l += '<th data-hide="phone">Fecha registro</th>';
                l += '<th data-hide="phone">Comentario</th>';
                l += '<th data-hide="phone">Editar</th>';
                l += '<th data-hide="phone">Eliminar</th>';
                l += '</tr>';
                l += '</thead>';
                l += '<tbody class="mbody2"></tbody>';
                l += '</table>';
                return l;
            }        
        $('#cancelarMob').click(function() {
	$("#datatable2-responsive").empty();
             });
       
       //se selecciona el id del mobiliario padre para realizar la busqueda y agregarlo al formulario
      function updtaData(id){
        var url = 'vistaMob2';
        var data = 'idMob3=' + id;//datos a enviar
        
                 $.post(url, data, function (obj) {
                    var listaD = obj.ls;
                    if (listaD.length > 0) {
                        var l = "";
                        for (var i = 0; i < listaD.length; i++) {
                            l +=     '<div class="item form-group">';
                            l +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12">Nombre<span class="required">*</span>';
                            l +=        '</label>';
                            l +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=            '<input id="nombMob" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" value="'+listaD[i].nombre_Mob+'">';
                            l +=        '</div>';
                            l +=        '</div>';
                            l +=        '<div class="item form-group">';
                            l +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Marca<span class="required">*</span>';
                            l +=        '</label>';
                            l +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=            '<input id="marMob" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" value="'+listaD[i].marca_Mob+'">';
                            l +=        '</div>';
                            l +=        '</div>';
                            l +=        '<div class="item form-group">';
                            l +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Modelo / Serie<span class="required">*</span>';
                            l +=        '</label>';
                            l +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=        '<input id="serMob" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" value="'+listaD[i].serie_Mob+'">';
                            l +=        '</div>';
                            l +=        '</div>';
                            l +=        '<div class="item form-group">';
                            l +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Cantidad<span class="required">*</span>';
                            l +=        '</label>';
                            l +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=            '<input id="cantMob" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" type="number" value="'+listaD[i].cantidad+'">';
                            l +=        '</div>';
                            l +=        '</div>';
                            l +=        '<div class="form-group">';
                            l +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12">Estado</label>';
                            l +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=            '<select  id="estMob" class="form-control">';
                            l +=                '<option value="'+listaD[i].estado+'">'+listaD[i].estado+'</option>';
                            l +=                '<option value="Bueno">Bueno</option>';
                            l +=                '<option value="Regular">Regular</option>',
                            l +=                '<option value="Defectuoso">Defectuoso</option>';
                            l +=            '</select>';
                            l +=        '</div>';
                            l +=        '</div>';
                            l +=        '<div class="item form-group">';
                            l +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Fecha_Registro<span class="required">*</span>';
                            l +=        '</label>';
                            l +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=            '<input id="fechMob" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" selected disabled type="text" value="'+listaD[i].fechaReg_Mob+'">';
                            l +=        '</div>';
                            l +=        '</div>';
                            l +=        '<div class="item form-group">';
                            l +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Comentario<span class="required">*</span>';
                            l +=        '</label>';
                            l +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=            '<input id="comMob" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" value="'+listaD[i].comentario+'">';
                            l +=        '</div>',
                            l +=        '</div>';
                            l +=        '<div class="form-group">';
                            l +=        '<label class="control-label col-md-3 col-sm-3 col-xs-12">Categoria</label>';
                            l +=        '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=            '<select  id="estMob" class="form-control">';
                            l +=                '<option value="'+listaD[i].idCategoria+'">'+listaD[i].nombre_Categ+'</option>';
                            l +=                '<option value="Muebles y Útiles">Muebles y Útiles</option>';
                            l +=                '<option value="Maquinas y Equipos Diversos">Maquinas y Equipos Diversos</option>';
                            l +=                '<option value="Equipos de Informática">Equipos de Informática</option>';
                            l +=            '</select>';
                            l +=        '</div>';
                            l +=        '</div>';
                            l +=        '<div class="form-group">';
                            l +=           ' <label class="control-label col-md-3 col-sm-3 col-xs-12">Departamento</label>';
                            l +=            '<div class="col-md-6 col-sm-6 col-xs-12">';
                            l +=                '<select id="depar2" class="form-control">';
                            l +=                   ' <option value="'+listaD[i].idDepartamento+'">'+listaD[i].nombre_depar+'</option>';
                            l +=                   ' <option value="1">Dirección</option>';
                            l +=                   ' <option value="2">Secretaría</option>';
                            l +=                   ' <option value="3">Tesorería</option>';
                            l +=                   ' <option value="4">Caja</option>';
                            l +=                   ' <option value="5">Dirección Académica</option>';
                            l +=                   ' <option value="6">Sala Profesores</option>';
                            l +=                   ' <option value="7">Capellanía</option>';
                            l +=                   ' <option value="8">Psicología</option>';
                            l +=                   ' <option value="9">Regencia</option>';
                            l +=                   ' <option value="10">Lab.Computo</option>';
                            l +=                   ' <option value="11">Lab.Fisica y Quimica</option>';
                            l +=                   ' <option value="12">Almacen-Limpiez</option>';
                            l +=                   ' <option value="13">Almacen general</option>';
                            l +=                   ' <option value="14">Almacen-Educación Física</option>';
                            l +=                   ' <option value="15">Inicial 3 años</option>';
                            l +=                   ' <option value="16">Inicial 4 años</option>';
                            l +=                   ' <option value="17">Inicial 5 años</option>';
                            l +=                   ' <option value="18">Primer grado</option>';
                            l +=                   ' <option value="19">Segundo grado</option>';
                            l +=                   ' <option value="20">Tercer grado</option>';
                            l +=                   ' <option value="21">Cuarto grado</option>';
                            l +=                   ' <option value="22">Quinto grado</option>';
                            l +=                   ' <option value="23">Sexto Grado</option>';
                            l +=                   ' <option value="24">Primer año</option>';
                            l +=                   ' <option value="25">Segundo año</option>';
                            l +=                   ' <option value="26">Tercer año</option>';
                            l +=                   ' <option value="27">Cuarto año</option>';
                            l +=                   ' <option value="28">Quinto año</option>';
                            l +=               ' </select>';
                            l +=           ' </div>';
                            l +=       ' </div>   ';       
                            
                        }
                        $(".updatelist").empty();
                        $(".updatelist").append(l);
 
                  } 
            });

        

         }

                                                
       

 
 