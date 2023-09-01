import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function LineChart (){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
    const options = {
      legend: {
        display: false
      },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
          },
        },
      };
      
    
    
      const labels = ["January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const data = {
        labels: labels,
        datasets: [
        {
          axis: 'y',
          label: '',
          data: [12, 39, 40, 81, 56, 55, 40, 88, 67, 97, 54, 90],
          backgroundColor:  '#fff',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          fill: true,

        }, 
        {
            label: '',
            data: [65, 59, 84, 51, 26, 25, 40],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
    ]
      };
    return <Line options={options} data={data} />;
}
