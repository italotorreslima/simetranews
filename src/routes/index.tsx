import { Routes, Route } from "react-router-dom";
import { Blog } from "../pages/Blog";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogid" element={<Blog />} />
    </Routes>
  );
}
