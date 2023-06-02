import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import '../assets/css/estilos_afiliados.css?v=2';
import 'bootstrap/dist/js/bootstrap.min.js'; // Importar los archivos de JavaScript de Bootstrap

const HeaderAfiliado = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://winwin-nodejs-api.onrender.com/affiliates/644c2f6132a2418bd6d3d746')
        .then(response => {
          setData(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

  return (
    <div>
<header id="page-topbar">
                <div class="navbar-header">
                    <div class="d-flex">
                      
                        <div class="navbar-brand-box">
                            <a href="/afiliado" class="logo logo-dark">
                                <span class="logo-sm">
                             <img src="http://admintest.alls.cloud/logo_blanco.png" class="img-responsive"/>
                                </span>
                                <span class="logo-lg">
     <img src="https://admintest.alls.cloud/logo_blanco.png" class="img-responsive"/>
                                </span>
                            </a>

                            <a href="/afiliado" class="logo logo-light">
                                <span class="logo-sm">
     <img src="https://admintest.alls.cloud/logo_blanco.png" class="img-responsive"/>
                                </span>
                                <span class="logo-lg">
         <img src="https://admintest.alls.cloud/logo_blanco.png" class="img-responsive"/>
                                </span>
                            </a>
                        </div>

                        <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                            <i class="fa fa-fw fa-bars"></i>
                        </button>


                  
                    </div>

                       <div class="d-flex">
                   <div class="dropdown d-inline-block" id="monto"> 
                          
                        </div>
                        
                        
                        <div class="dropdown d-inline-block">
                              <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <span class="d-none d-xl-inline-block ms-1" key="t-henry"><b>Afiliado:</b> </span>
                         </button>
                        </div>
                        
                        <div class="dropdown d-inline-block">
                            <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              
                                    
                                   
                                    <svg class="rounded-circle header-profile-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 215 "><defs></defs><title>Recurso 3</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M36.49,110.64c-5.82,1.72-11.63,3.48-17.47,5.15-3,.88-5.11,0-6.52-2.74Q6.74,101.7,1,90.32A106.17,106.17,0,0,0,0,105a104.8,104.8,0,0,0,39,81.68V112.47C39,109.89,39,109.89,36.49,110.64Z"></path><path class="cls-1" d="M60.4,44.62c1.42-.27,2.83-.58,4.24-.9,5-1.1,6.88.05,8.22,5C78.35,69,101.41,79.23,120,69.67a32.8,32.8,0,0,0,17.25-21.26c1.25-4.5,3.26-5.73,7.84-4.77.49.1,1,.24,1.48.34,8.57,1.8,17.2,3.59,25.23,7.07C182,55.46,192,60.16,202.06,64.86A105,105,0,0,0,7.89,65c4.52-2,9-4.13,13.48-6.31C33.88,52.58,46.65,47.27,60.4,44.62Z"></path><path class="cls-1" d="M190.35,115.64c-5.61-1.66-11.22-3.35-16.83-5-2.47-.74-2.47-.73-2.47,1.92v74.1a105.06,105.06,0,0,0,38-96.12q-5.52,10.92-11,21.84C196.13,116,194.22,116.78,190.35,115.64Z"></path></g></g></svg>
                                    
                                <span class="d-none d-xl-inline-block ms-1" key="t-henry">{data.name}</span>
                                <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                             <div class="dropdown-menu dropdown-menu-end">
                               
                             <Link className="dropdown-item" to="/afiliado/perfil"><i class="bx bx-user font-size-16 align-middle me-1"></i><span key="t-profile">Mi Perfil</span> </Link>
                             <Link className="dropdown-item" to="/afiliado/estado-cuenta"><i class="bx bx-dollar-circle
 font-size-16 align-middle me-1"></i><span key="t-profile">Estado de Cuenta</span> </Link>

                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="#"><i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Salir</span></a>
                            </div>
                        </div>

                   
            
                    </div>
                </div>
            </header>
            <div class="topnav">
               
                <div class="container-fluid">
                <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

<div class="collapse navbar-collapse" id="topnav-menu-content">
    <ul class="navbar-nav">

        <li class="nav-item dropdown">



            <Link className="nav-link arrow-none" to="/afiliado/transacciones"><i class="bx bx-home-circle me-2"></i><span key="t-dashboards"> Transacciones</span> </Link>

     
        </li>

           <li class="nav-item dropdown">
        <a class="nav-link  arrow-none" href="#" id="topnav-dashboard" role="button">
                <i class="bx bx-home-circle me-2"></i><span key="t-dashboards">Anunciantes</span> 
            </a>
     
        </li>

        

      
        

        

    </ul>
</div>
</nav>                </div>
            </div>
            </div>
  );
};

export default HeaderAfiliado;
