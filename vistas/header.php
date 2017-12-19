  <!--INIC0IO EL JSPF------------>
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="principal" class="site_title"><i class="fa fa-home"></i> <span>Inventario Svep</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="../public/img/M.PNG" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                  <a href="#" style="color: white;"><i class="fa fa-circle text-success"></i></a>
                  <span>nombre rol</span>   
                  <h2>monbre</h2>
              </div>
            </div>
            <!-- /menu profile quick info -->
            <br />
            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>General</h3>
                <ul class="nav side-menu">
                  <li><a a href="principal"><i class="fa fa-user"></i> Perfil</a>
                   <!-- <ul class="nav child_menu">
                      <li><a href="Rtesorera">Perfil</a></li> 
                    </ul>-->
                  </li>
                  <!--<c:if test="${IDROL==1}">-->
                  <li><a><i class="fa fa-edit"></i> Registrar <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="Rresponsable">Responsables</a></li>
                      <li><a href="Rdepar">Departamentos</a></li>                      
                      <li><a href="maper?opc=3">Mobiliarios</a></li>                     
                      <li><a href="Rcate">Categorias</a></li>
                      <li><a href="maper?opc=5">Roles</a></li>
                    </ul>
                  </li>     
<!--                  </c:if>-->
                  <!--<c:if test="${IDROL==2}">-->
<!--                  <li><a><i class="fa fa-edit"></i> Registrar <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">                  
                      <li><a href="maper?opc=6">Mobiliarios</a></li>                     
                    </ul>
                  </li>                     -->
                  <!--</c:if>-->
                  <!--<c:if test="${IDROL==2}">-->
                 <li><a><i class="fa fa-file-text-o"></i> Inventario Mobiliarios <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="ConsultaMob">Generar Inventario</a></li>
                    </ul>
                 </li>
                  <!--</c:if>-->
                  <!--<c:if test="${IDROL==1 || IDROL==2}">-->
                   <li><a><i class="fa fa-desktop"></i> Consultar Mobiliarios <span class="fa fa-chevron-down"></span></a>
                      <ul class="nav child_menu">
                          <li><a href="ConsultaMob2">Mobiliarios en Baja</a></li>
                      </ul>
                  </li>      
<!--                  </c:if>                 
                  <c:if test="${IDROL==1}">-->
                      <li><a><i class="fa fa-file-text-o"></i> Reporte General <span class="fa fa-chevron-down"></span></a>
                      <ul class="nav child_menu">
                          <li><a href="reporteAdmin">Generar Reportes</a></li>
                          <li><a href="#">Reportes Realizados</a></li>
                      </ul>
                  </li>                        
                  <!--</c:if>-->
                  
                </ul>
              </div>
            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
                <a data-toggle="tooltip" data-placement="top" title="Settings">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                    <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Lock">
                    <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Logout" href="login">
                    <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
                </div>
                      <!-- top barra de navigation -->
                      <div class="top_nav">
                          <div class="nav_menu">
                              <nav>
                                  <div class="nav toggle">
                                      <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                                  </div>

                                  <ul class="nav navbar-nav navbar-right">
                                      <li class="">
                                          <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                               <img src="../public/img/M.PNG" alt="">
                                              <span class=" fa fa-angle-down"></span>
                                          </a>
                                          <ul class="dropdown-menu dropdown-usermenu pull-right">
                                              <li>
                                                  <a href="javascript:;">
                                                      <span class="badge"></span>
                                                      <span>Settings</span>
                                                  </a>
                                              </li>
                                              <li><a href="javascript:;">Help</a></li>
                                              <li><a href="out"><i class="fa fa-sign-out pull-right" ></i> Log Out</a></li>
                                          </ul>
                                      </li>

                                      <li role="presentation" class="dropdown">
                                          <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                              <i class="fa fa-envelope-o"></i>
                                              <span class="badge bg-green">6</span>
                                          </a>  
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                      </div> 