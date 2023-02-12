import React, { useEffect , useState} from "react";



//take a date prop to eventually use?
const Performance = ( {name, Points, Rebounds, Assists} ) => {
    console.log(name)
    //in here fetch for the data with the date, and then render the items from the resulting query.
    const [playerid, setPID] = useState(0);

    const changeString = () => {
        let number = name.replaceAll(" ", "%20");
        console.log(number);
        let url = "http://127.0.0.1:8000/player?player_name="
        let concat = url.concat(number);
        console.log(concat)
        return concat
    }

    const createIDString  = () => {
        let url = "https://www.basketball-reference.com/req/202106291/images/players/"
        let url2 = url.concat(String(playerid)).concat(".jpg")
        console.log(url2)
        return url2

    }

    useEffect( () =>
    {fetch( changeString(), {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then(res=> res.json()).then(data => setPID(data.player_id))}, [])

    const getData = async() => {
        fetch(``)
    }

    return (
    <div className="flex"> 
        <img width="200" height="200" src={String(createIDString())}/>
        <div className="flex flex-col">
             <span>Points: {Points} </span> 
             <span>Rebounds: {Rebounds} </span> 
             <span>Assists: {Assists} </span> 
        </div>
    </div>
    );

}

export default Performance