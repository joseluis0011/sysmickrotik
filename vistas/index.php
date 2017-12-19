<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <?php require 'head.php'; ?>
        <title>Institución Educativa El Buen Pastor</title>
    </head>
  <body onload="nobackbutton()" class="nav-md">
      <div class="container body"> 
          <div class="main_container">
             <?php require 'header.php'; ?>
                      <!-- page content -->
                      <div class="right_col" role="main">
                          <div class="">
                              <div class="page-title">
                                  <div class="title_left">
                                      <h3>Perfil del Usuario</h3>
                                  </div>
                              </div>

                              <div class="clearfix"></div>

                              <div class="row">
                                  <div class="col-md-12 col-sm-12 col-xs-12">
                                      <div class="x_panel">
                                          <div class="x_title">
                                              <ul class="nav navbar-right panel_toolbox">
                                                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                                  </li>
                                                  <li class="dropdown">
                                                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                                      <ul class="dropdown-menu" role="menu">
                                                          <li><a href="#">Settings 1</a>
                                                          </li>
                                                          <li><a href="#">Settings 2</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li><a class="close-link"><i class="fa fa-close"></i></a>
                                                  </li>
                                              </ul>
                                              <div class="clearfix"></div>
                                          </div>
                                          <div class="x_content">
                                              <div class="col-md-3 col-sm-3 col-xs-12 profile_right">
                                                  <div class="profile_img">
                                                      <div id="crop-avatar">
                                                          <!-- Current avatar -->
                                                          <img class="img-responsive avatar-view" src="recursos/img/<c:url value='${SEXO}'/>.PNG" alt="Avatar" title="Change the avatar">
                                                      </div>
                                                  </div>
                                                  <h3><c:out value="${NOMBRE_AP}"/></h3>

                                                  <ul class="list-unstyled user_data">
                                                      <li><i class="fa fa-map-marker user-profile-icon"></i> San Juan de lurigancho, Canto Rey
                                                      </li>

                                                      <li>
                                                          <i class="fa fa-briefcase user-profile-icon"></i> I.E El Buen Pastor
                                                      </li>
                                                  </ul>
                                                  
                                                  <!----Botonoes principal--->
                                                  <button id="${IDPER}" onclick="getidper(this.id)" class="btn btn-success" data-toggle="modal" data-target="#modal1"><i class="fa fa-edit m-right-xs"></i>EditarDatos</button>
                                                  <button id="${IDPER}" onclick="getiduser(this.id)" class="btn btn-success" data-toggle="modal" data-target="#modal2"><i class="fa fa-edit m-right-xs"></i>EditarUser</button>
                                                  <br />         
                                              </div>
                                                  
                                              <div class="modal fade bs-example-modal-lg" id="modal2" tabindex="-1" role="dialog" aria-hidden="true">
                                                  <div class="modal-dialog modal-lg">
                                                      <div class="modal-content">

                                                          <div class="modal-header">
                                                              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                                                              </button>
                                                              <h4 class="modal-title" id="myModalLabel">Actualizar Usuario y Contraseña</h4>
                                                          </div>
                                                          <div class="modal-body">
                                                              <form class="form-horizontal form-label-left" novalidate>
                                                                 <div class="model2" >
                                                                 </div>
                                                              </form>
                                                          </div>
                                                          <div class="modal-footer">
                                                              <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                                                              <button type="submit" onclick="update2();" class="btn btn-primary">Actualizar</button>
                                                          </div>

                                                      </div>
                                                  </div>
                                              </div>
                                              <!--modal 2-- donde actualiza los datos del usuario-->
                                              <div class="modal fade bs-example-modal-lg" id="modal1" tabindex="-1" role="dialog" aria-hidden="true">
                                                  <div class="modal-dialog modal-lg">
                                                      <div class="modal-content">
                                                          <div class="modal-header">
                                                              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                                                              </button>
                                                              <h4 class="modal-title" id="myModalLabel">Actualizar Datos Personales</h4>
                                                          </div>
                                                          <!--modal de actualizar-->
                                                          <div class="modal-body">
                                                              
                                                                  <form class="form-horizontal form-label-left" novalidate>
                                                                      <div class="model1" >
                                                                      </div>
                                                                  </form>
                                                              
                                                          </div>
                                                          <div class="modal-footer">
                                                              <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                                                              <button type="submit" onclick="update();" class="btn btn-primary">Actualizar</button>
                                                          </div>

                                                      </div>
                                                  </div>
                                              </div>
                                              <!--Empieza reportes-->
                                              <div class="col-md-9 col-sm-9 col-xs-12">
                                                  <form class="form-horizontal form-label-left" novalidate>
                                                      <div class="item form-group">
                                                          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Nombres<span class="required">*</span>
                                                          </label>
                                                          <div class="col-md-6 col-sm-6 col-xs-12">
                                                              <p class="form-control-static"><c:out value="${NOMBRE_PER}"/></p>
                                                          </div>
                                                      </div>
                                                      <div class="item form-group">
                                                          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Apellido Paterno <span class="required">*</span>
                                                          </label>
                                                          <div class="col-md-6 col-sm-6 col-xs-12">
                                                              <p class="form-control-static"><c:out value="${APELLIDO_PATER}"/></p>
                                                          </div>
                                                      </div>
                                                      <div class="item form-group">
                                                          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Apellido Materno <span class="required">*</span>
                                                          </label>
                                                          <div class="col-md-6 col-sm-6 col-xs-12">
                                                              <p class="form-control-static"><c:out value="${APELLIDO_MATER}"/></p>
                                                          </div>
                                                      </div>
                                                      <div class="item form-group">
                                                          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Fecha Cumpleaños <span class="required">*</span>
                                                          </label> 
                                                          <div class="col-md-6 col-sm-6 col-xs-12">
                                                              <p class="form-control-static"><c:out value="${FECHA_CUMP}"/></p>
                                                          </div>
                                                      </div>
                                                      <div class="item form-group">
                                                          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="website">DNI <span class="required">*</span>
                                                          </label>
                                                          <div class="col-md-6 col-sm-6 col-xs-12">
                                                               <p class="form-control-static"><c:out value="${DNI}"/></p>
                                                          </div>
                                                      </div>
                                                      <div class="item form-group">
                                                          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="occupation">Telefono <span class="required">*</span>
                                                          </label>
                                                          <div class="col-md-6 col-sm-6 col-xs-12">
                                                              <p class="form-control-static"><c:out value="${TELEFONO}"/></p>
                                                          </div>
                                                      </div>
                                                       <div class="item form-group">
                                                          <label class="control-label col-md-3 col-sm-3 col-xs-12" for="website">Email <span class="required">*</span>
                                                          </label>
                                                          <div class="col-md-6 col-sm-6 col-xs-12">
                                                               <p class="form-control-static"><c:out value="${CORREO}"/></p>
                                                          </div>
                                                      </div>
                                                    </form>
                                                </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!-- /page content -->
                          <!-- footer content -->
                          <footer>
                              <div class="pull-right">
           Ingenieria de Sistemas Upeu © 2017 <a href="#">Svep Desing 1.0</a>
          </div>
          <div class="clearfix"></div>
        </footer>
          </div>
      </div>  
       <?php require 'footer.php'; ?>
     
    </body>
</html>