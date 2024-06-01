import "./assets/main.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Leaders from "./Pages/Leaders/Leaders";
import Events from "./Pages/Events/Events";
import Tracks from "./Pages/Tracks/Tracks";
import Footer from "./components/Header/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leaders" element={<Leaders />} />
          <Route path="/Tracks" element={<Tracks />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
