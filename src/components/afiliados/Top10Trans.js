import { useRef, useState, useEffect  } from 'react';
import { format } from 'date-fns';
import axios from '../../api/axios';
const AFFILIATES_URL = '/affiliates/644c2f6132a2418bd6d3d746/conversions/latest';


function Top10Transacciones() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(AFFILIATES_URL)
      .then(response => {
        setData(response.data.data)
    })
      .catch(error => console.error(error));
  }, []);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
  };

  return (
    <div className='table-responsive top10trans'>
    <div className='table align-middle table-nowrap mb-0'>
    <table className='table align-middle table-striped table-nowrap mb-0'>
    <thead className='table-dark'>
      <tr>
        <th>Affiliate ID</th>
      
        <th>Order</th>
        <th>Total</th>
        <th>C</th>
        <th>C. Ww</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <tbody>
      {data.map((conversion, index) => (
        <tr key={index}>
          <td>{conversion.affiliate_id}</td>
          <td>{conversion.order_id}</td>
          <td>S/ {conversion.amount}</td>
          <td>S/ {conversion.commission}</td>
          <td>S/ {conversion.commission_winwin}</td>
          <td>{formatDate(conversion.timestamp)}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  </div>
  );
}

export default Top10Transacciones;
