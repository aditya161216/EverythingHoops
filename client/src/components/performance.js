import React, { useEffect , useState} from "react";

//take a date prop to eventually use?
const Performance = ( {name} ) => {
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

    const createIDString  = (id) => {
        console.log(id)
        let url = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629630.png"
        let url2 = url.concat(String(id)).concat(".png")
        console.log(url2)
        return url2

    }

    useEffect( () =>
    {fetch( changeString(), {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then(res=> res.json()).then(data => createIDString(parseInt(data.player_id)))}, [])

    return (
    <div className="flex"> 
    {console.log(playerid)}
        <img width="200" height="200" src={String(createIDString())}/>
        <div className="flex flex-col">
             <span>Points: 5 </span> 
             <span>Points: 5 </span> 
             <span>Points: 5 </span> 
        </div>
    </div>
    );

}

export default Performance