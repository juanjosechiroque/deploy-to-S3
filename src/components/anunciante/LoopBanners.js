import React, {useRef, useState, useEffect  } from 'react';
import axios from '../../api/axios';
const ADVERTISERS_URL = '/advertisers/644c3254b469b5e444c4bb53/banners';

function BannerList() {
    const [banners, setBanners] = useState([]);
  
    useEffect(() => {
      axios.get(ADVERTISERS_URL)
        .then(response => {
          setBanners(response.data?.data);
          console.log(response.data?.data)
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <div className='className="table-responsive'>
      <table className="table align-middle table-striped table-nowrap mb-0">
      <thead className="table-dark">
        <tr>
        <th>Imágen</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>URL Destino</th>
          <th>Fecha creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>


      {banners.map((banner) => (
            <tr key={banner.name}>
                   <td>
                <a href={banner.url_content}>
                  <img width={100} src={banner.url_content} alt={banner.name} />
                </a>
              </td>
              <td>{banner.name}</td>
              <td>{banner.status ? "Activo" : "Inactivo"}</td>
              <td>{banner.url_destination}</td>
  
              <td>{banner.created_at}</td>
             
              <td> <i className='bx bx-trash iconos'></i>      <i className='bx bx-edit iconos'></i> </td>
            </tr>
          ))}
           </tbody>
      </table>
    </div>
    );
  }

  export default BannerList;
