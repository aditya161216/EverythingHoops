import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildstyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: 1,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const HistoryChartPanel = () => {
  return (
    <div className='flex flex-row w-full'>
      <div className='w-3/4'>
        <Line
          options={options} data={data} />
      </div>

      <div className='flex flex-col'>

        <p>500 games player 
          <br>
          </br>
          300 games won
          <br>
          </br>
          200 games lost
        </p>


        <CircularProgressbar
        value = {54.01}
        text = {`54.01%`}
        strokeWidth = {5}
        />


      </div>
    </div>
  )
};
export default HistoryChartPanel