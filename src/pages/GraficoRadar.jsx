import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function GraficoRadar() {
  const data = {
    labels: ['Inovação', 'Entrega', 'Colaboração', 'Qualidade', 'Impacto'],
    datasets: [
      {
        label: 'Time A',
        data: [80, 65, 75, 90, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'Time B',
        data: [60, 75, 70, 85, 60],
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // permite altura personalizada
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Comparativo de Desempenho' },
    },
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '260px' }}>
      <Radar data={data} options={options} />
    </div>
  );
}
