'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Python', 'C++', 'Javascript'],
  datasets: [
    {
      label: 'Proficiency %',
      data: [70, 50, 90],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 2,
      hoverOffset: 6,
    },
  ],
};

const options = {
  animation: {
    animateScale: true,
    animateRotate: true,
    duration: 1000,
    easing: 'easeInOutQuart' as const,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: { label: string; parsed: number }) =>
          ` ${context.label}: ${context.parsed}%`,
      },
    },
  },
  cutout: '68%',
};

const Chart = () => {
  return <Doughnut data={data} options={options} />;
};

export default Chart;
