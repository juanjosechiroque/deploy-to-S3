import React, { useState, useEffect } from 'react';
import HeaderAnunciante from "../../components/header_anunciante";
import axios from '../../api/axios';
const AFFILIATES_URL = '/advertisers/644c3254b469b5e444c4bb53/affiliates/report';

function AfiliadosReport() {
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
   
    <div className="main-content">
    <div className="page-content">
        <div className="container-fluid">
        <div className='card'>
             <div className="card-body">
      <h3>Reporte de Afiliados</h3>
      <div className='table-responsive top10trans'>
    <div className='table align-middle table-nowrap mb-0'>
    <table className='table align-middle table-striped table-nowrap mb-0'>
    <thead className='table-dark'>
          <tr>
            <th>Affiliate ID</th>
            <th>Total Sales</th>
            <th>Total Commission</th>
            <th>Total Orders</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.affiliateId}</td>
              <td>{item.totalSales}</td>
              <td>{item.totalCommission}</td>
              <td>{item.totalOrders}</td>
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

export default AfiliadosReport;
