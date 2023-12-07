import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Movie } from './Components/pages/Movie';
import { Celebrity } from './Components/pages/Celebrity';
import { Header } from './Components/Header';
import { TV } from './Components/pages/TV';
import { Home } from './Components/pages/Home';
import './App.css';
import MovieDetail from './Components/pages/MovieDetail';
import { NotFound } from './Components/pages/NotFound';
import Weather from './Components/pages/Weather';
import Login from './Components/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="tv" element={<TV />} />
        <Route path="movies" element={<Movie />} />
        <Route path="celebrity" element={<Celebrity />} />
        <Route path="login" element={<Login />} />
        <Route path="/movie/:name" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
