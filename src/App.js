import axios from "axios";
import "./App.css";
import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipe from "./Componant/Recipe";
import Calories from "./Componant/Calories";


const App = () => {
  const [query, setQuery] = useState(null);
  const [recipes, setRecipes] = useState(null);
  // const [alert,setAlert]=useState("")


  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getdata = async () => {

    if(query){
      const result = await axios.get(url);

      if (!result.data.more) {
        return alert("No food with such name, Clear and search diffrent Food");
      }

      setRecipes(result.data.hits);

      setQuery("");
    }
    else{
      alert('please enter valid input')
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getdata();
  };
  return (<>
  <div className="App">
  <h1 className="title">Foodie Search</h1>
  <div>
    <p className="mt-2">Here You Can view Details About The Food</p>
  </div>
             
      <form onSubmit={onSubmit} className="search-form">
      
        <input 
          className="input"
          type="text"
          name="query"
          onChange={(e)=>setQuery(e.target.value)}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
         />
        <div className="but">
        <button className="btn btn-outline-info" onClick={getdata} >Search</button>
        </div>


      </form>
      <div className="recipes">
          {recipes && recipes.map(currItem => <>
          <Recipe currItem={currItem} />
          
          </>)}
      </div>
    </div>
  </>);
};

export default App;
