import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/Homepage';
import Header from "./components/Links";
import Player from "./components/player";
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {<Header/>}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/players" element={<p> I want this to be the url where you search for players</p>}/>
          <Route path= "/players/:playerId" element={<Player/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
