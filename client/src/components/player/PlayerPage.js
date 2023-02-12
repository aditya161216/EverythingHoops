import React from "react";
import 'react-tabs/style/react-tabs.css';
import PlayerTabs from "./playerTabs.js";
import { useEffect , useState} from "react";

// options with default values
const options = {
  defaultTabId: 'settings',
  activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
  inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
  onShow: () => {
    console.log('tab is shown');
  }
};


const PlayerPage = ({playerName}) => {
  //search for full name:

  const [player, setPlayer] = useState(null);
  const [games, setGames] = useState([]);
  const [visible, setvisible] = useState(false);

  const renderUrl = () => {
    let number = playerName.replaceAll(" ", "%20");
    return number
  }

  const changeString = () => {
    let number = playerName.replaceAll(" ", "%20");
    console.log(number);
    let url = "http://127.0.0.1:8000/player?player_name="
    let concat = url.concat(number);
    console.log(concat)
    return concat
}

const createIDString  = () => {
    let url = "https://www.basketball-reference.com/req/202106291/images/players/"
    let url2 = url.concat(String(player)).concat(".jpg")
    console.log(url2)
    return url2
}


//render the image
useEffect( () =>
{fetch(changeString(), {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then(res=> res.json()).then(data => setPlayer(data.player_id))}, [])
//render the stats
useEffect( () =>
{fetch("http://127.0.0.1:8000/player/last10games?player_name=" + renderUrl(), {mode: 'cors', headers: {'Access-Control-Allow-Origin': '*'}}).then(res=> res.json()).then(data => {
  setGames(data)
  setvisible(true)
})}, [])

//


  return (
    <div className="flex flex-col gap-x-4 gap-y-8">
      <div className="flex bg-orange-400 justify-center space-between"> 
        <img className="" src={String(createIDString())}/>
        <div className="flex flex-col font-sans text-6xl font-bold content-center">
          {playerName}
          {/* Maybe render more of their item*/}
        </div>
      </div>

      <div className="flex justify-center w-full gap-x-8">
        <span>Search For an NBA Player:</span>
        <input type="email" />
        <button className="bg-gray-300">Submit!</button>
      </div>

      <div className="flex flex-col item-center content-center px-64">
        {visible ? <PlayerTabs games = {games}/> : null}
      </div>

      <div>
        {/* <ul>
           {games.map(e =>
          <tr> {JSON.stringify(e)}</tr>)}
        </ul> */}
      </div>

    </div>
  )
}



export default PlayerPage;