import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Confess from "./pages/Confess";
import Confession from "./pages/Confession";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="confess" element={<Confess />} />
          <Route path="confession/:id" element={<Confession />} />
        </Routes>
    </div>
  );
}

export default App;
