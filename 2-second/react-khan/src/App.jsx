import React from "react"
import LearnJsxs from "./components/LearnJsxs.jsx"
import Ternary from "./components/Ternary.jsx"
import NetflixSeries from "./components/NetflixSeries.jsx"
import NetflixSeriesSecond from "./components/NetflixSeriesSecond.jsx"
import ShowOutput from "../src/interviewQuestion/ShowOutput.jsx"
// import "./components/Netflix.css"
import styles from "./components/Netflix.module.css"
import StyledComponent from "./components/StyledComponent.jsx"
// these tow App function work same in backside
export  const App=()=>{
    console.log("this is app page");
    let critarialAge=17;
    let requiredAge=17;
return (
    <div className="container">
 {/* <NetflixSeries  age={16}/>
 <NetflixSeries  age={18}/>
 <NetflixSeries  age={15}/>
 <NetflixSeries  age={20}/>
 <NetflixSeries  age={18}/> */}
{/*<Ternary/> */}
{/* <ShowOutput /> */}
{/* the css styles.heading is comming through module css */}
<h1 className={styles["card-heading"]}>List of best netflix series</h1>
<NetflixSeriesSecond />
{/* <StyledComponent /> */}
</div>

)
}

{/* <LearnJsxs/> */}

// const NetflixSeries=()=>{
//     let ratings="8.2"
//     function returnGener(){
//         const gener="LongPong"
//         return gener;
//     }
//     return (
//         <div>
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







// export const App=()=>{
//   return React.createElement("h1",null,"Hello world by createElement");
// }




// react work like this is backside
// React.createElement("h1",null,"Hello world by createElement")