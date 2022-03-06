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
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
          <div className="space__app-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/destination' component={Destination} />
              <Route path='/crew' component={Crew} />
              <Route path='/technology' component={Technology} />
              <Route path='*' component={Notfound} />
            </Switch>
          </div>
      </div>
    </ Router>
  );
}

export default App;
