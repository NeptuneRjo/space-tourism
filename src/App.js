import "./App.css";
import {
  Crew,
  Destination,
  Home,
  Navbar,
  Technology,
  Notfound,
} from "./Components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="space__app-content">
          <Switch>
            <Route exact path="/space-tourism/">
              <Home />
            </Route>
            <Route path="/space-tourism/destination">
              <Destination />
            </Route>
            <Route path="/space-tourism/crew">
              <Crew />
            </Route>
            <Route path="/space-tourism/technology">
              <Technology />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
