import React from 'react'

export default function NetflixCard({data}) {
// export default function NetflixCard(props) {
   //  console.log("from NetflixCard component",props.data)
   //  destructuring
   // const {data}=props
   const {id,img_url,name,rating,description,genre,cast,watch_url}=data
   // const {img_url,name,rating,description,genre,cast,watch_url}=props.data
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

 <li className='list'>
                 <img  src={img_url} alt="image" style={{width:"100%",height:"50%"}} />
                 <div className='card-content'>
          <h2>Name:{name}</h2>
          <h3>Rating:{rating}</h3>
          <p>Summary:{description}</p>
          <p>Genre:{genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")}</p>
          <a href={watch_url}>
             <button style={{height:'20px',background:"blue",color:"white"}}>Watch Now</button>
          </a>
          </div>
          </li>
    </>
  )
}
