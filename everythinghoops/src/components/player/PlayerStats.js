import React from "react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => 7),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => 5),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const PlayerStats = () => {

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex p-t-10">
        <img clasName="" width="200" height="200" src="https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png" />
      </div>

      <div className="flex">
        <div className="flex">
          Title
        </div>
      </div>

      <div className="flex">
        Stats/Graphs
      </div>

      <div className="flex">
        Stats/Graphs
      </div>


      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a href="/players/:playerId/Stats" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Stats</a>
          </li>
          <li class="mr-2">
            <a href="/players/:playerId/Graphs" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Graphs</a>
          </li>
          <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Temp</a>
          </li>
          <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Temp</a>
          </li>
          <li>
            <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
          </li>
        </ul>
      </div>

    </div>
  );

}

export default PlayerStats;