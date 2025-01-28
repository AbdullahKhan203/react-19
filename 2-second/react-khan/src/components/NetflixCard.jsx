import React from 'react'

export default function NetflixCard(props) {
    console.log("from NetflixCard component",props.data)
  return (
    <>
    {/* {props.data.map((item,i)=>{
    
     return <li>
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
          } */}

 <li>
              <div>
                 <img  src={props.data.img_url} alt="image" width="40%" height="40%" />
          </div>
          <h2>Name:{props.data.name}</h2>
          <h3>Rating:{props.data.rating}</h3>
          <p>Summary:{props.data.description}</p>
          <p>Genre:{props.data.genre}</p>
          <p>Cast:{props.data.cast}</p>
          <a href={props.data.watch_url}>
             <button>Watch Now</button>
          </a>
          </li>
    </>
  )
}
