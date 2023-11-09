import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movies } from "./components/pages/Movies";
import { Celebrity } from "./components/pages/Celebrity";
import { Header } from "./components/Header";
import { TV } from "./components/pages/TV";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="tv" element={<TV />} />
        <Route path="movies" element={<Movies />} />
        <Route path="celebrity" element={<Celebrity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
