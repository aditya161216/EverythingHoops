import React, { useEffect } from "react";
import { useState } from "react";
import Performance from "./performance";

const HomePage = () => {
  //Points Rebounds, and Assists are set to 0/1, but if updated it w
    const [points, setPoints] = useState(0);
    const [rebounds, setRebounds] = useState(0);
    const [assists, setAssists] = useState(0);

    const [data, setData] = useState(null)
    const [visible, setVisible] = useState(false);

    const beginQuery = async() => {

      setVisible(false)
      await fetch(`http://127.0.0.1:8000/boxscore?pts=${points}&reb=${rebounds}&ast=${assists}`, {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then((res => res.json())).then(dataobject => {
        console.log(dataobject)
        setData(dataobject)
        setVisible(true)
      })
    }

    return (
          <div className="flex-1 flex-col">
            <div className="flex flex-col justify-center items-center w-full gap-y-10 pt-10">
              <div className="flex font-poppins text-2xl font-bold"> Search for a statline</div>

              <div className="flex border border-black rounded-lg font-sans">

                <div className="flex flex-col border-r border-black p-2">
                  <span>Points</span>
                  <input className="pl-4" vaule={points} type="number" placeholder="0" onChange={(e) => setPoints(e.target.value)}></input>
                </div>

                <div className="flex flex-col border-r border-black p-2">
                  <span>Rebounds</span>
                  <input className="pl-4"vaule={rebounds} type="number" placeholder="0" onChange={(e) => setRebounds(e.target.value)}></input>
                </div>

                <div className="flex flex-col p-2">
                  <span>Assists</span>
                  <input className="pl-4" vaule={assists} type="number" placeholder="0" onChange={(e) => setAssists(e.target.value)}></input>
                </div>
              </div>            

              <button className="bg-orange-400 font-sans text-white px-8 py-1 rounded-md" onClick={ () => beginQuery()}>Search</button>
              {visible ? <Performance name={data["PLAYER_NAME"]} points={data["PTS"]} rebounds={data["REB"]} assists={data["AST"]} date={data["GAME_DATE_EST"]} /> : null}
        </div>
      </div>
    )
}

export default HomePage

