// const NetflixSeries=(props)=>{
//     let ratings="8.2"
//     function returnGener(){
//         const gener="LongPong"
//         return gener;
//     }
//     return (
//         <div>
//             {props.age}
//             <button>Watch now</button>
//             <br />
// <img src="netflix.jpg" alt="image" width="40%" height="40%" />
// <h1>Name : Queen of Tears</h1>
// <h3>Ratings: {Math.floor(18/5.24)}</h3>
// <h3>Genre: {returnGener()}</h3>
// <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eum, commodi provident laborum, quaerat quibusdam necessitatibus nemo quasi fugiat, eveniet omnis tempora quae possimus atque doloremque perspiciatis neque ab magni.</p>
// </div>
//     )
// }



import React from 'react'

export default function NetflixSeries(props) {
        let ratings="8.2"
    function returnGener(){
        const gener="LongPong"
        return gener;
    }
  return (
    <div>
                 {props.age >=18 ?
                 <button>Watch now</button>:
                 "this content is not for you"
                 }
                 
                 <br />
     <img src="netflix.jpg" alt="image" width="40%" height="40%" />
     <h1>Name : Queen of Tears</h1>
     <h3>Ratings: {Math.floor(18/5.24)}</h3>
     <h3>Genre: {returnGener()}</h3>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eum, commodi provident laborum, quaerat quibusdam necessitatibus nemo quasi fugiat, eveniet omnis tempora quae possimus atque doloremque perspiciatis neque ab magni.</p>
     </div>
  )
}
