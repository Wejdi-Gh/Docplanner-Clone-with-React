import React from 'react';
import warsaw from './warsaw.png'
import barcelona from './barcelona.png'
import istanbul from './istanbul.png'
import rome from './rome.png'
import mexico from './mexico.png'
import curitiba from './rome.png'




const Cities = (props)=>  <div className="citiesnames">  
<a href="#" target="_blank"> 
   <img src={props.city.image}/> 
   <div className ="footer"> 
       <p> {props.city.title}</p>
       <form action="#" method ="post" target="_blank">
       <input type="submit"  value =" SEE OPENNINGS"/>
       </form>  
   </div>
</a>
</div>



let tabcities =[{image:warsaw, title:"Warsaw"},
{image:barcelona, title:"Barcelona"},
{image:istanbul, title:"Istanbul"},
{image:rome, title:"Rome"},
{image:mexico , title:"Mexico "},
{image:curitiba , title:"Curitiba "},
]


function Section5 () {
    return (
        <section class = "vision">
        <div class ="vision-description">
          <h4>Improve the lives of millions. <br/> Change yours forever </h4>  
            <p> More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops. </p>
           </div> 
         
         <div class= "cities"> 
           
           { tabcities.map(el => < Cities city={el}/>)} 
           </div>
           </section> 
     );
    }

    export default Section5;