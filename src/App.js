import "./asset/css/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Manage from "./page/manage/Manage";
import Checking from "./page/checking/Checking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Checking" element={<Checking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
