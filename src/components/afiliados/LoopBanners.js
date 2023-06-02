import React, {useRef, useState, useEffect  } from 'react';
import axios from '../../api/axios';
const AFFILIATES_URL = '/advertisers/644c3254b469b5e444c4bb53/banners';

function BannerList() {
    const [banners, setBanners] = useState([]);
  
    useEffect(() => {
      axios.get(AFFILIATES_URL)
        .then(response => {
          setBanners(response.data?.data);
          console.log(response.data?.data)
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <div className="row">
        {banners.map(banner => (
          <div key={banner._id} className='col-xl-4'>
             <div className='card'>
             <div className="card-body">
            <h4 className='card-title'>{banner.name}</h4>
            <img className='img-thumbnail' src={banner.url_content} alt={banner.name} data-holder-rendered="true" width="100%" />
            <a href="{banner.url_destination}" className='badge rounded-pill badge-soft-info'>{banner.url_destination}</a>
            </div>
          </div>
          </div>
        ))}
      </div>
    );
  }

  export default BannerList;
