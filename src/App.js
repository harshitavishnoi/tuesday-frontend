import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Board from "./pages/Board";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/board" element={<Board/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
