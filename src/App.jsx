import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<Booking />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default App;
