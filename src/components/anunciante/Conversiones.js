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
                <h3>Reporte de Transacciones</h3>
                <div className="table-responsive top10trans">
                  <div className="table align-middle table-nowrap mb-0">
                    <table className="table align-middle table-striped table-nowrap mb-0">
                      <thead className="table-dark">
                        <tr>
                          <th>Afiliado</th>
                          <th>Orden</th>
                          <th>Total</th>
                          <th>Comisión</th>
                          <th>Comisión WinWin</th>
                          <th>Fecha</th>
                          <th>Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td><b>{getAffiliateType(item.affiliate_id)}</b></td>
                            <td>{item.order_id}</td>
                            <td>S/ {item.amount.toFixed(2)}</td>
                            <td>S/ {item.commission.toFixed(2)}</td>
                            <td>S/ {item.commission_winwin.toFixed(2)}</td>
                            <td>{formatDate(item.timestamp)}</td>
                            <td dangerouslySetInnerHTML={{__html: getMonto( item.commission_winwin) } }></td>
                          </tr>
                        ))}
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
