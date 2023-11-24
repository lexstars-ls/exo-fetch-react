import { useState } from "react";
function RandomCocktails (){
    // je déclare une variable usestate (pour obtenir un cocktail random dans un tableau élément)
    const [cocktailRandom, setCocktailRandom] = useState(null);

    // ma boucle iff me permet de vérifier que cocktailrandom n'est pas null
    if(!cocktailRandom){
        (async ()=>{
            const coktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php"); // Ma var coktailResponse récupere depuis ma base de donnée un élément de mon tab aléatoirement
            const CocktailJs = await coktailsResponse.json() // ma var CocktailJs traite la réponse obtenue de cockTailresponse en json
           

            setCocktailRandom(CocktailJs.drinks[0]);  // je récup la valeurs de mon tableau
          })();
    }

       
    

       return (

        <>
         <p>RANDOM</p>
         <main>
                {/* Si cocktail est chargé j'affiche en titre le nom de mon élément aléatoire  */}
            {cocktailRandom ?(

             <article>
                <h1>{cocktailRandom.strDrink} </h1>
             </article>
            ) :(
                // sinon j'affiche un message de chargement
              <p>Coktail en chargement</p>
            )}
         </main>
        </>
    )
}
export default RandomCocktails