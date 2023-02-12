import React, { useEffect , useState} from "react";

//take a date prop to eventually use?
const Performance = () => {
    //in here fetch for the data with the date, and then render the items from the resulting query.
    

    return (
    <div className="flex"> 
        <img width="200" height="200" src="https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png"/>
        <div className="flex flex-col">
             <span>Points: 5 </span> 
             <span>Points: 5 </span> 
             <span>Points: 5 </span> 
        </div>
    </div>
    );

}

export default Performance