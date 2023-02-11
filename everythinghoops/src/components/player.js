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
  

const Player = () => {

    return (
        <div className="flex flex-col w-full h-full gap-4">
            <div className="flex p-t-10">
                <img clasName="" width="200" height="200"src="https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png"/>
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
        </div>
    );

}

export default Player;