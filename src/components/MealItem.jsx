import { Link } from "react-router-dom"

export default function MealItem(props){
  const {strMeal, strMealThumb, idMeal} = props
  return(
    <div className="card">
  <img src={strMealThumb} className="card-img-top" alt={strMeal} />
  <div className="card-body">
    <h5 className="card-title">{strMeal} </h5>
    <Link to={`/meal/${idMeal}`} className="btn btn-primary">Watch Recipe</Link>
  </div>
</div>
  )
}