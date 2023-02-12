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
        setVisible(false)
        await fetch(`http://127.0.0.1:8000/date?date=${year}-${month}-${day}`, {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then((res => res.json())).then(dataobject => {
          console.log(dataobject)
          sPlayer(dataobject)
          setVisible(true)
        })
    }


    //maybe just set background to a color, and then upload an image ontop of it?
    //on submit we convert it to a specific type of date, and then pass it into as a prop?

    //when we get a prop we take the attributes and then fetch the query, and then with the result, we then display the values for each

    return (
        <div className="flex">
            <div className="flex flex-col">
                <span> Welcome! Todays Date is: 2/12</span>

                <span>On this Date, The Best NBA Performance Was:</span>

                {data ? <Performance name={data["PLAYER_NAME"]}/>: null}
            
                <div>
                    Input your values below to find the next best players  *Single digit numbers must start with 0*
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <span>Month</span>
                            <input className="w-24" vaule={day} type="number" placeholder="1" onChange={(e) => setDay(e.target.value)}></input>
                        </div>

                        <div className="flex flex-row">
                            <span>Day</span>
                            <input className="w-24" vaule={month} type="number" placeholder="1" onChange={(e) => setMonth(e.target.value)}></input>
                        </div>


                        <div className="flex flex-row">
                            <span>Year</span>
                            <input className="w-24" vaule={year} type="number" placeholder="1" onChange={(e) => setYear(e.target.value)}></input>
                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={e => beginQuery()}> Press ME!</button>
                    {visible ? <Performance name={player["PLAYER_NAME"]}/> : null}
                </div>

            </div>
        </div>
    )

}

export default Landing;