import "./App.css";
import { Crew, Destination, Home, Technology, Notfound } from "./Pages";
import { Navbar } from "./Components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import data from "./data.json";

function App() {
  const handleClick = (items, classToUse, selectedComponent) => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(classToUse);
    }

    selectedComponent.classList.add(classToUse);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar navItems={data?.navbar} />
        <div className="space__app-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route
              path="/destination"
              element={<Destination handleClick={handleClick} />}
            />
            <Route
              path="/crew"
              element={
                <Crew crewMembers={data?.crew} handleClick={handleClick} />
              }
            />
            <Route
              path="/technology"
              element={<Technology handleClick={handleClick} />}
            />
            <Route exact path="/" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
