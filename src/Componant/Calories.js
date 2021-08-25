import React from 'react'

const Calories = (currItem) => {
    console.log("currItem is",currItem)
    return (<>
       
                         <div style={{display:"table-cell"}}>
                        
                       <ul>
                           <li>{currItem.recipe.totalDaily.PROCNT.label}:-{currItem.recipe.totalDaily.PROCNT.quantity} %</li>
                           <li>{currItem.recipe.totalDaily.CHOCDF.label}:-{currItem.recipe.totalDaily.CHOCDF.quantity} %</li>
                           <li>{currItem.recipe.totalDaily.CA.label}:-{currItem.recipe.totalDaily.CA.quantity} %</li>
                           <li>{currItem.recipe.totalDaily.FAT.label}:-{currItem.recipe.totalDaily.FAT.quantity} %</li>
                       </ul>
                         </div>
    </>)
}

export default Calories




{/* <p><span style={{color:"red",fontFamily:"-moz-initial"}}>Ingredients<br/></span>{currItem.recipe.ingredientLines}</p> : ""}
               <p>{currItem.recipe.totalDaily.PROCNT.label}:-{currItem.recipe.totalDaily.PROCNT.quantity} %</p>
               <p>{currItem.recipe.totalDaily.CHOCDF.label}:-{currItem.recipe.totalDaily.CHOCDF.quantity} %</p>
               <p>{currItem.recipe.totalDaily.CA.label}:-{currItem.recipe.totalDaily.CA.quantity} %</p>
               <p>{currItem.recipe.totalDaily.FAT.label}:-{currItem.recipe.totalDaily.FAT.quantity} %</p>  */}