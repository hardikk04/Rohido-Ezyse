import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
