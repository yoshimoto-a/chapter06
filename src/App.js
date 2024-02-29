import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { BlogItem } from "./BlogItem";
import { Detail } from "./Detail";

export const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<BlogItem />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
