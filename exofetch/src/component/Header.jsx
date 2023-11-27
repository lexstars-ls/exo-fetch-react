import { Link } from "react-router-dom"
function Header (){
    return (
        <>
       <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>

          <li>
            <Link to="/cocktailspage">Cocktail</Link>
          </li>
          
          <li>
            <Link to="/categoriepage">Catégories</Link>
          </li>

          <li>
            <Link to="/randompage">Random</Link>
          </li>

          <li>
            <Link to="/ingredientPage">Ingrédients</Link>
          </li>
        </ul>
      </nav>
    </header>

        </>
    )
}
export default Header