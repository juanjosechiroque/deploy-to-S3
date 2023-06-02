import React, { useState, useEffect } from 'react';
import HeaderAnunciante from "../../components/header_afiliado";
import axios from '../../api/axios';
const AFFILIATES_URL = '/affiliates/644c2f6132a2418bd6d3d746';


function MyPerfil() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(AFFILIATES_URL)
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
                                    <p>Aquí tienes tu información personal.</p>
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
              

                
            </div>         
            
            <div class="col-xl-8">

            <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <h3 class="mb-4">Datos personales</h3>
                <div class="table-responsive" id="miPerfilDiv">
               
               <div><b>Pais: </b>Perú</div>
               <div><b>Nombre: </b>{data.name}</div>
               <div><b>DNI: </b>121212</div>
               <div><b>Email: </b>{data.email}</div>
               <div><b>WhatsApp: </b>+5199888282</div>
               <div><b>Facebook: </b>facebook/juanperez</div>
               <div><b>Web Propia: </b>juanperez.com</div>
               <div><b>Teléfono de Contacto</b>: +519988888</div>
               <div><b>Banco: </b>BCP</div>
               <div><b>Número de Cuenta: </b>1231231231231</div>
               <div><b>Número de Cuenta Int: </b>002020202</div>
               
        

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
