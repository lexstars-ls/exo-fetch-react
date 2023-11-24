
import Cocktails from "./page/Cocktails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePages";
import CategoriesPage from "./page/CategoriesPage";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/" element={<Cocktails />}/>
        <Route path="/" element={<CategoriesPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
