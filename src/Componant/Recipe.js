import React, { useState } from 'react'
import './Recipe.css';
// import Calories from './Calories';
const Recipe = ({currItem}) => {
    const [viewIngredients,setViewIngredients]=useState(false)
    const [viewCalories,setViewCalories]=useState(false)
    
    const onIngredients = () =>{
       setViewIngredients(true)
    if(viewIngredients){
      setViewIngredients(false)
    }
     else if(viewCalories){
         setViewIngredients(true)
       setViewCalories(false)

     }
    }
    const onCalories = () => {
        setViewCalories(true)
      
        if(viewCalories){
          setViewCalories(false)
        }
      else if(viewIngredients){
         setViewIngredients(false)
         setViewCalories(true)
     }
    }
    
    return (<>
                <div className="card m-4 shadow-lg p-3 mb-5 bg-red rounded" style={{width: "18rem",textAlign:"center"}}>
                  <img className="card-img-top bg-image hover-overlay hover-zoom hover-shadow ripple" src={currItem.recipe.image} alt="Image_Loading_Error" />
                  <div className="card-body">
                    <h5 className="card-title">{currItem.recipe.label}</h5>
                    <a href={currItem.recipe.url}>More Details</a>
                    <div className="twoButton">
                    <button className="btn btn-outline-success mt-4 " style={{position: 'relative', right: '20%'}} onClick={onIngredients}>INGREDIENTS</button>
                    <button className="btn btn-outline-success mt-4 " style={{position: 'relative', right: '20%'}} onClick={onCalories}>CALORIES</button>
                    </div>
                    <div>
                    {/* <Calories  whenclick={whenClick} currItem={currItem}/> */}
                    </div>
                     <div className="data">
                         { viewIngredients &&
                             <p><span style={{color:"red",fontFamily:"-moz-initial",fontSize:"large"}}>Ingredients<br/></span>{currItem.recipe.ingredientLines}</p>
                         }
                     {/* {click ? <p><span style={{color:"red",fontFamily:"-moz-initial"}}>Ingredients<br/></span>{currItem.recipe.ingredientLines}</p> : ""} */}
                    
                     {
                         viewCalories &&  <>
 
 <div style={{display:"table-cell",marginLeft:"-5%",textAlign:"left"}}>
              
                        <ul>
                            <li><span style={{fontSize:"large",color:"red", marginLeft:"-10%"}}>{currItem.recipe.totalDaily.PROCNT.label}</span>:-<span style={{fontSize:"90%"}}>{currItem.recipe.totalDaily.PROCNT.quantity} %</span></li>
                            <li><span style={{fontSize:"large",color:"red", marginLeft:"-10%"}}>{currItem.recipe.totalDaily.CHOCDF.label}</span>:-<span style={{fontSize:"90%"}}>{currItem.recipe.totalDaily.CHOCDF.quantity} %</span></li>
                            <li><span style={{fontSize:"large",color:"red", marginLeft:"-10%"}}>{currItem.recipe.totalDaily.CA.label}</span>:-<span style={{fontSize:"90%"}}>{currItem.recipe.totalDaily.CA.quantity} %</span></li>
                            <li><span style={{fontSize:"large",color:"red", marginLeft:"-10%"}}>{currItem.recipe.totalDaily.FAT.label}</span>:-<span style={{fontSize:"90%"}}>{currItem.recipe.totalDaily.FAT.quantity} %</span></li>
                        </ul> 
                          </div>
                          {/* <Calories currItem={currItem} /> */}
                     </>}
                    </div>
                  </div>
                </div>
    </>)
}

export default Recipe
