"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Function to calculate the average to two decimal places
const calculateAverage = (scores) => {
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  const average = sum / scores.length;
  return average.toFixed(2); // Converts the number to a string, rounding to 2 decimal places
};

// Generate dummy scores for 50 quizzes
const scores = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

const data = {
  labels: Array.from({ length: 20 }, (_, i) => `Quiz ${i + 1}`),
  datasets: [
    {
      label: 'Quiz Performance',
      data: scores,
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const options = {
  scales: {
    x: {
      type: 'category',
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 90
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10, // Set the step size to 10
      }
    },
  },
  maintainAspectRatio: false
};


const StudentPerformanceChart = () => (
  <div style={{ overflowX: 'scroll' }} className='mt-4 px-12'>
    <h2 className='text-center font-bold text-md text-gray-700'>Student Quiz Performance</h2>
    <p className='mt-8 font-bold text-2xl text-gray-700 text-center'>Average Grade: {calculateAverage(scores)}</p>
    <div style={{ width: '2000px',height:'500px' }}>
      <Line data={data} options={options} />
    </div>
  </div>
);

export default StudentPerformanceChart;
