'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Python', 'C++', 'Javascript'],
  datasets: [
    {
      label: 'proficiency in %',
      data: [70, 50, 90],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 0
    }
  ]
};

const options = {
  plugins: {
    legend: {
      display: false
    }
  }
}

const Chart = () => {
  return <Doughnut className='mx-auto' data={data} options={options} />;
}

export default Chart;