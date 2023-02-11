import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
