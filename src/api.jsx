import { APIURL } from "./config";

const getMealById = async (mealId) =>{
  const response = await fetch(APIURL + 'lookup.php?i=' + mealId)
  return await response.json()
}

const getAllCategories = async ()=>{
  const response = await fetch(APIURL + 'categories.php')
  return await response.json()
}

const getFilterCategories = async (categoryName) =>{
  const response = await fetch(APIURL + 'filter.php?c=' + categoryName)
  return await response.json()
} 
export {getMealById, getAllCategories, getFilterCategories}