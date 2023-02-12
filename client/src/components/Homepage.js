import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  //Points Rebounds, and Assists are set to 0/1, but if updated it w
    const [teams, setTeams] = useState(1);
    const [dates, setDates] = useState(1);
    const [points, setPoints] = useState(0);
    const [rebounds, setRebounds] = useState(0);
    const [assists, setAssists] = useState(0);

    const nbateams = [];
    const [data, setData] = useState([{}])

    //quick check for itf the data is undefined/didn't match

    useEffect( () =>
    {fetch('http://127.0.0.1:8000/boxscore').then(res=> console.log(res.json())).then (data => setData(data))}, [])

    //spaces url encode them
    useEffect( () =>
    {fetch('http://127.0.0.1:8000/player?player_name=LeBron%20James&height=90', {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then(res=> console.log(res.json())).then(data => console.log(data))}, [])

    //if undefined, 

    const beginQuery = () => {
      //fetch('http://127.0.0.1:5000/boxscore').then(res => res.json()).then(data => setData(data))
      //console.log(data)
  
    }    

    return (
          <div className="flex flex-col h-screen w-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="flex flex-row font-sans text-2xl font-bold">
                Input a specific Totals for Points, Rebonds, and Assists, to see if this statline has been achieved before! {console.log(data)}
              </div>

              <div className="flex flex-row gap-x-16 font-sans">
                <div className="flex flex-row ">
                  <span>Points</span>
                  <input className="pl-4 w-24" vaule={points} type="number" placeholder="0" onChange={(e) => setPoints(e.target.value)}></input>
                </div>

                <div className="flex flex-row">
                  <span>Rebounds</span>
                  <input className="pl-4 w-24"vaule={rebounds} type="number" placeholder="0" onChange={(e) => setRebounds(e.target.value)}></input>
                </div>

                <div className="flex flex-row">
                  <span>Assists</span>
                  <input className="pl-4 w-24" vaule={assists} type="number" placeholder="0" onChange={(e) => setAssists(e.target.value)}></input>
                </div>
              </div>            


              <div className="flex flex-col">
                <span className="font-bold"> Optional:</span>
                <div className="flex">
                  Select a Range for how long you want to match this performance: 
                  <input vaule={dates} type="number" placeholder="1" onChange={(e) => setDates(e.target.value)}></input>
                  {console.log(dates)}
                </div>  

                <div className="flex">
                  Select for if you want this performance against a certain Team
                  {/* TODO: create the drop down for this */}
              </div>

              <button onClick={ () => beginQuery()}>Submit!</button>
          </div>
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

