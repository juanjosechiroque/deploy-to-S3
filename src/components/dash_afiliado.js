import React, { useState, useEffect } from 'react';
import ViewGrafico from './graphapi_afiliado';
import Top10Transacciones from './afiliados/Top10Trans';

import axios from '../api/axios';
const AFFILIATES_URL = '/affiliates/644c2f6132a2418bd6d3d746/stats?start=2023-04-01&end=2023-05-30';

const DashAfiliado = () => {

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
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">

                    <div class="row">

                        <div class="col-lg">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="mb-4">Total</h5>
                                    <div id="total-amount" class="box_resumen"><span><b> S/ {data.totalAmount}</b> <em>Total en un rango de 30 días.</em></span>
                                        <i class="mdi mdi-currency-usd-circle-outline"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="mb-4">Total ordenes</h5>
                                    <div id="ordenes-count" class="box_resumen"><span><b> {data.totalOrders}</b> <em>Total en un rango de 30 días.</em></span>
                                        <i class="dripicons-to-do"></i>
                                    </div>

                                </div>
                            </div>
                        </div>

                

                        <div class="col-lg">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="mb-4">Total Afiliados</h5>
                                    <div id="afiliados-count" class="box_resumen">
                                        <span><b>{data.totalAdvertisers}</b> <em>Total en un rango de 30 días.</em></span>
                                        <i class="mdi mdi-account-star"></i>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>




                    <div class="row">
                        <div class="col-lg-5">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="mb-4">Ventas realizadas</h5>
                                    
                                    <ViewGrafico/>
                                </div>
                                </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="mb-4">Últimas 10 transacciones</h5>
                                   
                                   <Top10Transacciones/>
                                </div>
                                </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashAfiliado;