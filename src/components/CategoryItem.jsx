import { Link } from "react-router-dom"

export default function CategoryItem(props){
  const {idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props
  return(
    <div className="card">
    <img src={strCategoryThumb} className="card-img-top" alt={strCategory}/>
      <div className="card-body second-card">
        <h5 className="card-title">{strCategory}</h5>
        <p>{strCategoryDescription.slice(0, 50)}...</p>
        <Link to={`/category/${strCategory}`} className="btn btn-primary px-2">Watch Category</Link>
      </div>
    </div>
  )
}
