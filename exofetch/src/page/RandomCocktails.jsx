import { useEffect, useState } from "react";
import CocktailCard from "../component/CocktailsCard";
import Header from "../component/Header";
function RandomPageCocktails() {
  const [coktailRandom, setCocktailRandom] = useState(null); // valeur initial de setcocktailrandom null

  // useEffect est une fonction que react me fournit
  // et qui permet d'exécuter du code uniquement à certains
  // chargements du composant (soit le premier, soit à chaque fois etc)
  // Ici, vu qu'on place un tableau vide en deuxième parametre
  // de use effect
  // ça signifie qu'on veut executer la fonction une seule fois
  // au premier chargement du composant
  useEffect(() => {
    // sauver moi jpp svp aider moi
    (async () => {
      const cocktailRandomResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php"); // chargement des composants de mon tableau dans une variable
      const cocktailJs = await cocktailRandomResponse.json(); // importation de mes composants en json

      setCocktailRandom(cocktailJs.drinks[0]);
    })();
  }, []);

  return (
    <>
    <Header/>
    <main>
      {coktailRandom !== null ? (
        //Je retourne  la variable RandomCocktail. Si Random Cocktail n'est pas nul a
        <CocktailCard cocktailToDisplay={coktailRandom}/>
      ) : (
        // sinon affiche =>
        <p>Cocktail en chargement</p>
      )}
    </main>
    </>
  );
}

export default RandomPageCocktails;