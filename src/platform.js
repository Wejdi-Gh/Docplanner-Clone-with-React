import React from 'react';
import biglogdocplanner from './biglogo.png'
import flag from './flag.png'
import calender from './calender.png'
import visit from './visit.png'
import solution from './solution.png'


const Card = (props)=> <div className = {` ${props.thecard.name}`}>
<img src={props.thecard.image}/>
<h4> {props.thecard.title} </h4>
<p> {props.thecard.text}  </p>
</div>



let tabcard1 =[{image:flag , title:"Leader in 10 countries" , text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile " , name :"leader"},
{image:calender , title:"30 million unique patients" , text:"visit us every month ",name :"calendar" }
]

let tabcard2 =[{image:visit , title:"1 million appointments" , text:"booked last month ",name :"visit" },
{image:solution , title:"2 million active doctors" , text:"trust in our solutions  " ,name :"solutions"}
]

function Section4 () {
    return (
 <div className= "platform">
     <div className= "platform-descp"> 
        <div className= "descp-head"> <h3> The world's <br/> biggest healthcare platform </h3>
         <p> We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries. </p>
         </div>
          <img src={biglogdocplanner} alt=" logo docplanner" className="big-logo-docplanner"/>
        </div>

     <div className ="stat"> 
        <div className ="stat-right">
        {tabcard1.map( (el) => <Card thecard={el}/> )}
        </div>
        <div className ="stat-left">
        {tabcard2.map( (el) => <Card thecard={el}/> )}
        </div>
    </div>
</div>
     );
    }

    export default Section4;