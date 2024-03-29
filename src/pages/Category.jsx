import { useParams, } from "react-router-dom"
import { getFilterCategories } from "../api";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import MealList from "../components/MealList";

export default function Category(){
  const {name} = useParams()
  const [meals, setMeals] = useState([])
  useEffect(()=>{
    getFilterCategories(name).then(data =>setMeals(data.meals))
  }, [name])

  return(
    <div>
      {!meals.length ? <Loader /> : <MealList meals={meals} />}
    </div>
  )
}