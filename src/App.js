import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Contact from "./pages/Contact";
import Information from "./pages/Information";
import Guide from "./pages/Guide";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route index element={<Home  />} />
      <Route path='contact' element={<Contact />} />
      <Route path='information' element={<Information />} />
      <Route path='guide' element={<Guide />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
