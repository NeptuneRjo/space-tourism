import './App.css';
import { Crew, Destination, Home, Navbar, Technology, Notfound } from './Components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="space__app-content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/destination'>
              <Destination />
            </Route>
            <Route path='/crew'>
              <Crew />
            </Route>
            <Route path='/technology'>
              <Technology />
            </Route>
            <Route path='*'>
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
