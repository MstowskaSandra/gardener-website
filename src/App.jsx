import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GardenCare from "./pages/services/GardenCare";
import LawnCare from "./pages/services/LawnCare";
import TreeCare from "./pages/services/TreeCare";
import GardenCleaning from "./pages/services/GardenCleaning";
import Sprays from "./pages/services/Sprays";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/uslugi/pielegnacja-ogrodow" element={<GardenCare />} />
          <Route path="/uslugi/pielegnacja-trawnikow" element={<LawnCare />} />
          <Route path="/uslugi/wycinka-drzew" element={<TreeCare />} />
          <Route
            path="/uslugi/sprzatanie-ogrodow"
            element={<GardenCleaning />}
          />
          <Route path="/uslugi/opryski" element={<Sprays />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
