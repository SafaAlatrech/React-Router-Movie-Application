import React from 'react'

const Startrating = ({rate,handlerate}) => {
    const stars =(n) => {
      let star=[];
      for (let i=1 ; i<=5 ; i++) {
        if (i<=n) {
             star.push(
              <span key={i}
              onClick={()=>handlerate(i)}
              style={{color:"gold",cursor:"pointer"}}>★</span>
             )
        }
        else star.push (
            <span key={i}
            onClick={()=>handlerate(i)}
            style={{color:"black",cursor:"pointer"}}>★</span>
        )
      }
      return star; 
    }
    
  return (
    <div>
         {stars(rate)}
    </div>
  )
}
Startrating.defaultProps={
    rate:1,
    handlerate:() => {
      
    }
    
}
export default Startrating
