
import Cocktails from "./page/Cocktails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePages";
import CategoriesPage from "./page/CategoriesPage";
import CocktailDetailsPage from "./page/CoctailDetailsPage";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/" element={<Cocktails />}/>
        <Route path="/" element={<CategoriesPage/>}/>
        <Route path="/cocktails/details/:id" element={<CocktailDetailsPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
