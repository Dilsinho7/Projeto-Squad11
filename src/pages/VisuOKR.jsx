import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function VisualizacaoOKRs() {
  const data = {
    labels: ['Objetivo 1', 'Objetivo 2', 'Objetivo 3'],
    datasets: [
      {
        label: 'Progresso (%)',
        data: [70, 45, 90],
        backgroundColor: ['#f44336', '#1565c0', '#f44336'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Progresso dos OKRs' },
    },
  };

return (
    <div style={{ display: 'flex', padding: '2rem', alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <h2>Visualização de OKRs</h2>
        <p>Descrição dos objetivos e metas aqui...</p>
      </div>

      <div style={{ width: '50%' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}