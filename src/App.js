import "./App.css";
import Home from "./features/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
