import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/Homepage';
import StatsPage from './components/StatsPage';
import Header from "./components/Links";
import Datepage from "./components/pages/DateInTime";
import PlayerStats from "./components/player/PlayerStats";
import './App.css';
import PlayerGraphs from "./components/player/PlayerGraphs";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {<Header/>}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/players" element={<p> I want this to be the url where you search for players</p>}/>
          <Route path="/performance" element={<StatsPage/>}/>
          <Route path= "/players/:playerId/Stats" element={<PlayerStats/>}/>
          <Route path= "/players/:playerId/Graphs" element={<PlayerGraphs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
