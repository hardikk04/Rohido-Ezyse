import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Booking from "./components/Booking";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<Booking />}></Route>
    </Routes>
  );
};

export default App;
