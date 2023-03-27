import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import FavoriteList from "./components/FavoriteList";
import Main from "./components/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<FavoriteList />} />
      </Routes>
    </BrowserRouter>
  );
}
