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
import ReactSearchBox from 'react-search-box';
import styled from "styled-components"


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const currentPlayerData = {
    labels: [
        'PPG',
        'AST',
        'REB',
        'FG%',
        '3P%',
        'FT%',
        'STL',
        'BLK',
        'TO'

    ],
    datasets: [{
        label: 'current_player',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
}
const chartData = {
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

const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    }
};


const searchData = [
    {
        key: "Average NBA_position",
        value: "Average NBA_position"
    }
];

function add() {
    console.log("add button pressed")
}

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin:;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const RadarChartPanel = () => {
    let ChartData = currentPlayerData;
    let searchDataTest = [
        {
            key: "Average NBA_position",
            value: "Average NBA_position"
        }
    ];
    let min_date = "2003-10-05"
    return (
        <div className='flex flex-col w-full justify-content-center'>
            <Radar className="place-self-center w750"

                width={700}
                height={700}
                options={{ responsive: false }}
                data={ChartData}
            />
            <div className='flex flex-col place-self-center space-y-4'>
                <div className='flex flex-row'>
                    <div className="place-self-center">
                        <ReactSearchBox
                            placeholder="Add a player"
                            value="Doe"
                            data={searchData}
                            callback={(record) => console.log(record)}
                        />
                    </div>


                    <Button className="align-self-start mx-4" theme="blue" onClick={add}>
                        Add
                    </Button>
                </div>
                <div className='flex-col'>
                    <label for="start">Start date: </label>
                    <input type="date" id="start" name="trip-start"
                        value="2003-10-05"
                        min="2003-10-05" max="2022-12-22" />
                </div>

                <div className='flex-col'>
                    <label for="start">End date:   </label>
                    <input type="date" id="start" name="trip-start" value="2022-12-22" min="2003-10-05" max="2022-12-22" />
                </div>



            </div>

        </div>
    )
};
export default RadarChartPanel