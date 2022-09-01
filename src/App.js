import "./App.css";
import { Crew, Destination, Home, Technology, Notfound } from "./Pages";
import { Navbar } from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const handleClick = (items, classToUse, selectedComponent) => {
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(classToUse);
      console.log("removed", classToUse);
    }

    selectedComponent.classList.add(classToUse);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="space__app-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/destination"
              element={<Destination handleClick={handleClick} />}
            />
            <Route path="/crew" element={<Crew handleClick={handleClick} />} />
            <Route
              path="/technology"
              element={<Technology handleClick={handleClick} />}
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
