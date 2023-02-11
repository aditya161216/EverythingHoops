import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

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

const HomePage = () => {

    //title
    //input fields

    //below we render the actual results, redirect to different path
    
    //different link to other pages? 

    //player name line graphs and regressions, 
    //at least this many points rebounds and etc., a date for a specific time

    //enter a data, and gets the best performance on that data, if its valid.

    //link to other 3 pages, 

    //on submit, after we supply the values, we get the actual 

    

    return (
        <div className="flex flex-col">
            <div className="">
                Input Points Rebounds Assists
            </div>

            <div className="flex ">
                <input type="number" />
            </div>

            <div className="flex">
                <Bar options={options} data={data} />
            </div>

        </div>
    )
}

export default HomePage
//find an open library for generating

//API calls, sql db, 3 layer thing, web app, front end middletier-> configures hooking up with backend, express(node, python whatever we want)
//react front end python middle tier(flask) -> http server with endpoints that hit up database and backend;

//going to have db, query players points, restful api, player/score , pass in paramter playerid=x, typescore, and take those values
//and middle tier generates qeury to db, and vega will generate the json compnoent, and then we render it on front end

//