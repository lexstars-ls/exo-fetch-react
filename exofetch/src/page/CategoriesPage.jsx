import { useEffect, useState } from "react";

function CategoriesPage (){

const [categories , setCategories] = useState(null)

useEffect(()=>{
    (async ()=>{
     const categoriesResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
     const categoriesJs = await categoriesResponse.json();
     setCategories(categoriesJs.drinks)
    })();
},[]);


 return(
    <main>
    
        
    {categories !== null ? (
      <div>
        {categories.map((category) => {
          return (
            <article>
              <h2>{category.strCategory}</h2>
            </article>
          );
        })}
      </div>
    ) : (
      <p>En cours de chargement</p>
    )}
  </main>
 )
}
export default CategoriesPage