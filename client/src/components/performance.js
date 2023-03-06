import React, { useEffect , useState} from "react";



//take a date prop to eventually use?
//test to see if I still need to merge
const Performance = ( props ) => {

    //TODO make the error handling for date in time much better, maybe if theres an error with the fetch, render a message.

    console.log(props.name)
    //in here fetch for the data with the date, and then render the items from the resulting query.
    const [playerid, setPID] = useState(0);

    const changeString = () => {
        let number = props.name.replaceAll(" ", "%20");
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
    <div className="flex flex-col"> 
        <img width="230" height="328" className="py-8" src={String(createIDString())}/>
        <div className="flex flex-col font-poppins gap-y-1">
             <span className="text-4xl font-bold">{props.name}</span>
             <span>Points: {props.points}</span> 
             <span>Rebounds: {props.rebounds}</span> 
             <span>Assists: {props.assists}</span> 
             <span>Game Date: {props.date}</span>
        </div>
    </div>

    );

}

export default Performance