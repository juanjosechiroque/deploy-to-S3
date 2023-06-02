import React, { useState, useEffect } from "react";
import axios from "axios";

const TransaccionesDash = () => {
  const [transacciones, setTransacciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${apiUrl}/json/transacciones.json?v=2`);
        setTransacciones(response.data['registros']);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table class="table align-middle table-striped table-nowrap mb-0">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>ID orden</th>
            <th>Monto</th>
            <th>Commission</th>
            <th>C. WinWin</th>
            <th>ID Afiliado</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map(transaccion => (
            <tr key={transaccion.id}>
              <td>{transaccion.id}</td>
              <td>{transaccion.date}</td>
              <td>{transaccion.order_id}</td>
              <td>{transaccion.total_amount}</td>
              <td>{transaccion.commission}</td>
              <td>{transaccion.commission_winwin}</td>
              <td>{transaccion.affiliate_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransaccionesDash;
