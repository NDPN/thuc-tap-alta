import "./asset/css/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Manage from "./page/manage/Manage";
import Home from "./page/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
