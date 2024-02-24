import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import Notfound from "./Notfound"

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filterCatalog, setFilterCatalog] = useState([])   //searchga tegishli//
  const [notFound, setNotFound] = useState(false)    //searchga tegishli//
  const {pathname, search} = useLocation()    //searchga tegishli//
  const navigate = useNavigate()

  const handleSearch = (str) => {
    setFilterCatalog(catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())));
    navigate({ 
      pathname, 
      search: `?search=${str}`
    });
  };     //searchga tegishli//

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories); 

      if (search && !data.categories.some(item => item.strCategory.toLowerCase().includes(search.split("=")[1].toLowerCase()))) {
        setNotFound(true);
      } else {
        setNotFound(false);

        setFilterCatalog(search ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split("=")[1].toLowerCase())) : data.categories);
      }    //searchga tegishli//
    });
  }, [search]);
 
  if (notFound) {
    return <Notfound />;
  }     //searchga tegishli//

  return (
    <div>
      <Search cb={handleSearch}/>
      {!catalog.length ? (<Loader />) : (<CategoryList catalog={filterCatalog} />)}
    </div>
  );
}