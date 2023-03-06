import React, { useEffect , useState} from "react";
import Performance from "../performance";

const Landing = () => {
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2000);

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(null);
    const [player, sPlayer] = useState(null)

    
    const date = () => {
        let today = new Date();
        const day = String(today.getDate()).padStart(2, '0')
        const month = String(today.getMonth() + 1).padStart(2, '0');

        today = 2020 + "-" + month + "-" + day;
        today = String(today);
        let url = 'http://127.0.0.1:8000/date?date='.concat(today)
        console.log(url)
        return url
    }
    

    const initial = async() => {
        await fetch( date(), {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then((res => res.json())).then(dataobject => {console.log(dataobject)
            setData(dataobject)})
    }

    useEffect( () => initial, []);
    
    

    const beginQuery = async() => {
        //todo try catch this, where if it fails, let the user know
        setVisible(false)
        await fetch(`http://127.0.0.1:8000/date?date=${year}-${month}-${day}`, {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then((res => res.json())).then(dataobject => {
          console.log(dataobject)
          sPlayer(dataobject)
          setVisible(true)
        })
    }

    let currentMonth= new Date().getMonth() + 1
    let currentDay = new Date().getDate()

    return (
        <div className="flex p-10 justify-between">
                <div className="flex flex-col ">
                    <span> Welcome! Todays Date is: {currentMonth}/{currentDay}</span>
                    <br/>
                    <span>On this Date, The Best NBA Performance Was:</span>
                    <div className="flex gap-40">
                        {data ? <Performance name={data["PLAYER_NAME"]} points={data["PTS"]} rebounds={data["REB"]} assists={data["AST"]} date={data["GAME_DATE_EST"]}/>: null}

                        {visible ? <Performance name={player["PLAYER_NAME"]} points={player["PTS"]} rebounds={player["REB"]} assists={player["AST"]} date={player["GAME_DATE_EST"]}/> : null}
                    </div>
                </div>

            
                <div className="bg-gray-300 rounded-md p-8">
                    <span className="font-bold"> Search for another Date: </span>
                    <div className="flex flex-col font-poppins">
                        <div className="flex flex-row">
                            <span>Month</span>
                            <input className="rounded-md" vaule={day} type="number" placeholder="1" onChange={(e) => setDay(e.target.value)}></input>
                        </div>

                        <div className="flex flex-row">
                            <span>Day</span>
                            <input className="rounded-md" vaule={month} type="number" placeholder="1" onChange={(e) => setMonth(e.target.value)}></input>
                        </div>


                        <div className="flex flex-row">
                            <span>Year</span>
                            <input className="rounded-md" vaule={year} type="number" placeholder="1" onChange={(e) => setYear(e.target.value)}></input>
                        </div>
                    </div>

                    <span className="bg-orange-400 font-poppins text-white rounded-md" onClick={e => beginQuery()}> Search</span>
                </div>
        </div>
    )

}

export default Landing;