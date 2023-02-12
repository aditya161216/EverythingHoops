import React from "react";
import { useEffect , useState} from "react";


const PlayerHeader = ({playerName}) => {
    const [player, setPlayer] = useState(null);

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

    return (
    <div className="flex flex-col gap-4">
        <div className="flex p-t-10 bg-orange-400 h-56">
          <div className="flex flex-row p-t-10 pl-64 whitespace-normal">
            <img className="place-self-end" width="235" height="235" src={String(createIDString())} />
            <p className=""> _Player_Name_/_Player_Info_ </p>
          </div>
        </div>
    </div>
    )




}

export default PlayerHeader