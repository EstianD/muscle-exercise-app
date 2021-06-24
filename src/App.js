import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
// Page components
import HumanAnatomy from "./components/HumanAnatomy";
import MuscleDashboard from "./components/MuscleDashboard";
// import ExerciseDashboard from "./components/ExerciseDashboard";

function App() {
  let history = useHistory();

  const handleMuscleClick = (area) => {
    console.log("clicked", area.id);
    history.push(`/muscle/${area.id}`);
  };

  return (
    <div className="App">
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          <HumanAnatomy handleMuscleClick={handleMuscleClick} />
        </Route>
        <Route path="/muscle/:id">
          <MuscleDashboard />
        </Route>
        {/* <Route path="/exercise/:id">
          <ExerciseDashboard />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
