import React from 'react'
import Data from '../api/seriesData.json'
import NetflixCard from './NetflixCard'
export default function NetflixSeriesSecond(){
    console.log("NetflixSeriesSecond")
    console.log(Data)
  return (
    <ul className='ul grid grid-three-cols'>

        {/* {
            Data.map((item,i)=>{
                return   <li>
             <div>
                <img key={i} src={item.img_url} alt="image" width="40%" height="40%" />
         </div>
         <h2 key={i}>Name:{item.name}</h2>
         <h3 key={i}>Rating:{item.rating}</h3>
         <p key={i}>Summary:{item.description}</p>
         <p key={i}>Genre:{item.genre}</p>
         <p key={i}>Cast:{item.cast}</p>
         <a key={i} href={item.watch_url}>
            <button>Watch Now</button>
         </a>
         </li>
       
        })


  }  */}

   {
     Data.map((item,i)=>{

     return <NetflixCard key={i} data={item} />
     })
   }
      

    
       

       
    
    </ul>
  )
}
