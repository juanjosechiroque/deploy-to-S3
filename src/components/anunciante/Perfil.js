import React, { useState, useEffect } from 'react';
import HeaderAnunciante from "../../components/header_anunciante";
import axios from '../../api/axios';
const ADVERTISERS_URL = '/advertisers/644c3254b469b5e444c4bb53';



function MyPerfil() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(ADVERTISERS_URL)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section>

<HeaderAnunciante />
   
<div class="main-content">

<div class="page-content">
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">Perfil</h4>

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-4">
                <div class="card overflow-hidden">
                    <div class="bg-primary bg-soft">
                        <div class="row">
                            <div class="col-7">
                                <div class="text-primary p-3">
                                    <h5 class="text-primary">Bienvenidos!</h5>
                                    
                                </div>
                            </div>
                            <div class="col-5 align-self-end">
                                <img src="./assets/images/profile-img.png" alt="" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="avatar-md profile-user-wid mb-4">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZAV6OLHHc8z7I4OaVD0ljzGdeFP0tGreDi3yMFwLBZRXWt7Nh93hC8uRt-UnawErZBw&usqp=CAU" alt="" class="img-thumbnail rounded-circle"/>
                                </div>
                                <h5 class="font-size-15 text-truncate">{data.name}</h5>
                                <p class="text-muted mb-0 text-truncate">Anunciante</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-md-6">
                        <div class="card mini-stats-wid">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <p class="text-muted fw-medium mb-2">Comisión</p>
                                        <h4 class="mb-0">{data.commission}%</h4>
                                    </div>

                                    <div class="flex-shrink-0 align-self-center">
                                        <div class="mini-stat-icon avatar-sm rounded-circle bg-primary">
                                            <span class="avatar-title">
                                                <i class="bx bx-check-circle font-size-24"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card mini-stats-wid">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <p class="text-muted fw-medium mb-2">Estado</p>
                                        <h4 class="mb-0">Activo</h4>
                                    </div>

                                    <div class="flex-shrink-0 align-self-center">
                                        <div class="avatar-sm mini-stat-icon rounded-circle bg-primary">
                                            <span class="avatar-title">
                                                <i class="bx bx-hourglass font-size-24"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                
            </div>         
            
            <div class="col-xl-8">

   
                <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h3 class="mb-4">Datos Personales</h3>
                                        <div class="table-responsive">
                                            <table class="table align-middle table-nowrap mb-0 table-striped" id="table-container">
                                        
                                        
                                            <tbody><tr><th>País</th><td>Peru</td></tr><tr><th>Nombre de la empresa</th><td>ABC Corporation</td></tr><tr><th>RUC</th><td>20123456789</td></tr><tr><th>Dirección de facturación</th><td>Av. Los Conquistadores 123</td></tr><tr><th>Distrito</th><td>San Isidro</td></tr><tr><th>Provincia</th><td>Lima</td></tr><tr><th>Departamento</th><td>Lima</td></tr><tr><th>Email de contacto</th><td>contact@abccorporation.com</td></tr><tr><th>Persona de contacto</th><td>Juan Salas</td></tr><tr><th>Sitio web</th><td>https://www.abccorporation.com</td></tr><tr><th>Teléfono</th><td>+51999999999</td></tr></tbody></table>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
 </div>

             
            </div>
        </div>
    

    </div> 
</div>


</div>



    </section>
  );
}

export default MyPerfil;
