import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/Homepage';
import StatsPage from './components/StatsPage';
import Header from "./components/Links";
import Datepage from "./components/pages/DateInTime";
import './App.css';
import Landing from "./components/pages/Landing";
import PlayerPage from  "./components/player/PlayerPage"
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState("LeBron James")
  const [display, setDisplay] = useState(true);

  const reloadChild = (name) => {
    setDisplay(false);
    console.log(name)
    setPlayer(name);
    setDisplay(true);
    console.log(player) 
  }

  return (
    <div className="flex flex-col min-h-screen">
      {<Header/>}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/players" element={<p> I want this to be the url where you search for players</p>}/>
          <Route path="/date" element={<Datepage/>}/>
          <Route path="/performance" element={<StatsPage/>}/>
          <Route path= "/players/:playerId" element={display ? <PlayerPage stateChanger={setPlayer} playerName={player} /> : null}/>
          <Route path= "/landing" element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
