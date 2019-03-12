import React from 'react';
import logo from './VzQxcKA.png'

 
function Section1 () {
    return (
<section className="description">
   <div className="title">
    <img src={logo} alt= "image Docplanner" className=" image-docplanner"/>
    <h1> Making the healthcare experience more human </h1>
     </div>
    <div className = "description-text"> 
  <p className = "part-a">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere. </p> 
  <p className  = "part-b"> We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p> 
   </div>
  </section>  
     );
    }
    export default Section1;

  
  