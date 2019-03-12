import React from 'react';
import patientimage  from './patients.png'
import doctorimage from './doctors.png'
    
       
const Patientdoctor = (props)=> <div className = {`${props.patdoc.color}`}>   
<h2> {props.patdoc.title}</h2>
<p> {props.patdoc.text} </p> 
<div className = "image-choose ">
{ props.patdoc.choose ? 
   <select className="choose-country">
    <option value="#">CHOOSE COUNTRY</option>
    <option value="#">Argentina</option>
    <option value="#">Australia</option>
    <option value="#">Brasil</option>
    <option value="#">Chile</option>
    <option value="#">Colombia</option>
     <option value="#">Czech</option>
     <option value="#">France</option>
     <option value="#">Italie</option>
     <option value="#">Mexico</option>
     <option value="#">Peru</option>
     <option value="#">Poland</option>
     <option value="#">Portugal</option>
     <option value="#">Spain</option>
     <option value="#">Turkey</option>
     <option value="#">UK</option> 
     </select> : false}
        
   <img src = {props.patdoc.image } />
    </div>  
      </div>



let patientsdoctorslist = [{title:"For patients"
    ,text:"Find a doctor, book a visit and solve any health-related doubt", 
    choose : true ,
    image : patientimage, color: "patients"
    },
    {title:"For doctors"
    ,text:"Save time managing visits and cut no-shows by half", 
    choose : false,
    image : doctorimage,
    color: "doctors"
    }]

    function Section2 () {
        return (
    <div className="patients-doctors">
      
      {patientsdoctorslist.map( (el) => <Patientdoctor patdoc={el}/> )}
          
     </div>  

         );
        }

        export default Section2;