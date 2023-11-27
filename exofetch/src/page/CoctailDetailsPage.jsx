import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetailsPage () {
// ne pas oublier de modifier id (link et la route)
    const { id } = useParams();
    const [cocktails , setCocktail] = useState(null);

    useEffect(() => {
        (async () => {
            const CocktailDetailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
            const CocktailDetailsJs = await CocktailDetailsResponse.json();
      
            setCocktail(CocktailDetailsJs.drinks)
        })();
    }, []);
    

    return(
        <main>
            {cocktails ? (
                <>
                {cocktails.map((cocktail) => {
                    return(
                        <article>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt="" />
                        <p>Catégorie : {cocktail.strCategory}</p>
                        <p>Instructions : {cocktail.strInstructions}</p>
                    </article>
                    )  
                })}
                </>
                ) : (
                    <p>détails non dispo</p>
                ) }
        </main>
    )
}

export default CocktailDetailsPage