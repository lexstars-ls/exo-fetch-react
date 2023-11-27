
import Cocktails from "./page/Cocktails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePages";
import CategoriesPage from "./page/CategoriesPage";
import CocktailDetailsPage from "./page/CoctailDetailsPage";
import Ingr from "./page/Ingr";
import RandomPageCocktails from "./page/RandomCocktails";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cocktailspage" element={<Cocktails />}/>
        <Route path="/categoriepage" element={<CategoriesPage/>}/>
        <Route path="/cocktails/details/:id" element={<CocktailDetailsPage/>}/>
        <Route path="/ingredientpage" element={<Ingr/>}/>
        <Route path="/randompage" element={<RandomPageCocktails/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
