import { useParams, useNavigate } from "react-router-dom"
import { getMealById } from "../api"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"

export default function Recipe(){
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)
  const {id} = useParams()

  const handleShowRecipe =()=>{
    setShowRecipe(!showRecipe)
  }

  useEffect(()=>{
    getMealById(id).then(data => setRecipe(data.meals[0]))
  })

  return(
    <div class="card border-white mb-3">
      <button className="btn btn-secondary" style={{width: '100px'}} onClick={() => navigate(-1)}>Go Back</button>
       <img className="card-img-top mx-auto img-fluid mt-4" src={recipe.strMealThumb} alt={recipe.strMeal} style={{maxWidth: '1000px', maxHeight: '600px'}} />
      <div className=" row">
      <div className="card-body col-6">
        <h2 className="card-title text-danger">{recipe.strMeal}</h2>
        <h5><b>Category:</b>{recipe.strCategory}</h5>
        {recipe.strArea ? <h5> <b>Area:</b>{recipe.strArea}</h5> : null }
        <p>{recipe.strInstructions}</p>
      </div>
      <div className="card-body col-6">
        <button onClick={handleShowRecipe} className="btn btn-warning" >Show Recipe</button>
        {showRecipe ? (
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map(key =>{
                if(key.includes('Ingredient') && recipe[key]){
                  return(
                    <tr>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
          ) : null}
        
        {recipe.strYoutube ? (
        <div className="row">
          <h1>Video Resipe</h1>
          <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
        </div>
        ) : null}
      </div>
      </div>
    </div>
  )
}
