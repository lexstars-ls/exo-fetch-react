import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import CocktailCard from "../component/CocktailsCard";
function Cocktails() {

    const [cocktails, setCocktails] = useState(null);

    // if (!cocktails) { //Cette ligne vérifie si la variable `cocktails` est vide ou non. Si elle est vide, cela signifie qu'aucune donnée de cocktails n'a été récupérée auparavant.

    //     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=") //Cette ligne utilise la fonction `fetch` pour effectuer une requête HTTP GET à l'URL spécifiée. Dans ce cas, l'URL est une API qui renvoie des données de cocktails au format JSON.
    //         .then((response) => response.json()) // Cette ligne utilise la méthode `.then()` pour traiter la réponse de la requête. La méthode `.json()` est appelée sur la réponse pour la convertir en un objet JavaScript utilisable.
    //         .then((json) => {
    //             console.log(json);  //Cette ligne utilise à nouveau la méthode `.then()` pour traiter les données JSON récupérées. Dans ce cas, les données JSON sont affichées dans la console à l'aide de `console.log()`. Ensuite, la fonction `setCocktails()` est appelée pour mettre à jour la variable `cocktails` avec les données de cocktails récupérées.
    //             setCocktails(json.drinks);
    //         });
    // }

    if (!cocktails) {
        // fonction anonyme asynchrone (elle pas de nom)
        // qui s'autoinvoque
        // cela permet d'effectuer des opérations asynchrones (fetch etc)
        // sans devoir créer une vraie fonction asynchrone
        // (qu'on devrait appeler avec un await)
        (async () => {
          const coktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
          const cocktailsInJs = await coktailsResponse.json();
          setCocktails(cocktailsInJs.drinks);
        })();
      }
    
      return (
        <>
        <Header/>
        <main>
        {cocktails ? (
          <>
            {cocktails.map((cocktail) => {
              return <CocktailCard cocktailToDisplay={cocktail} />;
            })}
          </>
          ) : (
            <p>Cocktails en cours de chargement</p>
          )}
        </main>
        </>
      );
    }


export default Cocktails;