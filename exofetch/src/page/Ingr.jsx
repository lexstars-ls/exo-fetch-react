import { useEffect, useState } from "react";

function Ingr() {
    const [ingredient, setIngredient] = useState(null);

    useEffect(() => {
        (async () => {
            const ingredientResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
            const ingredientJs = await ingredientResponse.json();
            setIngredient(ingredientJs.drinks)


        })();
    }, []);

    return (
        <>
            {ingredient !== null ? (
                <section>
                    {ingredient.map((cocktailIngr) => {
                        return (

                            <h2>{cocktailIngr.strIngredient1} </h2>
                        )

                    })}
                </section>
            ) : (
                <p>erreur</p>
            )}


        </>
    )
}

export default Ingr