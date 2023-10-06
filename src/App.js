import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Exercises, Food, GoalTracker } from "./pages";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Fitness Tracker App</h1>
      <Navbar />
      <Routes className="list">
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/food" element={<Food />} />
        <Route path="/goaltracker" element={<GoalTracker />} />
      </Routes>
    </div>
  );
}

export default App;
