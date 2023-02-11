import React from "react";
import { useState } from "react";

const HomePage = () => {
  //Points Rebounds, and Assists are set to 0/1, but if updated it w
    const [teams, setTeams] = useState(1);
    const [dates, setDates] = useState(1);
    const [points, setPoints] = useState(0);
    const [rebounds, setRebounds] = useState(0);
    const [assists, setAssists] = useState(0);

    const nbateams = [];
    const beginQuery = async() => {

    }

    //PRA, also options to select in certain date ranges, against a certain team, if these stats have occured, these are optional,
    //certain team -> placeHolder -> all
    //certain date -> placeHolder -> range
    

    return (
          <div className="flex flex-col h-screen w-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="flex flex-row font-sans text-2xl font-bold">
                Input a specific Totals for Points, Rebonds, and Assists, to see if this statline has been achieved before!
              </div>

              <div className="flex flex-row gap-x-16 font-sans">
                <div className="flex flex-row ">
                  <span>Points</span>
                  <input className="pl-4 w-24" vaule={points} type="number" placeholder="0" onChange={(e) => setPoints(e.target.value)}></input>
                </div>

                <div className="flex flex-row">
                  <span>Rebounds</span>
                  <input vaule={rebounds} type="number" placeholder="0" onChange={(e) => setRebounds(e.target.value)}></input>
                </div>

                <div className="flex flex-row">
                  <span>Assists</span>
                  <input vaule={assists} type="number" placeholder="0" onChange={(e) => setAssists(e.target.value)}></input>
                </div>
              </div>            


              <div className="flex flex-col">
                <span> Optional:</span>
                <div className="flex">
                  Select a Range for how long you want to match this performance: 
                  <input vaule={dates} type="number" placeholder="1" onChange={(e) => setDates(e.target.value)}></input>
                  {console.log(dates)}
                </div>  

                <div className="flex">
                  Select for if you want this performance against a certain Team
                  {/* TODO: create the drop down for this */}
              </div>

              <button onClick={beginQuery}>Submit!</button>
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

//