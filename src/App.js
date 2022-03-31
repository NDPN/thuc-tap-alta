import "./asset/css/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Manage from "./page/manage/Manage";
import Checking from "./page/checking/Checking";
import Setting from "./page/setting/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Checking" element={<Checking />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
