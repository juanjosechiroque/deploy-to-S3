import React, { useState, useEffect } from 'react';
import HeaderAnunciante from "../../components/header_anunciante";
import { format } from 'date-fns';
import axios from '../../api/axios';
const ADVERTISERS_URL = '/advertisers/644c3254b469b5e444c4bb53/conversions';


function TransaccionesAnunciante() {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
  };

  const getAffiliateType = (affiliateId) => {
    if (affiliateId === '64533b0ab86aba50e8fb502c') {
      return 'Afiliado #1';
    } else if (affiliateId === '644c2f6132a2418bd6d3d746') {
      return 'Afiliado #2';
    }
    return 'Afiliado Desconocido';
  };

  const getMonto = (variableMonto) => {
    if (variableMonto < "2") {
      return '<span class="badge rounded-pill bg-success">PAGADO</span>';
    } else if (variableMonto > '2') {
      return '<span class="badge rounded-pill bg-warning">PENDIENTE</span>';
    }
    return '<span class="badge rounded-pill bg-danger">CANCELADO</span>';
  };

  return (
    <section>
      <HeaderAnunciante />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Cupones</h3>
                <button className="btn btn-primary w-md boton_agregar_cupon">CREAR CUPONES</button>

                <div className="table-responsive top10trans">
               
                  <div className="table align-middle table-nowrap mb-0">
                    <table className="tabla_cupones table align-middle table-striped table-nowrap mb-0">
                      <thead className="table-dark">
                        <tr>
                          <th>Nombre de Cupon</th>
                          <th>Asignado</th>
                          <th>Comisión</th>
                          <th>Fecha</th>
                          <th>Acciones</th>
                      
                        </tr>
                      </thead>
                      <tbody>
                      
                          <tr>
                            <td><b>Cupon1</b></td>
                            <td>Afiliado #1</td>
                            <td>3.3 %</td>
                            <td>08/05/2023</td>
                            <td> <i className='bx bx-trash iconos'></i>      <i className='bx bx-edit iconos'></i></td>
                          </tr>

                          <tr>
                            <td><b>Cupon2</b></td>
                            <td>Afiliado #2</td>
                            <td>2.0 %</td>
                            <td>07/06/2023</td>
                            <td> <i className='bx bx-trash iconos'></i>      <i className='bx bx-edit iconos'></i></td>
                          </tr>
                     

                          <tr>
                            <td><b>Cupon3</b></td>
                            <td>Afiliado #1</td>
                            <td>1.3 %</td>
                            <td>18/05/2023</td>
                            <td> <i className='bx bx-trash iconos'></i>      <i className='bx bx-edit iconos'></i></td>
                          </tr>

                          <tr>
                            <td><b>Cupon4</b></td>
                            <td>Afiliado #2</td>
                            <td>1.0 %</td>
                            <td>07/09/2023</td>
                            <td> <i className='bx bx-trash iconos'></i>      <i className='bx bx-edit iconos'></i></td>
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

export default TransaccionesAnunciante;
