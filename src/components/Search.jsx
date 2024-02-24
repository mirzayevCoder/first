import { useState } from "react";

export default function Search({cb = function(){}}){
  const[value, setValue] = useState("");
  const handleKey = (e)=>{
    if(e.key === 'Enter'){
      e.preventDefault();
      handleSubmit()
    }
  }
  const handleSubmit=()=>{
    cb(value)
  }
  return(
    <div className="row justify-content-end mb-3">
      <form className="d-flex col-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <input className="form-control me-2 rounded-5" 
          type="search" 
          placeholder="Search..." 
          id="search-field"
          onKeyDown={handleKey}
          onChange={(e)=> setValue(e.target.value)}
          value={value} />
        <button className="btn btn-outline-success rounded-5" type="button" onClick={handleSubmit}>Search</button>
      </form>
    </div>
  )
}
