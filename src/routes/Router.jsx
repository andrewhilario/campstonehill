import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Activities from "../pages/Activities";
import Rooms from "../pages/Rooms";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";
import Info from "../pages/Info";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
