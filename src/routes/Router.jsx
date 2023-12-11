import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<p>Gallery</p>} />
        <Route path="/ilulli" element={<p>Ilulli Restaurant</p>} />
        <Route path="/events" element={<p>Events</p>} />
        <Route path="/info" element={<p>info</p>} />
        <Route path="/contact" element={<p>Contact</p>} />
        <Route path="/careers" element={<p>Careers</p>} />
        <Route path="/blog" element={<p>Blog</p>} />
      </Routes>
    </BrowserRouter>
  );
}
