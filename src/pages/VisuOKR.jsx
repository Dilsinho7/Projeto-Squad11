import React from 'react';
import { Bar } from 'react-chartjs-2';
import GraficoRadar from './GraficoRadar';
import styles from './VisuOKR.module.css';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function VisuOKR() {
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
    <div className={styles.container}>
      <div className={styles.graficosWrapper}>
        {/* Gráfico de Barras */}
        <div className={styles.graficoSection}>
          <div className={styles.tituloContainer}></div>
          <div className={styles.graficoContainer}>
            <Bar data={data} options={options} />
          </div>
        </div>

        {/* Gráfico de Radar */}
        <div className={styles.graficoSection}>
          <div className={styles.tituloContainer}></div>
          <div className={styles.graficoContainer}>
            <GraficoRadar />
          </div>
        </div>
      </div>
    </div>
  );
}
