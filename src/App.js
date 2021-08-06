import Pomodoro from "./Timer/Pomodoro";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShortBreak from "./Timer/ShortBreak";
import Header from "./Header";
import LongBreak from "./Timer/LongBreak";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="pomodoro" element={<Pomodoro />} />
        <Route path="shortBreak" element={<ShortBreak />} />
        <Route path="longBreak" element={<LongBreak />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
