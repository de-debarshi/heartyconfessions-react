import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import SubmitConfession from "./pages/SubmitConfession";
import Confession from "./pages/Confession";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="submit" element={<SubmitConfession />} />
          <Route path="explore" element={<Explore />} />
          <Route path="confession/:id" element={<Confession />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
