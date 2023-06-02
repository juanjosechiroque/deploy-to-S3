import React from 'react';
import LoopBanners from "./LoopBanners";

const ListarBanners = () => {

    return (
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                <div className='card'>
             <div className="card-body">
             <h3>Lista de Banners</h3>

  <button className="btn btn-primary w-md boton_agregar">AGREGAR BANNER</button>

                    <LoopBanners/>
                    </div></div>
            </div>
        </div>
        </div>
    );
};

export default ListarBanners;