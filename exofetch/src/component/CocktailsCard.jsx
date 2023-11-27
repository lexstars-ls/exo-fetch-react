import { Link } from "react-router-dom";






function CocktailCard({ cocktailToDisplay }) {

    const handleDeleteCocktail = async (event, id) => {

    //    ce fetch va stocker les valeurs qui seront sup
        await fetch("https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php?i=" + id, {
          method: "DELETE",
        });
      };





    return (
        <article>
            <h2>{cocktailToDisplay.strDrink}</h2>
            <img src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />
            <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Voir le détail du cocktail</Link>



            {/* //* ce bouton est lier a l'id de mon coctail par un event listener. si je click sur le bouton il supp l'élément relier a l'id du boutton */}

            <button
                onClick={(event) => {
                    handleDeleteCocktail(event, cocktailToDisplay.idDrink);
                }}
            >
                Supprimer le cocktail
            </button>
        </article>
    );
}

export default CocktailCard;