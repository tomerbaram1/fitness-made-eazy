import "./App.css";
import Home from "./features/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Programs } from "./features/Programs/Programs";
import Learn from "./features/Learn/Learn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Programs" element={<Programs></Programs>}></Route>
        <Route path="/Learn" element={<Learn></Learn>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
