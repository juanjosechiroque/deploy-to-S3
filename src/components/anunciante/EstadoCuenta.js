import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderAnunciante from "../../components/header_anunciante";
import { format } from 'date-fns';


function EstadoCuenta() {


  return (
    <section>
      <HeaderAnunciante />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Estado de cuenta</h3>
                <div className="table-responsive top10trans">
                  <div className="table align-middle table-nowrap mb-0">
                    <table className="tabla_cupones table align-middle table-striped table-nowrap mb-0">
                      <thead className="table-dark">
                        <tr>
                          <th>Operación</th>
                          <th>Destinario</th>
                          <th>Fecha</th>
                          <th>Monto</th>
                          <th>Saldo</th>
                      
                        </tr>
                      </thead>
                      <tbody>
                      

                          <tr>
                            <td><b>Abono</b></td>
                            <td>Winwin</td>
                            <td>02/04/2023 </td>
                            <td>s/ 200.00</td>
                            <td>s/ 200.00</td>
                          </tr>

                          <tr>
                            <td><b>Pago de Comisión</b></td>
                            <td>AFILIADO #1 </td>
                            <td>02/06/2023 </td>
                            <td>s/ 90.00  </td>
                            <td> s/ 110.00</td>
                          </tr>
                     

                


                      </tbody>
                    </table>
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

export default EstadoCuenta;
