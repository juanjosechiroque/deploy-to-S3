import React, { useRef, useState, useEffect  } from 'react';

import ApexCharts from 'apexcharts';
import 'apexcharts/dist/apexcharts.css';
import Cookies from 'js-cookie';
import axios from '../api/axios';
const AFFILIATES_URL = '/affiliates/644c2f6132a2418bd6d3d746/conversions/report?start=2023-04-01&end=2023-05-30';

const client_ww = Cookies.get('client_ww');

const ViewGrafico = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = AFFILIATES_URL;
        console.log({apiUrl})
        const response = await axios.get(`${apiUrl}`);
        setData(response.data['data']);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(data)) {
      var fechas = [];
      var montos = [];
      for (var i = 0; i < data.length; i++) {
        fechas.push(data[i].date);
        montos.push(data[i].totalAmount);
      }
      console.log({ fechas, montos });
    } else {
      console.error('Error: "data" no es un array.');
    }
    if (data) {
      var options = {
        chart: {
          type: 'bar',
          height: 375
        },
        series: [
          {
            name: 'Transacciones',
            data: montos
          }
        ],
        xaxis: {
          categories: fechas,
          labels: {
            formatter: function (value) {
              return value.toLocaleString('es-PE', {
                style: 'currency',
                currency: 'PEN'
              });
            }
          }
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toLocaleString('es-PE', {
                style: 'currency',
                currency: 'PEN'
              });
            }
          }
        }
      };

      const chart = new ApexCharts(
        document.querySelector('#chart'),
        options
      );
      chart.render();
    }
  }, [data]);

  return (
    <div>
      {data ? (
        <div id="chart"></div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ViewGrafico;
