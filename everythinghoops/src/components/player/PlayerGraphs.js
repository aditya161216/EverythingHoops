import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const data = {
  labels: [
    'ppg',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'Player',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Average NBA _Position_',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};


const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 800
      }
    }
  }
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontSize: 30
  }
};




const PlayerGraphs = () => {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex p-t-10 bg-orange-400">
        <div className="flex flex-row p-t-10 pl-96">
          <img className="" width="200" height="200" src="https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png" />
          <p className ="text-white"> _Player_Name_ </p>
        </div>
      </div>
      

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mx-96">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a href="/players/:playerId/Stats" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page">Stats</a>
          </li>
          <li className="mr-2">
            <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Graphs</a>
          </li>
          <li className="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Temp</a>
          </li>
          <li className="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Temp</a>
          </li>
        </ul>
      </div>

      <div className="flex mx-96 ">
        <p className =""> _Player_Name_ </p>

        <div className="pt-12">
          <Radar
            width={500}
            height={500}
            options = {{maintainAspectRatio: false}}
            config={config}
            data={data}
            legend = {legend}
          />
        </div>
        
      </div>

    </div>
  );

}

export default PlayerGraphs;