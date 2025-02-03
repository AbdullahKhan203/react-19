import React from 'react'

export default function NetflixCard({data}) {
   
   // export default function NetflixCard(props) {
      //  console.log("from NetflixCard component",props.data)
      //  destructuring
      // const {data}=props
   const {id,img_url,name,rating,description,genre,cast,watch_url}=data
   // const {img_url,name,rating,description,genre,cast,watch_url}=props.data
   const ratingClass=rating <=5 ? "below-average" : rating >5 && rating<=10 ? "average" : rating >10 && rating <=15 ? "super_hit" : "";

   let btn_style={height:'20px',
      background:`${rating <=5 ? "red": rating >5 && rating<=10 ?  "yellow" : rating>10 && rating<=15 ? "green":"" }`,
      color:"black",
      border:0,
      padding:'2px 1px',
   borderRadius:"20%"
}


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
          
         
          {/* <p>RAting:<span style={{backgroundColor:`${rating<=5?"red": rating>5 && rating<=10 ? "yellow": rating >10 && rating<=15 ? "green" : "none"}`,fontWeight:'bold'}}>{rating}</span></p> */}
         
          {/* <p style={{backgroundColor:'yellow'}}>RAting:{rating}</p> */}
          {/* <p>Rating:<span className={`rating ${rating <=5 ? "below-average" : rating>5 && rating<=10 ? "average" : rating >10 && rating <=15 ? "super_hit" : "" }`}>{rating}</span></p> */}
          <p>Rating:<span className={`rating ${ratingClass}`}>{rating}</span></p>
          <p>Summary:{description}</p>
          <p>Genre:{genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")}</p>
          <a href={watch_url}>
             <button style={btn_style}>Watch Now</button>
          </a>
          </div>
          </li>
    </>
  )
}
